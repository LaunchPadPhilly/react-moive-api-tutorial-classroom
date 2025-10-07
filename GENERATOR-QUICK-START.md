# Generator Quick Start Guide

Get started with the Educational Project Generator in 5 minutes!

## Prerequisites

```bash
# Ensure you have Node.js v18+
node --version

# Ensure you have pnpm installed
pnpm --version
```

## Installation

```bash
# Navigate to generator directory
cd /home/s4developer/Projects/movie-search-app/generator

# Install dependencies
pnpm install
```

## Generate Your First Project

### Option 1: Interactive Mode (Recommended)

```bash
node generate-project.js
```

Follow the prompts:
1. **Project topic:** "Recipe Finder"
2. **Project type:** Web Application (SPA)
3. **Tech stack:** React + Vite
4. **Skill level:** Intermediate
5. **Duration:** 10 days
6. **Output directory:** ./recipe-finder-app

### Option 2: Command Line Mode

```bash
node generate-project.js "Recipe Finder" \
  --tech-stack react-vite \
  --duration 10 \
  --skill-level intermediate \
  --output ./recipe-finder-app
```

## What Gets Generated

After running the generator, you'll have:

```
recipe-finder-app/
├── README.md                     ✅ CCC.1 Level 10 documentation
├── CLAUDE.md                     ✅ AI assistant context
├── start_here.md                 ✅ Student onboarding
├── 00-problem.md                 ✅ Problem statement
├── 01-project-scope.md           ✅ Detailed scope
├── 04-SETUP_INSTRUCTIONS.md      ✅ Setup guide
├── TODO.md                       ✅ Project checklist
│
├── milestone/
│   ├── Milestone1/m1.md         ✅ Foundation guide
│   ├── Milestone2/m2.md         ✅ Core features guide
│   ├── Milestone3/m3.md         ✅ Advanced features guide
│   └── Milestone4/m4.md         ✅ Testing & deployment guide
│
├── facilitation-guide/          ✅ Instructor materials
│   ├── project-schedule.md
│   ├── example-week.md
│   ├── micro-milestones.md
│   └── term-example.md
│
└── business-case/               ✅ Assessment materials
    ├── oral-defense-rubric.md
    ├── oral-defense-presentation-template.md
    ├── incentive-requirements.md
    └── canva-presentation-design-guide.md
```

**Total: 30+ comprehensive educational files!**

## Next Steps

1. **Review Generated Project**
   ```bash
   cd recipe-finder-app
   cat README.md
   ```

2. **Start Building**
   ```bash
   # Follow the generated setup instructions
   cat 04-SETUP_INSTRUCTIONS.md

   # Begin with Milestone 1
   cat milestone/Milestone1/m1.md
   ```

3. **Use AI Assistant**
   - The `CLAUDE.md` file contains context for Claude Code
   - Open the project in VS Code with Claude Code extension
   - Claude will automatically use this context

## Example Projects

### Recipe Finder App

```bash
node generate-project.js "Recipe Finder" \
  --tech-stack react-vite \
  --output ./recipe-app
```

**Domain detected:** Recipe
**API suggested:** Spoonacular API
**Features:** Search recipes, view details, save favorites, nutrition info

### Budget Tracker

```bash
node generate-project.js "Budget Tracker" \
  --tech-stack react-vite \
  --output ./budget-app
```

**Domain detected:** Budget
**Storage:** localStorage (no external API)
**Features:** Add transactions, categorize, charts, budget limits, export

### Weather Dashboard

```bash
node generate-project.js "Weather Dashboard" \
  --tech-stack nextjs \
  --output ./weather-app
```

**Domain detected:** Weather
**API suggested:** OpenWeather API
**Features:** Current weather, forecast, location search, favorites, alerts

## Supported Project Types

| Domain | Keywords | API | Example Topics |
|--------|----------|-----|----------------|
| Movies | movie, film, cinema | OMDb API | Movie Search, Film Database |
| Recipes | recipe, food, cooking | Spoonacular | Recipe Finder, Meal Planner |
| Weather | weather, forecast | OpenWeather | Weather App, Forecast Tool |
| Music | music, song, artist | Spotify API | Music Discovery, Playlist Manager |
| Books | book, library, reading | Google Books | Book Library, Reading Tracker |
| Fitness | fitness, exercise, workout | ExerciseDB | Workout Tracker, Exercise Database |
| Budget | budget, expense, finance | localStorage | Expense Tracker, Budget Manager |
| Tasks | todo, task, checklist | localStorage | Todo List, Task Manager |

## Tech Stack Options

- `react-vite` → React 18 + Vite + TanStack Query
- `nextjs` → Next.js 14 + App Router + SWR
- `vue-vite` → Vue 3 + Vite + VueQuery
- `svelte-vite` → Svelte + Vite + Stores

## Skill Level Impact

### Beginner
- More detailed explanations
- Extra scaffolding in milestone guides
- Simpler feature scope
- More troubleshooting tips

### Intermediate (Default)
- Balanced detail level
- Standard feature scope
- Moderate troubleshooting

### Advanced
- Concise explanations
- Advanced feature suggestions
- Minimal scaffolding
- Stretch goals emphasized

## Duration Impact

- **1-7 days:** Condensed milestones, MVP focus
- **8-14 days:** Standard milestones (recommended)
- **15-30 days:** Extended milestones, more features

## Tips

1. **Start Simple:** Use default options first
2. **Review Generated Files:** Read README.md and start_here.md
3. **Follow Milestones:** Work through m1.md → m2.md → m3.md → m4.md
4. **Use TODO.md:** Track progress with generated checklist
5. **Customize:** Edit generated files to match your needs

## Troubleshooting

**Module not found:**
```bash
cd generator
pnpm install
```

**Permission denied:**
```bash
chmod +x generate-project.js
```

**Output directory exists:**
```bash
rm -rf ./existing-project
# Or choose a different output directory
```

## Get Help

- Read [GENERATOR-README.md](./GENERATOR-README.md) for full documentation
- Check existing STEP-BY-STEP-GUIDE for examples
- Review generated files for inline guidance

## Advanced Usage

### Generate Multiple Projects

```bash
# Project 1: Beginner level
node generate-project.js "Todo App" --skill-level beginner --output ./todo-app

# Project 2: Intermediate level
node generate-project.js "Recipe Finder" --skill-level intermediate --output ./recipe-app

# Project 3: Advanced level
node generate-project.js "Social Network" --skill-level advanced --output ./social-app
```

### Custom Duration

```bash
# 1-week project
node generate-project.js "Quick App" --duration 7 --output ./quick-app

# 2-week project (default)
node generate-project.js "Standard App" --duration 14 --output ./standard-app

# 3-week project
node generate-project.js "Complex App" --duration 21 --output ./complex-app
```

### Different Tech Stacks

```bash
# React + Vite (default, best for SPAs)
node generate-project.js "Movie App" --tech-stack react-vite --output ./movie-app

# Next.js (best for full-stack)
node generate-project.js "Blog Platform" --tech-stack nextjs --output ./blog-app

# Vue + Vite
node generate-project.js "Dashboard" --tech-stack vue-vite --output ./dashboard-app

# Svelte + Vite
node generate-project.js "Analytics Tool" --tech-stack svelte-vite --output ./analytics-app
```

## What Makes This Generator Special

✅ **30+ Files Generated:** Complete educational package
✅ **CCC.1 Level 10 Compliance:** Meets competency framework standards
✅ **Detailed Milestone Guides:** Step-by-step implementation instructions
✅ **Instructor Materials:** Facilitation guides, schedules, rubrics
✅ **Assessment Ready:** Oral defense rubrics and presentation templates
✅ **AI-Friendly:** CLAUDE.md context file for AI assistants
✅ **Domain-Aware:** Intelligently selects APIs and features based on topic
✅ **Tech Stack Flexible:** Multiple framework options
✅ **Skill Level Adaptive:** Adjusts complexity based on target audience

## Ready to Generate?

```bash
# Simple start
node generate-project.js

# Or with your project idea
node generate-project.js "Your Amazing App Idea"
```

---

**Happy Generating! 🚀**
