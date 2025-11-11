# FairTrading Homepage

Open-source prop futures trading ecosystem homepage featuring a modern, dark-themed design with glassmorphism effects and smooth animations.

## About FairTrading

FairTrading is an open-source prop futures trading ecosystem that includes:

- **Data Feed & Exchange Simulator** - Real-time market data and simulation tools
- **Developer-First Trading Platform** - Built for developers who trade
- **Live Streaming Trading Rooms** - Collaborative trading environment
- **Competition Platform** - Compete with other traders and showcase your skills
- **Prop Firm Tools** - Comprehensive tools for managing prop trading firms

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern styling with custom design tokens
- **Supabase** - Backend services (database, auth, storage)
- **Lucide React** - Icon library
- **Motion (Framer Motion)** - Smooth animations
- **Recharts** - Competition data visualization

## Project Structure

```
├── App.tsx                          # Main application component
├── components/
│   ├── BackendSection.tsx           # Backend & simulator features
│   ├── CompetitionSection.tsx       # Competition platform overview
│   ├── CompetitionVisualization.tsx # Interactive competition demo
│   ├── ContactSection.tsx           # Contact form with Supabase integration
│   ├── Footer.tsx                   # Site footer
│   ├── Header.tsx                   # Navigation header
│   ├── Hero.tsx                     # Hero section
│   ├── PlatformSection.tsx          # Platform features
│   ├── PropFirmControlPanel.tsx     # Prop firm management demo
│   ├── PropFirmsSection.tsx         # Prop firm tools
│   └── TradingRoomSection.tsx       # Trading room features
├── styles/
│   └── globals.css                  # Global styles and design tokens
├── supabase/
│   └── functions/server/
│       ├── index.tsx                # Hono server for backend APIs
│       └── kv_store.tsx             # Key-value database utilities
└── utils/
    └── supabase/
        └── info.tsx                 # Supabase configuration
```

## Development

This project was built with Figma Make and uses modern React patterns with TypeScript.

### Prerequisites

- Node.js 18+ or Bun
- A Supabase project (for backend functionality)

### Environment Variables

The following Supabase environment variables are required for full functionality:

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- `SUPABASE_DB_URL` - Your Supabase database connection URL

## Deploying to Cloudflare Workers/Pages

### Option 1: Cloudflare Pages (Recommended for React Apps)

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   # or
   bun add -g wrangler
   ```

2. **Build your application**
   ```bash
   npm run build
   # or
   bun run build
   ```

3. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name fairtrading-homepage
   ```

4. **Set environment variables in Cloudflare Dashboard**
   - Go to your Pages project settings
   - Add the Supabase environment variables under Settings > Environment variables

### Option 2: Cloudflare Workers (for SSR/API routes)

1. **Create a `wrangler.toml` configuration file**
   ```toml
   name = "fairtrading-homepage"
   main = "src/index.tsx"
   compatibility_date = "2024-01-01"

   [build]
   command = "npm run build"

   [env.production]
   name = "fairtrading-homepage-production"
   ```

2. **Build the project**
   ```bash
   npm run build
   # or
   bun run build
   ```

3. **Deploy to Cloudflare Workers**
   ```bash
   wrangler deploy
   ```

4. **Set secrets for environment variables**
   ```bash
   wrangler secret put SUPABASE_URL
   wrangler secret put SUPABASE_ANON_KEY
   wrangler secret put SUPABASE_SERVICE_ROLE_KEY
   wrangler secret put SUPABASE_DB_URL
   ```

### Build Commands

Depending on your build setup, use one of these:

```bash
# Using npm
npm install
npm run build

# Using bun
bun install
bun run build

# Using Vite (if configured)
vite build

# Using webpack (if configured)
webpack --mode production
```

### Important Notes for Cloudflare Deployment

- **Supabase Edge Functions**: The backend server at `/supabase/functions/server/index.tsx` is designed for Supabase Edge Functions (Deno runtime). For Cloudflare deployment, you may need to:
  - Deploy the Supabase edge function separately to Supabase
  - Update API endpoints in the frontend to point to your Supabase function URL
  - Or migrate the backend logic to Cloudflare Workers

- **Asset Imports**: Figma assets imported via `figma:asset/...` will need to be properly resolved during build

- **Environment Variables**: Make sure all Supabase credentials are set in Cloudflare Pages/Workers settings

## Configuration

### GitHub Repository URL

To update the GitHub repository URL throughout the site:

1. **Search and replace** `YOUR_USERNAME/fairtrading` with your actual GitHub repo path:
   - `/components/FloatingGitHub.tsx` (line 20)
   - `/components/GetInvolvedSection.tsx` (line 49)
   - `/components/Header.tsx` (lines with GitHub links)

2. **Update the GitHub API call** in `/components/FloatingGitHub.tsx`:
   ```typescript
   // Replace this line (line 22)
   const response = await fetch('https://api.github.com/repos/microsoft/vscode');
   // With your actual repo
   const response = await fetch('https://api.github.com/repos/YOUR_USERNAME/fairtrading');
   ```

3. **Update stats fetching** in `/components/StatsBar.tsx` if desired

## Features

### Homepage Sections
- **Hero** - Eye-catching introduction with gradient effects
- **Stats Bar** - Live GitHub stats and social proof
- **Backend & Simulator** - Data feed and exchange simulation features
- **Platform** - Developer-first trading platform overview
- **Trading Rooms** - Live streaming and collaborative trading
- **Competition Platform** - Interactive visualization with leaderboard
- **Prop Firms** - Tools and control panel for prop firm management
- **Get Involved** - Developer, community, and investor CTAs
- **Contact** - Functional contact form with Supabase backend
- **Admin Dashboard** - View contact submissions at `/admin`

### Developer & Investor Engagement Features
- **Floating GitHub Button** - Sticky CTA with star count
- **GitHub Icon in Header** - Easy access to repository
- **Get Involved Section** - Three pathways: Developers, Community, Investors
- **Social Proof Bar** - GitHub stats, Discord, and badges
- **Investor Option** - Added to contact form dropdown

### Design Features
- Dark theme with glassmorphism effects
- Gradient accents (blue/purple/pink)
- Smooth scroll animations
- Responsive design (mobile, tablet, desktop)
- Professional fintech aesthetic

## License

Open-source project by Fair Trading First LLC.

## Contact

Built by traders, for traders. © 2025 Fair Trading First LLC
