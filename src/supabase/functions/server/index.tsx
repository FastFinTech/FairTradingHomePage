import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-5262ebd1/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-5262ebd1/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { email, role, message } = body;

    // Validate required fields
    if (!email || !role) {
      return c.json({ error: "Email and role are required" }, 400);
    }

    // Create a unique key for this submission using timestamp
    const timestamp = new Date().toISOString();
    const key = `contact:${Date.now()}`;

    // Store the submission
    await kv.set(key, {
      email,
      role,
      message: message || "",
      timestamp,
    });

    console.log(`Contact form submission stored with key: ${key}`);

    return c.json({ 
      success: true, 
      message: "Submission received successfully" 
    });
  } catch (error) {
    console.error("Error storing contact form submission:", error);
    return c.json({ error: "Failed to process submission" }, 500);
  }
});

// Get all contact submissions (for admin purposes)
app.get("/make-server-5262ebd1/contacts", async (c) => {
  try {
    const submissions = await kv.getByPrefix("contact:");
    
    // Sort by timestamp (newest first)
    const sorted = submissions.sort((a, b) => {
      const timeA = new Date(a.timestamp || 0).getTime();
      const timeB = new Date(b.timestamp || 0).getTime();
      return timeB - timeA;
    });

    return c.json({ submissions: sorted });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

Deno.serve(app.fetch);