# Setup Instructions

## Prerequisites

Before you begin, ensure you have:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **Git** installed ([Download](https://git-scm.com/))
- **pnpm** package manager
- **API Key** from Spoonacular API
- **Code Editor** (VS Code recommended)

## Installation Steps

### 1. Clone or Create Repository

```bash
# If starting fresh
mkdir recipe-sharing-app
cd recipe-sharing-app
git init

# If cloning existing repo
git clone <your-repo-url>
cd recipe-sharing-app
```

### 2. Install Dependencies

```bash
# Install pnpm if needed
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 3. Configure Environment Variables

Create `.env` file in project root:

```bash
VITE_SPOONACULAR_API_KEY=your_api_key_here
```

### 4. Get API Key

1. Visit https://spoonacular.com/food-api
2. Sign up for free account
3. Generate API key
4. Add to .env file

### 5. Start Development Server

```bash
pnpm run dev
```

Visit http://localhost:5173 in your browser.

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build project
pnpm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
pnpm install -D gh-pages

# Add to package.json scripts:
# "deploy": "pnpm run build && gh-pages -d dist"

# Deploy
pnpm run deploy
```

## Troubleshooting

**Module not found errors:**
```bash
rm -rf node_modules package-lock.json
pnpm install
```

**Port already in use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill

# Or change port in vite.config.js
```

**Build errors:**
```bash
# Clear build cache
rm -rf dist .vite

# Rebuild
pnpm run build
```

## Next Steps

1. Review [start_here.md](./start_here.md)
2. Begin with [Milestone 1](./milestone/Milestone1/m1.md)
3. Create Trello board following [03-trello-project-board-guide.md](./03-trello-project-board-guide.md)
