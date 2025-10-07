/**
 * Problem Statement Generator
 * Creates comprehensive problem statements following the existing format
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateProblemStatement(outputDir, projectData) {
  const { projectTopic, domainAnalysis } = projectData;

  const content = `# Problem Statement

${domainAnalysis.problemContext}

## Current Pain Points

${generatePainPoints(domainAnalysis)}

## Target Users

${generateTargetUsers(domainAnalysis)}

## Success Indicators

${generateSuccessIndicators(projectData)}

---

*This problem statement sets the foundation for the project scope and implementation strategy.*
`;

  await fs.writeFile(path.join(outputDir, '00-problem.md'), content);
}

function generatePainPoints(domainAnalysis) {
  const painPointsMap = {
    movie: [
      'Many movie websites are cluttered with ads, slow to load, or require registration',
      'Mobile experiences are often poor with difficult navigation and tiny text',
      'Users lose track of movies they want to watch because there\'s no simple way to bookmark them',
      'Information is scattered across multiple sites and platforms'
    ],
    recipe: [
      'Recipe websites have excessive ads and pop-ups before showing the actual recipe',
      'Long personal stories and backstories before the recipe content',
      'Inconsistent formatting makes it hard to follow instructions',
      'No simple way to save favorite recipes without creating accounts'
    ],
    weather: [
      'Weather apps are often heavy and slow to load',
      'Excessive notifications and permission requests',
      'Ad-heavy interfaces clutter the important information',
      'Complicated interfaces for simple weather queries'
    ],
    music: [
      'Full streaming services are too complex for casual listening',
      'Difficulty discovering new music without algorithm recommendations',
      'No simple way to organize favorite tracks',
      'Heavy apps consume device storage'
    ],
    book: [
      'Book discovery platforms require complex account setup',
      'Reading lists are often locked behind paywalls',
      'Information scattered across multiple book databases',
      'Difficult to track reading progress across devices'
    ],
    fitness: [
      'Fitness apps require expensive subscriptions',
      'Complex interfaces overwhelming for beginners',
      'Privacy concerns with health data tracking',
      'No simple way to log workouts without extensive setup'
    ],
    budget: [
      'Finance apps require linking bank accounts (privacy concerns)',
      'Complex features overwhelming for simple expense tracking',
      'Subscription fees for basic budgeting tools',
      'Difficult to get started without financial expertise'
    ],
    todo: [
      'Project management tools are too complex for personal tasks',
      'Excessive features create overwhelming interfaces',
      'Syncing issues across devices',
      'Requires account creation for simple task lists'
    ],
    generic: [
      'Current solutions are complex and overwhelming',
      'Require unnecessary account creation',
      'Poor mobile experiences',
      'Information is fragmented across multiple sources'
    ]
  };

  const painPoints = painPointsMap[domainAnalysis.domain] || painPointsMap.generic;
  return painPoints.map((point, i) => `${i + 1}. **${point}**`).join('\n');
}

function generateTargetUsers(domainAnalysis) {
  return domainAnalysis.targetUsers.map((user, i) => {
    const descriptions = {
      'casual viewers': 'who want quick access to movie information without the overhead of complex applications',
      'film enthusiasts': 'who are passionate about movies and want to discover and organize their watchlist',
      'researchers': 'doing film-related projects who need quick access to movie data',
      'home cooks': 'who want to find and save recipes quickly without navigating cluttered websites',
      'food enthusiasts': 'who enjoy discovering new recipes and organizing their favorites',
      'meal planners': 'who need to plan weekly meals and grocery lists efficiently',
      'travelers': 'who need quick weather information for trip planning',
      'outdoor enthusiasts': 'who rely on accurate weather forecasts for activities',
      'general public': 'who need simple, fast access to weather information',
      'music lovers': 'who want to discover and organize their favorite tracks',
      'collectors': 'who maintain extensive music libraries and playlists',
      'casual listeners': 'who want simple music discovery without complex streaming services',
      'readers': 'who want to discover and track books without complex platforms',
      'students': 'who need to manage reading lists for courses',
      'book clubs': 'who coordinate reading schedules and discussions',
      'fitness enthusiasts': 'who want to track workouts and progress',
      'beginners': 'who are starting their fitness journey and need simple tools',
      'trainers': 'who create workout plans for clients',
      'budget-conscious users': 'who want to track spending without linking bank accounts',
      'families': 'who manage household budgets together',
      'professionals': 'who manage tasks and projects efficiently',
      'busy individuals': 'who need simple task management without complexity'
    };

    const desc = descriptions[user] || 'who need this solution';

    return `- **${capitalizeWords(user)}:** ${capitalizeWords(user)} ${desc}`;
  }).join('\n');
}

function generateSuccessIndicators(projectData) {
  const { techStackConfig, domainAnalysis } = projectData;

  return `- Users can find relevant ${domainAnalysis.dataModels[0] || 'content'} within 2 seconds of searching
- The interface works seamlessly on phones, tablets, and desktops
- Users can save and retrieve their favorites across browser sessions
- The application loads quickly even on slower internet connections (4G)
- All users, including those using screen readers, can navigate the application effectively
- Lighthouse Performance score ≥ ${techStackConfig.performanceTargets.lighthousePerformance}
- Lighthouse Accessibility score ≥ ${techStackConfig.performanceTargets.lighthouseAccessibility}
- WCAG 2.1 AA compliance achieved`;
}

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
