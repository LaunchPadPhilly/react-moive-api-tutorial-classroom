/**
 * Tech Stack Selector
 * Selects appropriate technology stack based on project type and requirements
 */

export async function selectTechStack(stackPreset, projectType, domainAnalysis) {
  const stacks = {
    'react-vite': {
      name: 'React + Vite',
      frontend: 'React 18',
      bundler: 'Vite',
      routing: 'React Router',
      dataFetching: 'TanStack Query',
      styling: 'CSS3 (Grid + Flexbox)',
      testing: 'Vitest + React Testing Library',
      icons: '@heroicons/react',
      storage: 'localStorage',
      deployment: ['Vercel', 'Netlify', 'GitHub Pages'],
      setupCommand: 'npm create vite@latest . -- --template react',
      packageManager: 'pnpm',
      dependencies: [
        'react-router-dom',
        '@tanstack/react-query',
        '@heroicons/react'
      ],
      devDependencies: [
        'vitest',
        '@testing-library/react',
        '@testing-library/jest-dom',
        '@testing-library/user-event',
        'jsdom',
        'prettier',
        'eslint-config-prettier'
      ],
      folderStructure: {
        'src/components': 'Reusable UI components',
        'src/pages': 'Route-level components',
        'src/hooks': 'Custom React hooks',
        'src/services': 'API integration layer',
        'src/utils': 'Helper functions',
        'src/styles': 'CSS modules',
        'src/test': 'Test utilities and setup'
      }
    },

    'nextjs': {
      name: 'Next.js',
      frontend: 'React 18 + Next.js 14',
      bundler: 'Turbopack',
      routing: 'Next.js App Router',
      dataFetching: 'React Server Components + SWR',
      styling: 'CSS Modules / Tailwind CSS',
      testing: 'Jest + React Testing Library',
      icons: '@heroicons/react',
      storage: 'localStorage (client) + Database (server)',
      deployment: ['Vercel', 'Netlify'],
      setupCommand: 'npx create-next-app@latest .',
      packageManager: 'pnpm',
      dependencies: [
        'swr',
        '@heroicons/react'
      ],
      devDependencies: [
        'jest',
        '@testing-library/react',
        '@testing-library/jest-dom',
        'prettier',
        'eslint-config-prettier'
      ],
      folderStructure: {
        'app': 'App Router pages and layouts',
        'components': 'Reusable UI components',
        'lib': 'Utilities and API functions',
        'public': 'Static assets',
        'hooks': 'Custom React hooks'
      }
    },

    'vue-vite': {
      name: 'Vue + Vite',
      frontend: 'Vue 3',
      bundler: 'Vite',
      routing: 'Vue Router',
      dataFetching: 'VueQuery (TanStack Query)',
      styling: 'CSS3 (Scoped styles)',
      testing: 'Vitest + Vue Testing Library',
      icons: '@heroicons/vue',
      storage: 'localStorage',
      deployment: ['Vercel', 'Netlify', 'GitHub Pages'],
      setupCommand: 'npm create vite@latest . -- --template vue',
      packageManager: 'pnpm',
      dependencies: [
        'vue-router',
        '@tanstack/vue-query',
        '@heroicons/vue'
      ],
      devDependencies: [
        'vitest',
        '@vue/test-utils',
        'jsdom',
        'prettier'
      ],
      folderStructure: {
        'src/components': 'Vue components',
        'src/views': 'Route-level views',
        'src/composables': 'Vue composables',
        'src/services': 'API layer',
        'src/utils': 'Helper functions'
      }
    },

    'svelte-vite': {
      name: 'Svelte + Vite',
      frontend: 'Svelte',
      bundler: 'Vite',
      routing: 'Svelte Router',
      dataFetching: 'Svelte Stores + fetch',
      styling: 'CSS3 (Scoped)',
      testing: 'Vitest + Svelte Testing Library',
      icons: '@heroicons/svelte',
      storage: 'localStorage',
      deployment: ['Vercel', 'Netlify'],
      setupCommand: 'npm create vite@latest . -- --template svelte',
      packageManager: 'pnpm',
      dependencies: [
        'svelte-routing',
        '@heroicons/svelte'
      ],
      devDependencies: [
        'vitest',
        '@testing-library/svelte',
        'jsdom'
      ],
      folderStructure: {
        'src/components': 'Svelte components',
        'src/routes': 'Route components',
        'src/stores': 'Svelte stores',
        'src/services': 'API layer'
      }
    }
  };

  // Auto-select based on project type if not specified
  if (stackPreset === 'auto') {
    if (projectType === 'web-fullstack') {
      stackPreset = 'nextjs';
    } else if (projectType === 'mobile-react-native') {
      return getMobileStack();
    } else {
      stackPreset = 'react-vite'; // Default
    }
  }

  const selectedStack = stacks[stackPreset] || stacks['react-vite'];

  // Enhance with domain-specific recommendations
  if (domainAnalysis.suggestedApis[0] !== 'No external API (local storage)') {
    selectedStack.apiIntegration = {
      primary: domainAnalysis.suggestedApis[0],
      caching: 'TanStack Query with stale-while-revalidate',
      errorHandling: 'Retry logic with exponential backoff',
      rateLimit: 'Client-side throttling and caching'
    };
  } else {
    selectedStack.apiIntegration = {
      primary: 'localStorage',
      dataStructure: 'JSON objects with timestamps',
      syncStrategy: 'Optimistic updates',
      migration: 'Version-based schema updates'
    };
  }

  // Add performance targets
  selectedStack.performanceTargets = {
    lighthousePerformance: 85,
    lighthouseAccessibility: 90,
    lighthouseBestPractices: 90,
    firstContentfulPaint: '< 1.5s',
    timeToInteractive: '< 3s',
    bundleSize: '< 500KB'
  };

  // Add accessibility requirements
  selectedStack.accessibility = {
    standard: 'WCAG 2.1 AA',
    features: [
      'Semantic HTML',
      'ARIA labels',
      'Keyboard navigation',
      'Screen reader support',
      'Color contrast ≥ 4.5:1',
      'Focus management',
      'Reduced motion support'
    ]
  };

  return selectedStack;
}

function getMobileStack() {
  return {
    name: 'React Native + Expo',
    frontend: 'React Native',
    framework: 'Expo',
    navigation: 'React Navigation',
    dataFetching: 'TanStack Query',
    styling: 'StyleSheet / Styled Components',
    testing: 'Jest + React Native Testing Library',
    storage: 'AsyncStorage',
    deployment: ['Expo EAS', 'App Store', 'Play Store'],
    setupCommand: 'npx create-expo-app .',
    packageManager: 'pnpm'
  };
}
