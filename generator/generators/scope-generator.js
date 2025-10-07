/**
 * Scope Generator
 * Creates CCC.1 Level 10 compliant project scope documents
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateProjectScope(outputDir, projectData) {
  // Generate 01-project-scope.md (detailed CCC.1 Level 10 format)
  await generateDetailedScope(outputDir, projectData);

  // Generate overview.md (high-level overview)
  await generateOverview(outputDir, projectData);

  // Generate start_here.md (student onboarding)
  await generateStartHere(outputDir, projectData);

  // Generate project-requirements-scope.md (fillable template)
  await generateRequirementsTemplate(outputDir, projectData);
}

async function generateDetailedScope(outputDir, projectData) {
  const { projectTopic, projectName, domainAnalysis, techStackConfig, duration } = projectData;

  const content = `# ${projectTopic} - Project Scope (CCC.1 Level 10)

**Project Name:** ${projectName}
**Target Competency:** CCC.1 Develop Technology Solutions (Level 10)
**Technical Skills:** TS.2.3 Build a Front-End, TS.3.1 Consume APIs
**Duration:** ${duration} days
**Target Audience:** ${domainAnalysis.targetUsers.join(', ')}

## CCC.1.1: Understand and Identify a Problem (Level 10)

### Problem Statement

**Core Problem:** ${domainAnalysis.problemContext}

**Stakeholders:**
${domainAnalysis.targetUsers.map((user, i) =>
  `- **${i === 0 ? 'Primary' : i === 1 ? 'Secondary' : 'Tertiary'}:** ${capitalizeWords(user)}`
).join('\n')}

### Constraints and Planning

**Technical Constraints:**
${generateTechnicalConstraints(domainAnalysis, techStackConfig)}

**Resource Constraints:**
- Zero budget (free tier services only)
- Solo developer (${projectData.skillLevel} skill level)
- ${duration}-day development timeline

### Analysis of Previous Solutions

**Existing Solutions Evaluated:**

${domainAnalysis.competingSolutions.map((solution, i) => `
${i + 1}. **${solution.name}**
   - ✅ Success: ${solution.pros}
   - ❌ Failure: ${solution.cons}
   - **Why:** ${getWhyReason(solution)}
`).join('\n')}

### Solution Assessment

**Our Solution:**
A lightweight ${techStackConfig.name} application focusing on ${domainAnalysis.coreFeatures.slice(0, 3).join(', ')}.

**Why This Solution:**
- **Urgency:** High (addresses immediate user needs)
- **Complexity:** Medium (achievable in ${duration} days)
- **Available Resources:** Perfect fit (free APIs, free hosting, ${projectData.skillLevel} skill level)
- **Potential Impact:** High (serves underserved user segment)

## CCC.1.2: Identify and Plan a Solution (Level 10)

### Solution Overview

**Project Description:**
A responsive ${techStackConfig.name} application that enables users to ${domainAnalysis.coreFeatures.slice(0, 2).join(' and ')}, optimized for speed, accessibility, and mobile-first experience.

### Technical Challenges and Resource Requirements

#### Technical Challenges Identified:

${generateTechnicalChallenges(domainAnalysis, techStackConfig)}

#### Resource Requirements:

**Development Tools:**
- Node.js v18+ (free)
- ${techStackConfig.frontend} + ${techStackConfig.bundler} (free)
- VS Code (free)
- Git + GitHub (free)

**Third-Party Services:**
${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)'
  ? `- ${domainAnalysis.suggestedApis[0]} (free tier)`
  : '- localStorage (browser built-in)'}
- Vercel or GitHub Pages (free hosting)

### Agile Project Plan

**Methodology:** Sprint-based Agile (4 x ${Math.ceil(duration/4)}-day sprints)

#### Sprint 1: Foundation (Days 1-${Math.ceil(duration * 0.25)})
- **Goal:** Basic app structure and routing
- **Deliverables:**
  - ${techStackConfig.name} project setup
  - Routing configuration
  - Base component structure
  - CSS foundation

#### Sprint 2: Core Features (Days ${Math.ceil(duration * 0.25) + 1}-${Math.ceil(duration * 0.5)})
- **Goal:** ${domainAnalysis.coreFeatures[0]} functionality
- **Deliverables:**
  - ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'API integration' : 'Data management layer'}
  - ${domainAnalysis.coreFeatures.slice(0, 2).map(f => capitalizeWords(f)).join('\n  - ')}

#### Sprint 3: Advanced Features (Days ${Math.ceil(duration * 0.5) + 1}-${Math.ceil(duration * 0.75)})
- **Goal:** ${domainAnalysis.coreFeatures[2] || 'Detail views'} and data persistence
- **Deliverables:**
  - ${domainAnalysis.coreFeatures.slice(2, 4).map(f => capitalizeWords(f)).join('\n  - ')}
  - Data persistence

#### Sprint 4: Polish & Testing (Days ${Math.ceil(duration * 0.75) + 1}-${duration})
- **Goal:** Production-ready application
- **Deliverables:**
  - Accessibility improvements
  - Performance optimization
  - Testing suite
  - Deployment

## CCC.1.3: Implement a Solution (Level 10)

### Industry-Accepted Methods

**Primary Method:** Agile Development with modern web practices

**Implementation Approach:**
1. **Component-Driven Development:** Build reusable, isolated components
2. **API-First Architecture:** ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'Define data models from API' : 'Design data structures first'}
3. **Mobile-First Design:** Progressive enhancement from mobile → desktop
4. **Continuous Testing:** Test alongside development

### Tools and Best Practices Applied

#### Tool 1: ${techStackConfig.dataFetching}

**Why:** Industry-standard for ${domainAnalysis.suggestedApis[0] !== 'No external API (local storage)' ? 'server state' : 'state'} management

**Best Practices Applied:**
- Caching strategies for performance
- Error handling with retry logic
- Loading and error states

#### Tool 2: ${techStackConfig.styling}

**Why:** Modern, performant layout system

**Best Practices Applied:**
- Mobile-first responsive design
- Semantic HTML
- Accessibility-first approach

## CCC.1.4: Test and Improve a Solution (Level 10)

### Extensive Testing Plan

**User Testing (3 Categories):**
1. ${domainAnalysis.targetUsers[0]} (Primary audience)
2. Mobile users (4G performance testing)
3. Accessibility users (Screen reader testing)

**Design Evaluation Criteria:**
- ✅ Lighthouse Performance: ≥ ${techStackConfig.performanceTargets.lighthousePerformance}
- ✅ Lighthouse Accessibility: ≥ ${techStackConfig.performanceTargets.lighthouseAccessibility}
- ✅ WCAG 2.1 AA compliance: 100%
- ✅ Task completion rate: > 90%

## CCC.1.5: Document and Communicate a Solution (Level 10)

### Industry-Accepted Documentation Format

**Documentation Deliverables:**
- README.md with setup instructions
- Inline JSDoc comments
- Component documentation
- Architecture diagrams

### Success Indicators (Level 10 Competency Achieved)

**CCC.1.1 ✅**
- Problem context and constraints documented
- Stakeholder analysis complete
- Competing solutions analyzed

**CCC.1.2 ✅**
- Technical challenges identified with solutions
- Resource requirements documented
- Detailed Agile project plan

**CCC.1.3 ✅**
- Industry methods applied (Agile, modern web practices)
- Two+ tools with best practices documented

**CCC.1.4 ✅**
- Extensive testing with multiple user categories
- Design evaluation with metrics
- Feedback and refinement process

**CCC.1.5 ✅**
- Professional documentation in industry formats
- Solution effectiveness measured
- Technical terminology accurate
- Communication clear and objective

---

**This project scope demonstrates Level 10 competency in CCC.1 by thoroughly addressing problem analysis, solution planning, implementation with best practices, extensive testing, and professional documentation.**
`;

  await fs.writeFile(path.join(outputDir, '01-project-scope.md'), content);
}

async function generateOverview(outputDir, projectData) {
  const content = `# ${projectData.projectTopic} - Overview

## What You'll Build

${projectData.domainAnalysis.problemContext}

This project will teach you to build a complete ${projectData.techStackConfig.name} application with:

${projectData.domainAnalysis.coreFeatures.map((f, i) => `${i + 1}. ${capitalizeWords(f)}`).join('\n')}

## Learning Outcomes

By completing this project, you will:

- ✅ Demonstrate CCC.1 Level 10 competency
- ✅ Build with ${projectData.techStackConfig.name}
- ✅ Integrate with ${projectData.domainAnalysis.suggestedApis[0]}
- ✅ Implement responsive design
- ✅ Meet accessibility standards (WCAG 2.1 AA)
- ✅ Deploy to production

## Project Timeline

**Total Duration:** ${projectData.duration} days

- **Days 1-${Math.ceil(projectData.duration * 0.25)}:** Foundation & Setup
- **Days ${Math.ceil(projectData.duration * 0.25) + 1}-${Math.ceil(projectData.duration * 0.5)}:** Core Features
- **Days ${Math.ceil(projectData.duration * 0.5) + 1}-${Math.ceil(projectData.duration * 0.75)}:** Advanced Features
- **Days ${Math.ceil(projectData.duration * 0.75) + 1}-${projectData.duration}:** Testing & Deployment

## Next Steps

1. Review [start_here.md](./start_here.md)
2. Read the [problem statement](./00-problem.md)
3. Study the [project scope](./01-project-scope.md)
4. Follow [setup instructions](./04-SETUP_INSTRUCTIONS.md)
5. Begin with [Milestone 1](./milestone/Milestone1/m1.md)
`;

  await fs.writeFile(path.join(outputDir, 'overview.md'), content);
}

async function generateStartHere(outputDir, projectData) {
  const content = `# ${projectData.projectTopic} - Start Here

Welcome! This guide will help you prepare before starting development.

## 🚦 Ready Checklist

**I have reviewed and understand:**
- [ ] The project [overview](./overview.md)
- [ ] The [problem statement](./00-problem.md) and user needs
- [ ] The complete [project scope](./01-project-scope.md)
- [ ] The [wireframes](./02-wireframes-overview.md) (if applicable)

**I have prepared:**
- [ ] Development environment (Node.js, VS Code, Git)
${projectData.domainAnalysis.suggestedApis[0] !== 'No external API (local storage)'
  ? `- [ ] API key for ${projectData.domainAnalysis.suggestedApis[0]}`
  : '- [ ] Understanding of localStorage for data persistence'}
- [ ] GitHub account for version control

## 🚀 Next Steps

1. **Setup:** Follow [04-SETUP_INSTRUCTIONS.md](./04-SETUP_INSTRUCTIONS.md)
2. **Milestone 1:** Begin with [m1.md](./milestone/Milestone1/m1.md)
3. **Milestone 2:** Continue to [m2.md](./milestone/Milestone2/m2.md)
4. **Milestone 3:** Advance to [m3.md](./milestone/Milestone3/m3.md)
5. **Milestone 4:** Complete with [m4.md](./milestone/Milestone4/m4.md)

## 📚 Key Technologies

- **Frontend:** ${projectData.techStackConfig.frontend}
- **Bundler:** ${projectData.techStackConfig.bundler}
- **Routing:** ${projectData.techStackConfig.routing}
- **Data:** ${projectData.techStackConfig.dataFetching}
- **Styling:** ${projectData.techStackConfig.styling}

## 🎯 Success Criteria

Your completed app should:
${projectData.domainAnalysis.coreFeatures.map(f => `- ✅ ${capitalizeWords(f)}`).join('\n')}
- ✅ Work on mobile and desktop
- ✅ Meet accessibility standards
- ✅ Load quickly with good performance

*Happy coding! 🚀*
`;

  await fs.writeFile(path.join(outputDir, 'start_here.md'), content);
}

async function generateRequirementsTemplate(outputDir, projectData) {
  const content = `# Project Requirements & Scope Document

> **Student Instructions:** Complete this template BEFORE starting development.

## 📋 Project Overview

**Project Name:** [FILL IN]

**One-Sentence Description:**
[FILL IN: Describe your project in one sentence]

## 🎯 Project Goals

**Primary Goal:**
[FILL IN: What is the #1 thing your project aims to achieve?]

**Success Criteria:**
- [ ] [FILL IN: Measurable criterion 1]
- [ ] [FILL IN: Measurable criterion 2]
- [ ] [FILL IN: Measurable criterion 3]

## 👥 Target Users

**Primary Users:**
[FILL IN: Who will use this application most?]

**User Needs:**
[FILL IN: What do they need from your app?]

## ✨ Core Features

**Must-Have (MVP):**
1. [FILL IN]
2. [FILL IN]
3. [FILL IN]

**Should-Have:**
1. [FILL IN]
2. [FILL IN]

**Could-Have (Stretch Goals):**
1. [FILL IN]
2. [FILL IN]

## 🔧 Technical Stack

**Frontend:** [FILL IN]
**Routing:** [FILL IN]
**Data Management:** [FILL IN]
**Styling:** [FILL IN]
**API/Data Source:** [FILL IN]

## 📅 Timeline

**Total Duration:** [FILL IN] days

**Sprint Breakdown:**
- Sprint 1 (Days 1-X): [FILL IN]
- Sprint 2 (Days X-X): [FILL IN]
- Sprint 3 (Days X-X): [FILL IN]
- Sprint 4 (Days X-X): [FILL IN]

## ✅ Deliverables Checklist

- [ ] Deployed application
- [ ] GitHub repository with README
- [ ] Test suite (≥ 70% coverage)
- [ ] Project documentation
- [ ] Presentation materials

---

**When complete, submit this document for instructor approval before beginning development.**
`;

  await fs.writeFile(path.join(outputDir, 'project-requirements-scope.md'), content);
}

// Helper functions
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function generateTechnicalConstraints(domainAnalysis, techStackConfig) {
  const constraints = [];

  if (domainAnalysis.suggestedApis[0] !== 'No external API (local storage)') {
    constraints.push(`- Free ${domainAnalysis.suggestedApis[0]} limited API requests`);
  } else {
    constraints.push('- localStorage limitations (~5-10MB browser storage)');
  }

  constraints.push('- No backend infrastructure (client-side only)');
  constraints.push(`- Must meet ${techStackConfig.accessibility.standard} standards`);

  return constraints.join('\n');
}

function generateTechnicalChallenges(domainAnalysis, techStackConfig) {
  const challenges = [];

  if (domainAnalysis.suggestedApis[0] !== 'No external API (local storage)') {
    challenges.push(`1. **API Rate Limiting**
   - **Solution:** Implement ${techStackConfig.dataFetching} caching
   - **Mitigation:** Debounced user input to reduce requests`);
  } else {
    challenges.push(`1. **localStorage Limitations**
   - **Solution:** Store only essential data, implement quota monitoring
   - **Mitigation:** Warn users at 80% capacity`);
  }

  challenges.push(`2. **Performance on Mobile**
   - **Solution:** Lazy load images, optimize bundle size
   - **Target:** ${techStackConfig.performanceTargets.firstContentfulPaint} First Contentful Paint`);

  challenges.push(`3. **Accessibility Compliance**
   - **Solution:** Semantic HTML, ARIA labels, keyboard navigation
   - **Target:** Lighthouse Accessibility ≥ ${techStackConfig.performanceTargets.lighthouseAccessibility}`);

  return challenges.join('\n\n');
}

function getWhyReason(solution) {
  const reasons = {
    'Requires login': 'Creates unnecessary barriers to entry',
    'ad-heavy': 'Prioritizes monetization over user experience',
    'slow': 'Poor technical optimization',
    'complex': 'Overwhelming feature set for casual users',
    'expensive': 'Business model not aligned with target users'
  };

  const consLower = solution.cons.toLowerCase();
  for (const [key, reason] of Object.entries(reasons)) {
    if (consLower.includes(key)) return reason;
  }

  return 'Not optimized for target user segment';
}
