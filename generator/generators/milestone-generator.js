/**
 * Milestone Generator
 * Creates 4 detailed milestone guides with step-by-step instructions
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateMilestones(outputDir, projectData) {
  const { duration, domainAnalysis, techStackConfig } = projectData;

  // Calculate days per milestone
  const daysPerMilestone = Math.ceil(duration / 4);

  // Generate all 4 milestones
  await generateMilestone1(outputDir, projectData, daysPerMilestone);
  await generateMilestone2(outputDir, projectData, daysPerMilestone);
  await generateMilestone3(outputDir, projectData, daysPerMilestone);
  await generateMilestone4(outputDir, projectData, daysPerMilestone);

  // Generate supporting files
  await generateWireframesOverview(outputDir, projectData);
  await generateTrelloGuide(outputDir, projectData);
  await generateSetupInstructions(outputDir, projectData);
}

async function generateMilestone1(outputDir, projectData, daysPerMilestone) {
  const { techStackConfig, projectName } = projectData;

  const content = `## 🏗️ Milestone 1: Project Scaffold & Basics

**Goal:** Set up project foundation with routing and basic structure

**Duration:** Days 1-${daysPerMilestone}

**Learning Objectives:**
- Set up ${techStackConfig.name} development environment
- Configure routing with ${techStackConfig.routing}
- Create base component structure
- Implement responsive CSS foundation

### Deliverables Checklist
- [ ] ${techStackConfig.name} project initialized
- [ ] Dependencies installed
- [ ] Routing configured (3+ routes)
- [ ] Base CSS with responsive utilities
- [ ] AppShell component with navigation
- [ ] Dev server running successfully

### Step-by-Step Instructions

#### Step 1: Create the Project

\`\`\`bash
# Create new project
${techStackConfig.setupCommand}

# Install dependencies
${techStackConfig.packageManager} install
\`\`\`

#### Step 2: Install Additional Dependencies

\`\`\`bash
# Core dependencies
${techStackConfig.packageManager} install ${techStackConfig.dependencies.join(' ')}

# Development dependencies
${techStackConfig.packageManager} install -D ${techStackConfig.devDependencies.join(' ')}
\`\`\`

#### Step 3: Set Up Environment Variables

Create \`.env\` file:
\`\`\`
${getEnvVariables(projectData)}
\`\`\`

Create \`.env.example\`:
\`\`\`
${getEnvExample(projectData)}
\`\`\`

#### Step 4: Create Directory Structure

\`\`\`bash
mkdir -p ${Object.keys(techStackConfig.folderStructure || techStackConfig['folder Structure']).join(' ')}
\`\`\`

#### Step 5: Configure Routing

${getRoutingSetup(techStackConfig, projectData)}

#### Step 6: Create Base CSS

${getBaseCssSetup(techStackConfig)}

#### Step 7: Create AppShell Component

${getAppShellSetup(techStackConfig, projectData)}

#### Step 8: Test the Setup

\`\`\`bash
# Start development server
${techStackConfig.packageManager} run dev
\`\`\`

**Verify:**
- Dev server runs at http://localhost:5173 (or configured port)
- Navigation between routes works
- CSS styles are applied
- No console errors

### Common Issues & Solutions

**Issue:** "Module not found" errors
**Solution:** Ensure all dependencies are installed with \`${techStackConfig.packageManager} install\`

**Issue:** Port already in use
**Solution:** Kill the process using the port or change the port in vite.config.js

**Issue:** Environment variables not loading
**Solution:** Ensure .env file is in project root and variables start with VITE_

### Resources
- [${techStackConfig.frontend} Documentation](https://react.dev/)
- [${techStackConfig.bundler} Guide](https://vitejs.dev/)
- [${techStackConfig.routing} Documentation](https://reactrouter.com/)

### Success Criteria
✅ Project builds without errors
✅ All routes are accessible via navigation
✅ Responsive layout works on mobile and desktop
✅ Git repository initialized with initial commit
`;

  await fs.mkdir(path.join(outputDir, 'milestone/Milestone1'), { recursive: true });
  await fs.writeFile(path.join(outputDir, 'milestone/Milestone1/m1.md'), content);
}

async function generateMilestone2(outputDir, projectData, daysPerMilestone) {
  const { techStackConfig, domainAnalysis } = projectData;
  const startDay = daysPerMilestone + 1;
  const endDay = daysPerMilestone * 2;

  const content = `## 🔍 Milestone 2: Core Feature Implementation

**Goal:** Implement ${domainAnalysis.coreFeatures[0]} functionality

**Duration:** Days ${startDay}-${endDay}

**Learning Objectives:**
- ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? `Integrate with ${domainAnalysis.suggestedApis[0]}` : 'Implement data management with localStorage'}
- Create custom hooks for data fetching
- Build responsive UI components
- Handle loading and error states

### Deliverables Checklist
- [ ] ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'API integration complete' : 'Data layer implemented'}
- [ ] ${capitalizeWords(domainAnalysis.coreFeatures[0])} component working
- [ ] ${capitalizeWords(domainAnalysis.coreFeatures[1])} component working
- [ ] Loading states implemented
- [ ] Error handling functional
- [ ] Responsive grid layout

### Step-by-Step Instructions

#### Step 1: ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'Set Up API Service' : 'Set Up Data Management'}

${getApiServiceSetup(projectData)}

#### Step 2: Create Custom Hooks

${getCustomHooksSetup(projectData)}

#### Step 3: Build Main Components

${getMainComponentsSetup(projectData)}

#### Step 4: Implement Loading & Error States

${getLoadingErrorSetup(techStackConfig)}

#### Step 5: Test Core Functionality

\`\`\`bash
# Run development server
${techStackConfig.packageManager} run dev

# Test:
# 1. ${domainAnalysis.coreFeatures[0]} works
# 2. Results display correctly
# 3. Loading spinner shows during fetch
# 4. Errors display gracefully
\`\`\`

### Common Issues & Solutions

${getCommonIssuesMilestone2(projectData)}

### Resources
- [${techStackConfig.dataFetching} Documentation]
- [Error Handling Best Practices]
- [Responsive Design Patterns]

### Success Criteria
✅ Core feature fully functional
✅ Loading states provide feedback
✅ Errors handled gracefully
✅ Mobile responsive layout
✅ No console errors
`;

  await fs.mkdir(path.join(outputDir, 'milestone/Milestone2'), { recursive: true });
  await fs.writeFile(path.join(outputDir, 'milestone/Milestone2/m2.md'), content);
}

async function generateMilestone3(outputDir, projectData, daysPerMilestone) {
  const { techStackConfig, domainAnalysis } = projectData;
  const startDay = (daysPerMilestone * 2) + 1;
  const endDay = daysPerMilestone * 3;

  const content = `## ⭐ Milestone 3: Advanced Features & Persistence

**Goal:** Add ${domainAnalysis.coreFeatures[2] || 'detail views'} and data persistence

**Duration:** Days ${startDay}-${endDay}

**Learning Objectives:**
- Implement detail views
- Add data persistence (${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'localStorage' : 'enhanced localStorage'})
- Create interactive components
- Manage application state

### Deliverables Checklist
- [ ] Detail view page complete
- [ ] ${domainAnalysis.coreFeatures[2] ? capitalizeWords(domainAnalysis.coreFeatures[2]) : 'Favorites'} functionality working
- [ ] Data persists across sessions
- [ ] Interactive UI elements functional
- [ ] URL state synchronization

### Step-by-Step Instructions

#### Step 1: Create Detail View Component

${getDetailViewSetup(projectData)}

#### Step 2: Implement Data Persistence

${getDataPersistenceSetup(projectData)}

#### Step 3: Build Interactive Components

${getInteractiveComponentsSetup(projectData)}

#### Step 4: Add URL State Management

${getUrlStateSetup(techStackConfig)}

#### Step 5: Test Advanced Features

\`\`\`bash
# Test:
# 1. Detail view shows complete information
# 2. ${domainAnalysis.coreFeatures[2] || 'Favorites'} save and persist
# 3. URL reflects application state
# 4. Page refresh maintains state
\`\`\`

### Common Issues & Solutions

**Issue:** Data doesn't persist after browser refresh
**Solution:** Check localStorage key naming and JSON serialization

**Issue:** URL state not updating
**Solution:** Use ${techStackConfig.routing} hooks (useNavigate, useSearchParams)

### Resources
- [localStorage API Guide]
- [State Management Patterns]
- [URL State Synchronization]

### Success Criteria
✅ Detail views fully functional
✅ Persistence works across sessions
✅ Interactive elements responsive
✅ State management robust
`;

  await fs.mkdir(path.join(outputDir, 'milestone/Milestone3'), { recursive: true });
  await fs.writeFile(path.join(outputDir, 'milestone/Milestone3/m3.md'), content);
}

async function generateMilestone4(outputDir, projectData, daysPerMilestone) {
  const { techStackConfig } = projectData;
  const startDay = (daysPerMilestone * 3) + 1;
  const endDay = projectData.duration;

  const content = `## ✨ Milestone 4: Testing, Accessibility & Deployment

**Goal:** Prepare production-ready application

**Duration:** Days ${startDay}-${endDay}

**Learning Objectives:**
- Implement accessibility features
- Write comprehensive tests
- Optimize performance
- Deploy to production

### Deliverables Checklist
- [ ] Accessibility audit complete (WCAG 2.1 AA)
- [ ] Test suite written (≥ 70% coverage)
- [ ] Performance optimized (Lighthouse ≥ ${techStackConfig.performanceTargets.lighthousePerformance})
- [ ] Error boundaries implemented
- [ ] Deployed to production
- [ ] Documentation complete

### Step-by-Step Instructions

#### Step 1: Accessibility Improvements

${getAccessibilitySetup(techStackConfig)}

#### Step 2: Write Tests

${getTestingSetup(techStackConfig, projectData)}

#### Step 3: Performance Optimization

${getPerformanceOptimization(techStackConfig)}

#### Step 4: Error Handling

${getErrorBoundarySetup(techStackConfig)}

#### Step 5: Deploy to Production

${getDeploymentSetup(techStackConfig, projectData)}

### Testing Checklist

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast ≥ 4.5:1
- [ ] Focus indicators visible
- [ ] ARIA labels present

**Performance:**
- [ ] Lighthouse Performance ≥ ${techStackConfig.performanceTargets.lighthousePerformance}
- [ ] First Contentful Paint ${techStackConfig.performanceTargets.firstContentfulPaint}
- [ ] Bundle size ${techStackConfig.performanceTargets.bundleSize}

**Functionality:**
- [ ] All features working
- [ ] Error states handled
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [${techStackConfig.testing} Guide]
- [Vercel Deployment Guide](https://vercel.com/docs)

### Success Criteria
✅ All accessibility checks pass
✅ Test coverage ≥ 70%
✅ Lighthouse scores meet targets
✅ Application deployed and accessible
✅ Documentation complete
`;

  await fs.mkdir(path.join(outputDir, 'milestone/Milestone4'), { recursive: true });
  await fs.writeFile(path.join(outputDir, 'milestone/Milestone4/m4.md'), content);
}

// Supporting file generators
async function generateWireframesOverview(outputDir, projectData) {
  const content = `# Wireframes Overview

This document describes the visual design and user interface patterns for the ${projectData.projectTopic}.

## Design Principles

1. **Mobile-First:** Design starts at 320px width, progressively enhanced
2. **Accessibility:** WCAG 2.1 AA compliance from the start
3. **Performance:** Optimize for fast loading and smooth interactions
4. **Simplicity:** Clean, uncluttered interface focusing on core features

## Page Layouts

### 1. Home/Search Page
- Search input at top
- Results grid (responsive: 2 → 3 → 4 → 5 columns)
- Loading skeleton during fetch
- Empty state when no results

### 2. Detail Page
- Header with poster/image
- Key information prominently displayed
- Action buttons (favorites, share)
- Related items section

### 3. ${projectData.domainAnalysis.coreFeatures[2] || 'Favorites'} Page
- Grid layout matching search page
- Empty state with call-to-action
- Filters and sorting options

## Responsive Breakpoints

- **Mobile:** 320px - 639px (2 columns)
- **Tablet:** 640px - 767px (3 columns)
- **Desktop:** 768px - 1023px (4 columns)
- **Large:** 1024px+ (5 columns)

## Color Palette

- Primary: #3b82f6 (blue)
- Background: #f9fafb (light gray)
- Text: #111827 (dark gray)
- Error: #ef4444 (red)
- Success: #10b981 (green)

## Typography

- Font Family: System font stack
- Base Size: 16px
- Headings: 700 weight
- Body: 400 weight
- Line Height: 1.6

*See img/ directory for visual wireframes*
`;

  await fs.writeFile(path.join(outputDir, '02-wireframes-overview.md'), content);
}

async function generateTrelloGuide(outputDir, projectData) {
  const content = `# Trello Project Board Guide

## Board Structure

Create a Trello board with the following lists:

1. **📋 Backlog** - All planned tasks
2. **🔄 In Progress** - Currently working on
3. **⏳ Testing** - Ready for testing
4. **✅ Done** - Completed tasks
5. **🔍 Review** - Needs review/feedback
6. **🚀 Deploy** - Ready for deployment
7. **📚 Resources** - Links and references

## Card Template

Each task card should include:
- **Title:** Clear, action-oriented
- **Description:** What needs to be done
- **Checklist:** Sub-tasks
- **Labels:** Priority, milestone, type
- **Due Date:** Deadline
- **Time Estimate:** Hours expected

## Labels

- 🔴 High Priority
- 🟡 Medium Priority
- 🟢 Low Priority
- 🏗️ Milestone 1
- 🔍 Milestone 2
- ⭐ Milestone 3
- ✨ Milestone 4
- 🐛 Bug
- ✨ Feature
- 📝 Documentation

## Sprint Planning

### Milestone 1 Cards
- Set up ${projectData.techStackConfig.name} project
- Configure routing
- Create AppShell component
- Set up base CSS
- Initialize Git repository

### Milestone 2 Cards
${projectData.domainAnalysis.coreFeatures.slice(0, 2).map(f => `- Implement ${f}`).join('\n')}
- ${projectData.domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'API integration' : 'Data layer setup'}
- Error handling

### Milestone 3 Cards
${projectData.domainAnalysis.coreFeatures.slice(2, 4).map(f => `- Implement ${f}`).join('\n')}
- Data persistence
- Detail views

### Milestone 4 Cards
- Accessibility audit
- Write tests
- Performance optimization
- Deploy to production
- Documentation

## Daily Workflow

1. **Morning:** Move today's tasks to "In Progress"
2. **Work:** Update card checklists as you complete sub-tasks
3. **Testing:** Move completed work to "Testing"
4. **Evening:** Review progress, plan next day

## Tips

- Keep cards small and focused
- Update cards daily
- Use comments for notes and blockers
- Attach screenshots to cards
- Set realistic time estimates
`;

  await fs.writeFile(path.join(outputDir, '03-trello-project-board-guide.md'), content);
}

async function generateSetupInstructions(outputDir, projectData) {
  const { techStackConfig, domainAnalysis } = projectData;

  const content = `# Setup Instructions

## Prerequisites

Before you begin, ensure you have:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **Git** installed ([Download](https://git-scm.com/))
- **${techStackConfig.packageManager}** package manager
${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)'
  ? `- **API Key** from ${domainAnalysis.suggestedApis[0]}`
  : ''}
- **Code Editor** (VS Code recommended)

## Installation Steps

### 1. Clone or Create Repository

\`\`\`bash
# If starting fresh
mkdir ${projectData.projectName}
cd ${projectData.projectName}
git init

# If cloning existing repo
git clone <your-repo-url>
cd ${projectData.projectName}
\`\`\`

### 2. Install Dependencies

\`\`\`bash
# Install pnpm if needed
npm install -g pnpm

# Install project dependencies
pnpm install
\`\`\`

### 3. Configure Environment Variables

Create \`.env\` file in project root:

\`\`\`bash
${getEnvVariables(projectData)}
\`\`\`

${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)'
  ? `### 4. Get API Key

1. Visit ${getApiUrl(domainAnalysis.suggestedApis[0])}
2. Sign up for free account
3. Generate API key
4. Add to .env file`
  : ''}

### ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? '5' : '4'}. Start Development Server

\`\`\`bash
pnpm run dev
\`\`\`

Visit http://localhost:5173 in your browser.

## Deployment

### Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
\`\`\`

### Deploy to Netlify

\`\`\`bash
# Install Netlify CLI
npm i -g netlify-cli

# Build project
pnpm run build

# Deploy
netlify deploy --prod --dir=dist
\`\`\`

### Deploy to GitHub Pages

\`\`\`bash
# Install gh-pages
pnpm install -D gh-pages

# Add to package.json scripts:
# "deploy": "pnpm run build && gh-pages -d dist"

# Deploy
pnpm run deploy
\`\`\`

## Troubleshooting

**Module not found errors:**
\`\`\`bash
rm -rf node_modules package-lock.json
pnpm install
\`\`\`

**Port already in use:**
\`\`\`bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill

# Or change port in vite.config.js
\`\`\`

**Build errors:**
\`\`\`bash
# Clear build cache
rm -rf dist .vite

# Rebuild
pnpm run build
\`\`\`

## Next Steps

1. Review [start_here.md](./start_here.md)
2. Begin with [Milestone 1](./milestone/Milestone1/m1.md)
3. Create Trello board following [03-trello-project-board-guide.md](./03-trello-project-board-guide.md)
`;

  await fs.writeFile(path.join(outputDir, '04-SETUP_INSTRUCTIONS.md'), content);
}

// Helper functions
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getEnvVariables(projectData) {
  if (projectData.domainAnalysis.suggestedApis[0] === 'No external API (local storage)') {
    return '# No environment variables required for this project\n# localStorage is used for data persistence';
  }

  const apiName = projectData.domainAnalysis.suggestedApis[0].replace(/\s+/g, '_').replace(/[^A-Z0-9_]/gi, '').toUpperCase();
  return `VITE_${apiName}_KEY=your_api_key_here`;
}

function getEnvExample(projectData) {
  if (projectData.domainAnalysis.suggestedApis[0] === 'No external API (local storage)') {
    return '# No environment variables required';
  }

  const apiName = projectData.domainAnalysis.suggestedApis[0].replace(/\s+/g, '_').replace(/[^A-Z0-9_]/gi, '').toUpperCase();
  return `VITE_${apiName}_KEY=your_api_key`;
}

function getRoutingSetup(techStackConfig, projectData) {
  if (techStackConfig.name.includes('React')) {
    return `Create \`src/App.jsx\`:
\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
\`\`\``;
  }

  return 'See framework-specific routing documentation for setup.';
}

function getBaseCssSetup(techStackConfig) {
  return `Create \`src/index.css\` with:
- CSS reset
- Responsive grid utilities
- Flexbox utilities
- Base component styles
- Focus styles for accessibility
- Reduced motion support

See existing STEP-BY-STEP-GUIDE example for complete CSS.`;
}

function getAppShellSetup(techStackConfig, projectData) {
  return `Create \`src/components/AppShell.jsx\`:
- Header with logo
- Navigation links
- Main content area
- Responsive layout

See milestone guide in STEP-BY-STEP-GUIDE for complete example.`;
}

function getApiServiceSetup(projectData) {
  if (projectData.domainAnalysis.suggestedApis[0] === 'No external API (local storage)') {
    return `Create \`src/services/dataService.js\`:
\`\`\`javascript
const STORAGE_KEY = '${projectData.projectName}:data:v1';

export const dataService = {
  getAll() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },

  add(item) {
    const items = this.getAll();
    items.push({ ...item, id: Date.now(), createdAt: new Date().toISOString() });
    this.save(items);
  },

  remove(id) {
    const items = this.getAll().filter(item => item.id !== id);
    this.save(items);
  }
};
\`\`\``;
  }

  return `Create \`src/services/apiService.js\`:
\`\`\`javascript
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = '...'; // API base URL

export const apiService = {
  async search(query) {
    const response = await fetch(\`\${BASE_URL}/search?q=\${query}&apikey=\${API_KEY}\`);
    if (!response.ok) throw new Error('Search failed');
    return response.json();
  },

  async getDetails(id) {
    const response = await fetch(\`\${BASE_URL}/item/\${id}?apikey=\${API_KEY}\`);
    if (!response.ok) throw new Error('Fetch failed');
    return response.json();
  }
};
\`\`\``;
}

function getCustomHooksSetup(projectData) {
  return `Create \`src/hooks/useDebounce.js\`:
\`\`\`javascript
import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
\`\`\`

Create \`src/hooks/useData.js\` using ${projectData.techStackConfig.dataFetching}.`;
}

function getMainComponentsSetup(projectData) {
  return `Build these components:

1. **SearchBar Component**: Input with debouncing
2. **Card Component**: Display individual items in grid
3. **Grid Component**: Responsive layout wrapper

Focus on:
- Clean component structure
- Proper prop types
- Accessible markup
- Responsive CSS`;
}

function getLoadingErrorSetup(techStackConfig) {
  return `Create loading and error components:

**LoadingSpinner.jsx:**
- CSS spinner animation
- Accessible loading text

**ErrorMessage.jsx:**
- Error display with retry button
- User-friendly messages`;
}

function getCommonIssuesMilestone2(projectData) {
  if (projectData.domainAnalysis.suggestedApis[0] === 'No external API (local storage)') {
    return `**Issue:** Data doesn't persist
**Solution:** Check localStorage key and JSON.stringify/parse

**Issue:** Data structure inconsistent
**Solution:** Define clear data models and validate on save`;
  }

  return `**Issue:** API rate limiting
**Solution:** Implement caching with ${projectData.techStackConfig.dataFetching}

**Issue:** CORS errors
**Solution:** Check API documentation for proper headers

**Issue:** API key not working
**Solution:** Verify environment variable name starts with VITE_`;
}

function getDetailViewSetup(projectData) {
  return `Create \`src/pages/DetailPage.jsx\`:
- Fetch item by ID from URL params
- Display complete information
- Add action buttons (favorites, share)
- Handle loading and error states`;
}

function getDataPersistenceSetup(projectData) {
  return `Create \`src/hooks/useFavorites.js\`:
\`\`\`javascript
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'favorites:v1';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {
    setFavorites(prev => [...prev, { ...item, addedAt: Date.now() }]);
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
\`\`\``;
}

function getInteractiveComponentsSetup(projectData) {
  return `Create **FavoriteButton Component**:
- Toggle favorite status
- Visual feedback (heart icon)
- Accessible button with ARIA labels`;
}

function getUrlStateSetup(techStackConfig) {
  return `Use \`useSearchParams\` hook:
\`\`\`javascript
const [searchParams, setSearchParams] = useSearchParams();

// Read from URL
const query = searchParams.get('q');

// Update URL
setSearchParams({ q: newQuery });
\`\`\``;
}

function getAccessibilitySetup(techStackConfig) {
  return `### Accessibility Checklist

- [ ] Add ARIA labels to all interactive elements
- [ ] Ensure keyboard navigation (Tab, Enter, Escape)
- [ ] Add focus indicators (:focus styles)
- [ ] Use semantic HTML (nav, main, article, button)
- [ ] Add alt text to images
- [ ] Ensure color contrast ≥ 4.5:1
- [ ] Support reduced motion
- [ ] Test with screen reader

**Example:**
\`\`\`jsx
<button
  aria-label="Add to favorites"
  onClick={handleFavorite}
  className="favorite-btn"
>
  <HeartIcon aria-hidden="true" />
</button>
\`\`\``;
}

function getTestingSetup(techStackConfig, projectData) {
  return `### Test Categories

1. **Unit Tests**: Hooks, utilities
2. **Component Tests**: UI components
3. **Integration Tests**: User flows

**Example Test:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

test('renders search input', () => {
  render(<SearchBar />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
\`\`\`

Run tests:
\`\`\`bash
${techStackConfig.packageManager} run test
\`\`\``;
}

function getPerformanceOptimization(techStackConfig) {
  return `### Optimization Checklist

- [ ] Lazy load images (\`loading="lazy"\`)
- [ ] Code splitting (dynamic imports)
- [ ] Minimize bundle size
- [ ] Optimize images
- [ ] Add caching headers
- [ ] Use production build

Run Lighthouse audit:
\`\`\`bash
# Build for production
${techStackConfig.packageManager} run build

# Preview production build
${techStackConfig.packageManager} run preview

# Audit with Lighthouse in Chrome DevTools
\`\`\``;
}

function getErrorBoundarySetup(techStackConfig) {
  return `Create \`src/components/ErrorBoundary.jsx\`:
\`\`\`jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. <button onClick={() => window.location.reload()}>Reload</button></div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
\`\`\``;
}

function getDeploymentSetup(techStackConfig, projectData) {
  return `### Vercel Deployment (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Add environment variables in dashboard
\`\`\`

### GitHub Pages Deployment

\`\`\`bash
# Install gh-pages
${techStackConfig.packageManager} install -D gh-pages

# Update vite.config.js
export default {
  base: '/${projectData.projectName}/'
}

# Add script to package.json
"scripts": {
  "deploy": "${techStackConfig.packageManager} run build && gh-pages -d dist"
}

# Deploy
${techStackConfig.packageManager} run deploy
\`\`\``;
}

function getApiUrl(apiName) {
  const urls = {
    'OMDb API': 'http://www.omdbapi.com/apikey.aspx',
    'TMDb API': 'https://www.themoviedb.org/settings/api',
    'Spoonacular API': 'https://spoonacular.com/food-api',
    'OpenWeather API': 'https://openweathermap.org/api',
    'Spotify API': 'https://developer.spotify.com/'
  };

  return urls[apiName] || 'https://api-provider.com/signup';
}
