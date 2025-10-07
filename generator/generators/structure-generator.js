/**
 * Structure Generator
 * Creates the complete directory structure for the educational project
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateProjectStructure(outputDir, projectData) {
  // Main directory structure
  const directories = [
    'milestone/Milestone1',
    'milestone/Milestone2',
    'milestone/Milestone3',
    'milestone/Milestone4',
    'img',
    'learn-more',
    'tech-skills',
    'facilitation-guide',
    'business-case'
  ];

  // Create all directories
  for (const dir of directories) {
    await fs.mkdir(path.join(outputDir, dir), { recursive: true });
  }

  // Generate README.md (main entry point)
  await generateReadme(outputDir, projectData);

  // Generate CLAUDE.md (AI context)
  await generateClaudeMd(outputDir, projectData);

  // Generate .gitignore
  await generateGitignore(outputDir, projectData);

  // Generate TODO.md
  await generateTodoMd(outputDir, projectData);

  return true;
}

async function generateReadme(outputDir, projectData) {
  const { projectName, projectTopic, techStackConfig, domainAnalysis } = projectData;

  const content = `# ${projectTopic}

**Project Name:** ${projectName}
**Target Competency:** CCC.1 Develop Technology Solutions (Level 10)
**Duration:** ${projectData.duration} days
**Skill Level:** ${projectData.skillLevel}

## Overview

${domainAnalysis.problemContext}

This project will help you build a complete ${techStackConfig.name} application while demonstrating Level 10 competency in the CCC.1 framework.

## Features

${domainAnalysis.coreFeatures.map((feature, i) => `${i + 1}. ${capitalize(feature)}`).join('\n')}

## Tech Stack

- **Frontend:** ${techStackConfig.frontend}
- **Bundler:** ${techStackConfig.bundler}
- **Routing:** ${techStackConfig.routing}
- **Data Fetching:** ${techStackConfig.dataFetching}
- **Styling:** ${techStackConfig.styling}
- **Testing:** ${techStackConfig.testing}
- **Icons:** ${techStackConfig.icons}
- **Storage:** ${techStackConfig.storage}

## Getting Started

1. Review [start_here.md](./start_here.md) for pre-development checklist
2. Read the [problem statement](./00-problem.md)
3. Review [project scope](./01-project-scope.md) (CCC.1 Level 10 format)
4. Follow [setup instructions](./04-SETUP_INSTRUCTIONS.md)
5. Begin with [Milestone 1](./milestone/Milestone1/m1.md)

## Project Structure

\`\`\`
${projectName}/
├── README.md                          # This file
├── CLAUDE.md                          # AI assistant context
├── .gitignore                         # Git ignore rules
├── start_here.md                      # Student onboarding
├── overview.md                        # High-level overview
├── 00-problem.md                      # Problem statement
├── 01-project-scope.md                # CCC.1 Level 10 scope
├── 02-wireframes-overview.md          # UI/UX design guide
├── 03-trello-project-board-guide.md   # Agile board setup
├── 04-SETUP_INSTRUCTIONS.md           # Setup & deployment
├── project-requirements-scope.md      # Fillable template
├── TODO.md                            # Project checklist
│
├── milestone/
│   ├── Milestone1/m1.md              # Sprint 1 guide
│   ├── Milestone2/m2.md              # Sprint 2 guide
│   ├── Milestone3/m3.md              # Sprint 3 guide
│   └── Milestone4/m4.md              # Sprint 4 guide
│
├── img/                               # Wireframes
│   ├── Step-0.png
│   ├── Step-1.png
│   └── ...
│
├── learn-more/
│   └── resources.md                   # Learning resources
│
├── tech-skills/
│   └── [skill guides]                 # Technical tutorials
│
├── facilitation-guide/
│   ├── project-schedule.md
│   ├── example-week.md
│   ├── micro-milestones.md
│   └── term-example.md
│
└── business-case/
    ├── oral-defense-rubric.md
    ├── oral-defense-presentation-template.md
    ├── incentive-requirements.md
    └── canva-presentation-design-guide.md
\`\`\`

## Learning Objectives

By completing this project, you will demonstrate:

- **CCC.1.1:** Problem identification and analysis
- **CCC.1.2:** Solution planning with technical challenges
- **CCC.1.3:** Implementation using industry best practices
- **CCC.1.4:** Testing with multiple user categories
- **CCC.1.5:** Professional documentation and communication

## Performance Targets

- Lighthouse Performance: ≥ ${techStackConfig.performanceTargets.lighthousePerformance}
- Lighthouse Accessibility: ≥ ${techStackConfig.performanceTargets.lighthouseAccessibility}
- First Contentful Paint: ${techStackConfig.performanceTargets.firstContentfulPaint}
- Time to Interactive: ${techStackConfig.performanceTargets.timeToInteractive}
- Bundle Size: ${techStackConfig.performanceTargets.bundleSize}

## Accessibility Standards

- WCAG 2.1 AA Compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ≥ 4.5:1

## License

MIT License - Educational use encouraged

---

**Generated:** ${projectData.generatedDate}
**Generator Version:** 1.0.0
`;

  await fs.writeFile(path.join(outputDir, 'README.md'), content);
}

async function generateClaudeMd(outputDir, projectData) {
  const { projectTopic, techStackConfig, domainAnalysis } = projectData;

  const content = `# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

${domainAnalysis.problemContext}

**Tech Stack:**
- **Frontend:** ${techStackConfig.frontend}
- **Routing:** ${techStackConfig.routing}
- **Data Fetching:** ${techStackConfig.dataFetching}
- **Styling:** ${techStackConfig.styling}
- **Testing:** ${techStackConfig.testing}
- **Storage:** ${techStackConfig.storage}

## Essential Commands

\`\`\`bash
# Install dependencies
${techStackConfig.packageManager} install

# Development server
${techStackConfig.packageManager} run dev

# Production build
${techStackConfig.packageManager} run build

# Run tests
${techStackConfig.packageManager} run test

# Preview production build
${techStackConfig.packageManager} run preview
\`\`\`

## Architecture

${generateArchitectureSection(techStackConfig)}

## Critical Requirements

${generateCriticalRequirements(projectData)}

## API Integration

${generateApiSection(techStackConfig, domainAnalysis)}

## Development Milestones

1. **Milestone 1:** Project setup, routing, basic components
2. **Milestone 2:** Core feature implementation, API integration
3. **Milestone 3:** Advanced features, data persistence
4. **Milestone 4:** Testing, accessibility, performance, deployment

## Testing Guidelines

- Unit tests for hooks and utilities
- Component tests for UI components
- Integration tests for user flows
- Accessibility tests (keyboard nav, screen readers)
- Target coverage: ≥ 70%

## Common Patterns

${generateCommonPatterns(techStackConfig)}

## Important Notes

- Always use ${techStackConfig.packageManager} for package management
- Follow ${techStackConfig.styling} conventions (no mixing approaches)
- All interactive elements must have proper ARIA labels
- Respect \`prefers-reduced-motion\` for animations
- Images should use \`loading="lazy"\` attribute
`;

  await fs.writeFile(path.join(outputDir, 'CLAUDE.md'), content);
}

async function generateGitignore(outputDir, projectData) {
  const content = `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
*.lcov

# Production
build/
dist/

# Environment variables
.env
.env.local
.env.production
.env.test

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Editor directories
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
.cache/
`;

  await fs.writeFile(path.join(outputDir, '.gitignore'), content);
}

async function generateTodoMd(outputDir, projectData) {
  const content = `# Project TODO List

## Pre-Development
- [ ] Review all documentation in STEP-BY-STEP-GUIDE
- [ ] Get API key (if required)
- [ ] Set up development environment
- [ ] Create project board (Trello/GitHub Projects)

## Milestone 1: Foundation (Day 1-${Math.ceil(projectData.duration * 0.25)})
- [ ] Project setup with ${projectData.techStackConfig.name}
- [ ] Configure routing
- [ ] Create base component structure
- [ ] Set up CSS foundation
- [ ] Configure environment variables

## Milestone 2: Core Features (Day ${Math.ceil(projectData.duration * 0.25) + 1}-${Math.ceil(projectData.duration * 0.5)})
${projectData.domainAnalysis.coreFeatures.slice(0, 3).map(f => `- [ ] Implement ${f}`).join('\n')}
- [ ] API integration
- [ ] Error handling
- [ ] Loading states

## Milestone 3: Advanced Features (Day ${Math.ceil(projectData.duration * 0.5) + 1}-${Math.ceil(projectData.duration * 0.75)})
${projectData.domainAnalysis.coreFeatures.slice(3).map(f => `- [ ] Implement ${f}`).join('\n')}
- [ ] Data persistence
- [ ] Detail views
- [ ] Polish UI/UX

## Milestone 4: Testing & Deploy (Day ${Math.ceil(projectData.duration * 0.75) + 1}-${projectData.duration})
- [ ] Write unit tests
- [ ] Write component tests
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Lighthouse audit
- [ ] Deploy to production
- [ ] Create presentation

## Documentation
- [ ] Complete README.md
- [ ] Add code comments
- [ ] Document API endpoints
- [ ] Create deployment guide

## Assessment
- [ ] Complete project scope template
- [ ] Prepare oral defense
- [ ] Submit to Beacon
`;

  await fs.writeFile(path.join(outputDir, 'TODO.md'), content);
}

// Helper functions
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateArchitectureSection(techStackConfig) {
  const folderStructure = techStackConfig.folderStructure || techStackConfig['folder Structure'];
  return `\`\`\`
${Object.entries(folderStructure).map(([folder, desc]) => `${folder}/  # ${desc}`).join('\n')}
\`\`\``;
}

function generateCriticalRequirements(projectData) {
  return `- Follow ${projectData.techStackConfig.styling} conventions
- Target ${projectData.skillLevel} skill level
- Meet ${projectData.techStackConfig.accessibility.standard} standards
- Achieve Lighthouse scores: Performance ≥ ${projectData.techStackConfig.performanceTargets.lighthousePerformance}, Accessibility ≥ ${projectData.techStackConfig.performanceTargets.lighthouseAccessibility}`;
}

function generateApiSection(techStackConfig, domainAnalysis) {
  if (domainAnalysis.suggestedApis[0] === 'No external API (local storage)') {
    return `This project uses localStorage for data persistence.

**Storage Pattern:**
- Key: \`${domainAnalysis.domain}app:data:v1\`
- Format: JSON objects with timestamps
- Quota: ~5MB browser storage limit`;
  }

  return `**Primary API:** ${domainAnalysis.suggestedApis[0]}

**Integration Pattern:**
- ${techStackConfig.dataFetching} for server state
- Caching strategy: stale-while-revalidate
- Error handling: retry with exponential backoff
- Rate limiting: client-side throttling`;
}

function generateCommonPatterns(techStackConfig) {
  if (techStackConfig.name.includes('React')) {
    return `\`\`\`javascript
// Custom hook pattern
const useData = (query) => {
  return useQuery({
    queryKey: ['data', query],
    queryFn: () => api.fetchData(query),
    staleTime: 60000
  });
};

// Component with loading states
function Component() {
  const { data, isLoading, error } = useData(query);

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Results data={data} />;
}
\`\`\``;
  }

  return 'See milestone guides for framework-specific patterns.';
}
