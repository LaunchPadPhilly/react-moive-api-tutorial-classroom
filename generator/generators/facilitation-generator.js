/**
 * Facilitation Guide Generator
 * Creates instructor materials including schedules, micro-milestones, and tech skills
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateFacilitationGuides(outputDir, projectData) {
  await fs.mkdir(path.join(outputDir, 'facilitation-guide'), { recursive: true });

  // Generate all facilitation materials
  await generateProjectSchedule(outputDir, projectData);
  await generateExampleWeek(outputDir, projectData);
  await generateMicroMilestones(outputDir, projectData);
  await generateTermExample(outputDir, projectData);

  // Generate learn-more resources
  await generateLearningResources(outputDir, projectData);
}

async function generateProjectSchedule(outputDir, projectData) {
  const content = `# Project Schedule - ${projectData.projectTopic}

## Overview

**Total Duration:** ${projectData.duration} days
**Skill Level:** ${projectData.skillLevel}
**Work Style:** Agile sprints with daily check-ins

## Sprint Schedule

### Sprint 1: Foundation (Days 1-${Math.ceil(projectData.duration * 0.25)})
**Objective:** Set up development environment and basic structure

**Daily Breakdown:**
${generateDailyBreakdown(1, Math.ceil(projectData.duration * 0.25), 'setup', projectData)}

### Sprint 2: Core Features (Days ${Math.ceil(projectData.duration * 0.25) + 1}-${Math.ceil(projectData.duration * 0.5)})
**Objective:** Implement main functionality

**Daily Breakdown:**
${generateDailyBreakdown(Math.ceil(projectData.duration * 0.25) + 1, Math.ceil(projectData.duration * 0.5), 'core', projectData)}

### Sprint 3: Advanced Features (Days ${Math.ceil(projectData.duration * 0.5) + 1}-${Math.ceil(projectData.duration * 0.75)})
**Objective:** Add persistence and detail views

**Daily Breakdown:**
${generateDailyBreakdown(Math.ceil(projectData.duration * 0.5) + 1, Math.ceil(projectData.duration * 0.75), 'advanced', projectData)}

### Sprint 4: Testing & Deploy (Days ${Math.ceil(projectData.duration * 0.75) + 1}-${projectData.duration})
**Objective:** Polish and deploy

**Daily Breakdown:**
${generateDailyBreakdown(Math.ceil(projectData.duration * 0.75) + 1, projectData.duration, 'polish', projectData)}

## Instructor Checkpoints

**Daily:**
- Morning standup (5 min): What are you working on today?
- Evening check-in: What did you accomplish? Any blockers?

**Weekly:**
- Sprint review and demo
- Sprint retrospective
- Plan next sprint

## Common Blockers & Solutions

1. **Environment setup issues** → Pair programming session
2. **API integration difficulties** → Code review and debugging
3. **CSS/styling challenges** → Share examples and resources
4. **Testing confusion** → Live coding demonstration
5. **Deployment problems** → Step-by-step walkthrough

## Assessment Touchpoints

- **Week 1:** Project scope approval
- **Mid-project:** Code review and progress check
- **Final:** Oral defense and live demo
`;

  await fs.writeFile(path.join(outputDir, 'facilitation-guide/project-schedule.md'), content);
}

async function generateExampleWeek(outputDir, projectData) {
  const content = `# Example Week - ${projectData.projectTopic}

## Week 1: Foundation & Core Features

### Monday: Project Kickoff & Setup

**Morning (9:00 AM - 12:00 PM)**
- Review project documentation
- Get API keys (if needed)
- Set up development environment
- Initialize project with ${projectData.techStackConfig.name}

**Afternoon (1:00 PM - 5:00 PM)**
- Configure routing
- Create base components
- Set up CSS foundation
- First commit to Git

**Deliverable:** Dev server running, basic routing working

### Tuesday: API Integration

**Morning (9:00 AM - 12:00 PM)**
- Create API service layer
- Build custom hooks for data fetching
- Implement error handling

**Afternoon (1:00 PM - 5:00 PM)**
- Build ${projectData.domainAnalysis.coreFeatures[0]} component
- Add loading states
- Test with real API

**Deliverable:** Core feature displaying data

### Wednesday: UI Components

**Morning (9:00 AM - 12:00 PM)**
- Build responsive grid layout
- Create card components
- Style with CSS

**Afternoon (1:00 PM - 5:00 PM)**
- Polish mobile responsive design
- Add interactive elements
- Test on different screen sizes

**Deliverable:** Responsive UI complete

### Thursday: Advanced Features

**Morning (9:00 AM - 12:00 PM)**
- Implement detail views
- Add data persistence (localStorage)
- Build favorites functionality

**Afternoon (1:00 PM - 5:00 PM)**
- URL state management
- Polish interactions
- Handle edge cases

**Deliverable:** Advanced features working

### Friday: Testing & Polish

**Morning (9:00 AM - 12:00 PM)**
- Write unit tests
- Write component tests
- Run accessibility audit

**Afternoon (1:00 PM - 5:00 PM)**
- Performance optimization
- Deploy to production
- Documentation

**Deliverable:** Production-ready application

## Instructor Support Schedule

- **Daily Standups:** 9:00 AM (15 min)
- **Office Hours:** 2:00 PM - 3:00 PM
- **Code Reviews:** By appointment
- **Group Debugging:** 4:00 PM (as needed)
`;

  await fs.writeFile(path.join(outputDir, 'facilitation-guide/example-week.md'), content);
}

async function generateMicroMilestones(outputDir, projectData) {
  const content = `# Micro-Milestones - ${projectData.projectTopic}

## Daily Objectives

### Day 1: Environment Setup
- [ ] Node.js and ${projectData.techStackConfig.packageManager} installed
- [ ] Project initialized with ${projectData.techStackConfig.name}
- [ ] Dependencies installed
- [ ] Dev server running

### Day 2: Routing & Structure
- [ ] Routing configured (3 routes)
- [ ] AppShell component created
- [ ] Navigation working
- [ ] Base CSS applied

### Day 3: API Integration
- [ ] API service created
- [ ] Custom hooks implemented
- [ ] First API call successful
- [ ] Error handling working

### Day 4: Main Components
- [ ] ${projectData.domainAnalysis.coreFeatures[0]} component complete
- [ ] Loading states implemented
- [ ] Results displaying correctly
- [ ] Mobile responsive

### Day 5: Detail Views
- [ ] Detail page created
- [ ] Data fetching by ID
- [ ] Full information displayed
- [ ] Navigation from list to detail

### Day 6: Persistence
- [ ] localStorage integration
- [ ] Favorites functionality
- [ ] Data persists across sessions
- [ ] UI updates correctly

### Day 7: Polish UI
- [ ] Responsive design refined
- [ ] Interactions smooth
- [ ] Empty states handled
- [ ] Error states polished

### Day 8: Accessibility
- [ ] ARIA labels added
- [ ] Keyboard navigation working
- [ ] Screen reader tested
- [ ] Color contrast verified

### Day 9: Testing
- [ ] Unit tests written
- [ ] Component tests written
- [ ] Lighthouse audit passed
- [ ] Cross-browser tested

### Day 10: Deploy
- [ ] Production build created
- [ ] Deployed to hosting platform
- [ ] Environment variables configured
- [ ] Documentation complete
`;

  await fs.writeFile(path.join(outputDir, 'facilitation-guide/micro-milestones.md'), content);
}

async function generateTermExample(outputDir, projectData) {
  const content = `# Term Schedule Example

## Integrating ${projectData.projectTopic} into Full Term

### Week 1-2: Introduction & Fundamentals
- Introduction to web development
- ${projectData.techStackConfig.frontend} basics
- Git and version control

### Week 3-4: ${projectData.projectTopic} - Sprint 1 & 2
- **Week 3:** Project setup and core features
- **Week 4:** API integration and UI components
- Deliverable: Working prototype

### Week 5-6: ${projectData.projectTopic} - Sprint 3 & 4
- **Week 5:** Advanced features and persistence
- **Week 6:** Testing, accessibility, deployment
- Deliverable: Production application

### Week 7: Presentations & Assessment
- Oral defenses
- Peer reviews
- Portfolio submissions

## Grading Breakdown

- **Project Functionality:** 40%
- **Code Quality:** 25%
- **Testing & Documentation:** 20%
- **Presentation:** 15%

## Learning Outcomes Alignment

This project addresses:
- **CCC.1.1:** Problem analysis ✅
- **CCC.1.2:** Solution planning ✅
- **CCC.1.3:** Implementation ✅
- **CCC.1.4:** Testing & improvement ✅
- **CCC.1.5:** Documentation ✅
`;

  await fs.writeFile(path.join(outputDir, 'facilitation-guide/term-example.md'), content);
}

async function generateLearningResources(outputDir, projectData) {
  await fs.mkdir(path.join(outputDir, 'learn-more'), { recursive: true });

  const content = `# Learning Resources

## Official Documentation

- [${projectData.techStackConfig.frontend}](https://react.dev/)
- [${projectData.techStackConfig.routing}](https://reactrouter.com/)
- [${projectData.techStackConfig.dataFetching}](https://tanstack.com/query/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Accessibility

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Testing

- [${projectData.techStackConfig.testing}](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Performance

- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [Performance Optimization Guide](https://web.dev/fast/)

## Deployment

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Guide](https://pages.github.com/)

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

## Video Tutorials

- [${projectData.techStackConfig.frontend} Tutorial](https://react.dev/learn)
- [Modern Web Development](https://www.youtube.com/watch?v=...)
- [Accessibility Fundamentals](https://www.youtube.com/watch?v=...)

## Community

- [Stack Overflow](https://stackoverflow.com/)
- [Dev.to](https://dev.to/)
- [Reddit r/webdev](https://reddit.com/r/webdev)
- [Discord Communities](https://discord.gg/reactiflux)
`;

  await fs.writeFile(path.join(outputDir, 'learn-more/resources.md'), content);
}

// Helper function
function generateDailyBreakdown(startDay, endDay, phase, projectData) {
  const days = [];
  for (let i = startDay; i <= endDay; i++) {
    days.push(`**Day ${i}:** ${getDayFocus(i, phase, projectData)}`);
  }
  return days.join('\n');
}

function getDayFocus(day, phase, projectData) {
  const focuses = {
    setup: [
      'Project initialization and dependencies',
      'Routing and base structure',
      'CSS foundation and responsive setup'
    ],
    core: [
      'API service layer',
      `${projectData.domainAnalysis.coreFeatures[0]} implementation`,
      'UI components and loading states',
      'Error handling and edge cases'
    ],
    advanced: [
      'Detail views',
      'Data persistence with localStorage',
      `${projectData.domainAnalysis.coreFeatures[2] || 'Favorites'} functionality`,
      'URL state management'
    ],
    polish: [
      'Accessibility audit and fixes',
      'Unit and component tests',
      'Performance optimization',
      'Deployment and documentation'
    ]
  };

  const phaseArray = focuses[phase] || [];
  const index = (day - 1) % phaseArray.length;
  return phaseArray[index] || 'Continue development';
}
