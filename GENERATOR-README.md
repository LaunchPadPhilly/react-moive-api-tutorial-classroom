# Educational Project Generator

A comprehensive tool for generating complete educational project structures that mirror the quality and depth of the STEP-BY-STEP-GUIDE format.

## Overview

This generator creates **30+ files** of educational content including:
- ✅ CCC.1 Level 10 competency documentation
- ✅ 4 detailed milestone guides with step-by-step instructions
- ✅ Facilitation guides for instructors
- ✅ Business case materials (rubrics, presentations)
- ✅ Learning resources and technical skill guides
- ✅ Fillable templates for students
- ✅ Complete setup and deployment instructions

## Generated Project Structure

```
generated-project/
├── README.md                          # Main project scope (CCC.1 Level 10)
├── CLAUDE.md                          # AI assistant context
├── .gitignore                         # Git ignore rules
├── start_here.md                      # Student onboarding
├── overview.md                        # High-level overview
├── 00-problem.md                      # Problem statement
├── 01-project-scope.md                # Detailed scope (CCC.1)
├── 02-wireframes-overview.md          # UI/UX design guide
├── 03-trello-project-board-guide.md   # Agile board setup
├── 04-SETUP_INSTRUCTIONS.md           # Setup & deployment
├── project-requirements-scope.md      # Fillable template
├── TODO.md                            # Project checklist
│
├── milestone/
│   ├── Milestone1/m1.md              # Foundation sprint
│   ├── Milestone2/m2.md              # Core features sprint
│   ├── Milestone3/m3.md              # Advanced features sprint
│   └── Milestone4/m4.md              # Testing & deployment sprint
│
├── img/                               # Wireframe images
├── learn-more/                        # Learning resources
├── tech-skills/                       # Technical tutorials
├── facilitation-guide/                # Instructor materials
└── business-case/                     # Assessment materials
```

## Installation

```bash
cd /home/s4developer/Projects/movie-search-app/generator
pnpm install
```

## Usage

### Interactive Mode (Recommended)

```bash
node generate-project.js
```

The CLI will prompt you for:
- Project topic (e.g., "Recipe Sharing App")
- Project type (Web SPA, Full-Stack, API, Mobile, Desktop)
- Tech stack (React+Vite, Next.js, Vue, Svelte)
- Skill level (Beginner, Intermediate, Advanced)
- Duration (1-30 days)
- Output directory
- Optional features (testing, accessibility)

### Command Line Mode

```bash
node generate-project.js "Recipe Sharing App" \
  --tech-stack react-vite \
  --duration 10 \
  --skill-level intermediate \
  --output ./my-project
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-o, --output <dir>` | Output directory | `./generated-project` |
| `-t, --tech-stack <stack>` | Tech stack preset | `react-vite` |
| `-d, --duration <days>` | Project duration | `10` |
| `-s, --skill-level <level>` | Target skill level | `intermediate` |
| `--no-interactive` | Skip prompts | `false` |

## Supported Tech Stacks

### Web Applications

**React + Vite** (`react-vite`)
- React 18, Vite bundler
- React Router, TanStack Query
- CSS3 (Grid + Flexbox)
- Vitest + React Testing Library

**Next.js** (`nextjs`)
- Next.js 14 with App Router
- React Server Components, SWR
- CSS Modules / Tailwind
- Jest + React Testing Library

**Vue + Vite** (`vue-vite`)
- Vue 3, Vite bundler
- Vue Router, VueQuery
- Scoped CSS
- Vitest + Vue Testing Library

**Svelte + Vite** (`svelte-vite`)
- Svelte, Vite bundler
- Svelte Router, Stores
- Scoped CSS
- Vitest + Svelte Testing Library

### Mobile Applications

**React Native + Expo** (`mobile-react-native`)
- React Native, Expo framework
- React Navigation
- AsyncStorage
- Jest + React Native Testing Library

## Project Domains

The generator intelligently analyzes your project topic and selects appropriate:
- APIs and data sources
- Core features and functionality
- User personas and target audiences
- Competing solutions analysis
- Technical challenges and constraints

### Supported Domains

| Domain | Example Topics | Suggested APIs |
|--------|---------------|----------------|
| **Movies** | Movie Search, Film Database | OMDb API, TMDb API |
| **Recipes** | Recipe Finder, Meal Planner | Spoonacular, Edamam |
| **Weather** | Weather App, Forecast Tool | OpenWeather, WeatherAPI |
| **Music** | Music Discovery, Playlist Manager | Spotify, Last.fm |
| **Books** | Book Library, Reading Tracker | Google Books, Open Library |
| **Fitness** | Workout Tracker, Exercise Database | ExerciseDB, Wger API |
| **Budget** | Expense Tracker, Budget Manager | localStorage (no external API) |
| **Tasks** | Todo List, Task Manager | localStorage (no external API) |

**Generic domain:** Any topic not matching above will use a generic template with customizable features.

## Generator Architecture

```
generator/
├── generate-project.js           # Main CLI script
├── package.json                  # Dependencies
│
├── generators/                   # Content generators
│   ├── structure-generator.js   # Directory structure & core files
│   ├── problem-generator.js     # Problem statements
│   ├── scope-generator.js       # CCC.1 Level 10 scope docs
│   ├── milestone-generator.js   # 4 milestone guides
│   ├── facilitation-generator.js # Instructor materials
│   └── business-case-generator.js # Assessment materials
│
├── utils/                        # Utility modules
│   ├── domain-analyzer.js       # Project domain analysis
│   └── tech-stack-selector.js   # Tech stack configuration
│
├── templates/                    # Reusable templates
│   ├── README.template.md
│   ├── milestone.template.md
│   └── ... (30+ templates)
│
├── config/                       # Configuration presets
│   ├── tech-stacks.json
│   ├── domains.json
│   └── patterns.json
│
└── examples/                     # Example outputs
    ├── recipe-app/
    ├── weather-dashboard/
    └── budget-tracker/
```

## Generated Documentation Standards

All generated projects follow these quality standards:

### CCC.1 Level 10 Competency Framework

**CCC.1.1: Understand and Identify a Problem**
- Problem context and implications
- Stakeholder analysis (primary, secondary, tertiary)
- Constraints (technical, resource, accessibility)
- Future challenges with mitigation strategies
- Analysis of competing solutions

**CCC.1.2: Identify and Plan a Solution**
- Technical challenges with solutions
- Resource requirements
- Agile 4-sprint project plan
- Project tracking methodology

**CCC.1.3: Implement a Solution**
- Industry-accepted methods (Agile, DevOps)
- Tools and best practices with code examples
- Implementation approach documented

**CCC.1.4: Test and Improve a Solution**
- Extensive testing plan (4 user categories)
- Design evaluation criteria (metrics)
- Targeted feedback strategy
- Revision and refinement process

**CCC.1.5: Document and Communicate a Solution**
- Industry-accepted documentation formats
- Solution effectiveness report with metrics
- Accurate technical terminology
- Professional, objective tone

### Milestone Structure

Each milestone includes:
- **Goal:** One-sentence sprint objective
- **Duration:** Time estimate
- **Learning Objectives:** Skills developed
- **Deliverables Checklist:** ✅ checkboxes
- **Step-by-Step Instructions:** With code examples
- **Testing Tasks:** Verification steps
- **Common Issues & Solutions:** Troubleshooting
- **Resources:** Documentation links
- **Success Criteria:** Completion criteria

### Accessibility Standards

All projects target:
- WCAG 2.1 AA compliance
- Lighthouse Accessibility ≥ 90
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ≥ 4.5:1
- Focus management
- Reduced motion support

### Performance Targets

- Lighthouse Performance ≥ 85
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Bundle Size < 500KB
- Test Coverage ≥ 70%

## Customization

### Adding New Domains

Edit `utils/domain-analyzer.js`:

```javascript
const domains = {
  'your-domain': {
    keywords: ['keyword1', 'keyword2'],
    apis: ['Your API Name'],
    features: ['feature1', 'feature2', 'feature3'],
    dataModels: ['Model1', 'Model2'],
    userTypes: ['user type 1', 'user type 2']
  }
};
```

### Adding New Tech Stacks

Edit `utils/tech-stack-selector.js`:

```javascript
const stacks = {
  'your-stack': {
    name: 'Your Stack Name',
    frontend: 'Framework',
    bundler: 'Build Tool',
    // ... configuration
  }
};
```

### Customizing Templates

Templates support variable substitution:

```markdown
# {{projectTopic}}

**Tech Stack:** {{techStackConfig.name}}
**Duration:** {{duration}} days

{{#coreFeatures}}
- {{.}}
{{/coreFeatures}}
```

## Examples

### Example 1: Recipe Sharing App

```bash
node generate-project.js "Recipe Sharing App" \
  --tech-stack react-vite \
  --duration 10 \
  --output ./recipe-app
```

**Generates:**
- React + Vite setup with Spoonacular API integration
- Search recipes, view details, save favorites
- 4 milestones: Foundation → Search → Favorites → Polish
- Complete CCC.1 Level 10 documentation

### Example 2: Budget Tracker

```bash
node generate-project.js "Budget Tracker" \
  --tech-stack react-vite \
  --duration 14 \
  --skill-level beginner \
  --output ./budget-tracker
```

**Generates:**
- React + Vite with localStorage (no external API)
- Add transactions, categorize, view charts, set budget limits
- Beginner-friendly milestone guides
- Extra scaffolding for learning

### Example 3: Weather Dashboard

```bash
node generate-project.js "Weather Dashboard" \
  --tech-stack nextjs \
  --duration 10 \
  --output ./weather-dashboard
```

**Generates:**
- Next.js 14 with App Router + OpenWeather API
- Current weather, forecasts, location search
- Server-side rendering examples
- Advanced caching strategies

## Quality Assurance

Generated projects include:

✅ **Completeness:** All 30+ files with real content
✅ **Educational Value:** Clear learning objectives per milestone
✅ **Technical Accuracy:** Current, maintained tech stacks
✅ **Professional Standards:** CCC.1 Level 10 compliance
✅ **Student-Friendly:** Clear instructions with troubleshooting

## Troubleshooting

### Common Issues

**Issue:** Module not found errors
```bash
# Solution: Install dependencies
cd generator
pnpm install
```

**Issue:** Permission denied
```bash
# Solution: Make script executable
chmod +x generate-project.js
```

**Issue:** Output directory exists
```bash
# Solution: Choose a different output directory or remove existing one
rm -rf ./generated-project
```

## Contributing

To improve the generator:

1. Add new domain patterns in `utils/domain-analyzer.js`
2. Add tech stack configurations in `utils/tech-stack-selector.js`
3. Create new template files in `templates/`
4. Update generator modules in `generators/`
5. Test with example projects

## Version History

**v1.0.0** (2025-10-07)
- Initial release
- Support for 8+ domains
- 4 tech stack presets (React, Next.js, Vue, Svelte)
- 30+ generated files per project
- CCC.1 Level 10 compliance
- Complete milestone guides

## License

MIT License - Educational use encouraged

---

**Generated with:** Educational Project Generator v1.0.0
**Based on:** STEP-BY-STEP-GUIDE format from movie-search-app
**Competency Framework:** CCC.1 Develop Technology Solutions (Level 10)
