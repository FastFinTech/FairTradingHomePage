# FairTrading — Single Page Demo

This repository contains a polished single-page website demonstrating the FairTrading prop futures ecosystem. It's a static demo built from the content outline provided.

Files:

- `index.html` — Single-page HTML with hero, backend, platform, trading room, competition, prop firm sections and contact form.
- `styles.css` — Responsive, professional styles.
- `script.js` — Small interactions: smooth scrolling and demo signup toast.

## Development

### Live Preview

To launch a live preview that updates automatically as you edit files:

```bash
npm run preview
```

This will start a local server at `http://localhost:8080` that automatically reloads when you save changes.

### Real-Time Collaboration (Live Share)

To collaborate in real-time with your friend directly in the editor:

1. **Install Live Share extension:**
   - In Cursor, press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
   - Search for "Live Share" by Microsoft
   - Install "Live Share" and "Live Share Audio" (optional, for voice chat)

2. **Start a collaboration session:**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open Command Palette
   - Type "Live Share: Start Collaboration Session"
   - Sign in with GitHub or Microsoft account (first time only)
   - A link will be copied to your clipboard

3. **Share with your friend:**
   - Send them the collaboration link (via email, chat, etc.)
   - They click the link and it will open in their Cursor/VS Code
   - They'll see your editor in real-time and can edit together!

4. **Features:**
   - See each other's cursors and edits in real-time
   - Share terminal sessions (optional)
   - Share local servers (like the live preview)
   - Voice chat (if Live Share Audio is installed)
   - Follow each other's navigation

**Note:** Both of you need to have the Live Share extension installed. The person joining just needs to click the link - no additional setup required!

Notes:

- This is a static demo. The contact form is client-side only (no backend). Integrate with your preferred backend or email provider as needed.
- Fonts are loaded from Google Fonts (Inter).

Next steps (suggested):

- Add logo and brand assets under an `assets/` folder.
- Hook the signup form to an email provider or server endpoint.
- Add accessibility audits, i18n, or A/B variants for copy testing.
