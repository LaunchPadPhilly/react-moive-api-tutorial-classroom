/**
 * Domain Analyzer
 * Analyzes project topics to determine appropriate features, APIs, and patterns
 */

export async function analyzeProjectDomain(projectTopic, projectType) {
  const topic = projectTopic.toLowerCase();

  // Domain patterns database
  const domains = {
    movie: {
      keywords: ['movie', 'film', 'cinema', 'video'],
      apis: ['OMDb API', 'TMDb API', 'MovieDB'],
      features: ['search', 'details', 'favorites', 'ratings', 'reviews'],
      dataModels: ['Movie', 'Search', 'Favorite'],
      userTypes: ['casual viewers', 'film enthusiasts', 'researchers']
    },
    recipe: {
      keywords: ['recipe', 'food', 'cooking', 'meal'],
      apis: ['Spoonacular API', 'Edamam API', 'TheMealDB'],
      features: ['search recipes', 'ingredients', 'favorites', 'nutrition', 'instructions'],
      dataModels: ['Recipe', 'Ingredient', 'Nutrition'],
      userTypes: ['home cooks', 'food enthusiasts', 'meal planners']
    },
    weather: {
      keywords: ['weather', 'forecast', 'temperature', 'climate'],
      apis: ['OpenWeather API', 'WeatherAPI', 'AccuWeather'],
      features: ['current weather', 'forecast', 'location search', 'favorites', 'alerts'],
      dataModels: ['Weather', 'Forecast', 'Location'],
      userTypes: ['travelers', 'outdoor enthusiasts', 'general public']
    },
    music: {
      keywords: ['music', 'song', 'artist', 'album', 'playlist'],
      apis: ['Spotify API', 'Last.fm API', 'iTunes API'],
      features: ['search tracks', 'artist info', 'playlists', 'favorites', 'recommendations'],
      dataModels: ['Track', 'Artist', 'Album', 'Playlist'],
      userTypes: ['music lovers', 'collectors', 'casual listeners']
    },
    book: {
      keywords: ['book', 'library', 'reading', 'literature'],
      apis: ['Google Books API', 'Open Library API', 'GoodReads'],
      features: ['search books', 'details', 'favorites', 'reading list', 'reviews'],
      dataModels: ['Book', 'Author', 'Review'],
      userTypes: ['readers', 'students', 'book clubs']
    },
    fitness: {
      keywords: ['fitness', 'exercise', 'workout', 'health', 'gym'],
      apis: ['ExerciseDB API', 'Nutritionix API', 'Wger API'],
      features: ['exercise library', 'workout plans', 'tracking', 'goals', 'progress'],
      dataModels: ['Exercise', 'Workout', 'Progress'],
      userTypes: ['fitness enthusiasts', 'beginners', 'trainers']
    },
    budget: {
      keywords: ['budget', 'expense', 'finance', 'money', 'spending'],
      apis: ['No external API (local storage)', 'Plaid API (optional)'],
      features: ['add transactions', 'categories', 'charts', 'budget limits', 'export'],
      dataModels: ['Transaction', 'Category', 'Budget'],
      userTypes: ['budget-conscious users', 'students', 'families']
    },
    todo: {
      keywords: ['todo', 'task', 'checklist', 'productivity'],
      apis: ['No external API (local storage)'],
      features: ['add tasks', 'categories', 'due dates', 'priorities', 'filters'],
      dataModels: ['Task', 'Category', 'Tag'],
      userTypes: ['professionals', 'students', 'busy individuals']
    }
  };

  // Find matching domain
  let matchedDomain = null;
  let matchScore = 0;

  for (const [domainName, domainData] of Object.entries(domains)) {
    const score = domainData.keywords.filter(keyword => topic.includes(keyword)).length;
    if (score > matchScore) {
      matchScore = score;
      matchedDomain = { name: domainName, ...domainData };
    }
  }

  // Default generic domain if no match
  if (!matchedDomain) {
    matchedDomain = {
      name: 'generic',
      keywords: [],
      apis: ['Custom API or localStorage'],
      features: ['search/browse', 'details view', 'favorites', 'filtering', 'sorting'],
      dataModels: ['Item', 'Collection'],
      userTypes: ['general users', 'enthusiasts']
    };
  }

  return {
    domain: matchedDomain.name,
    suggestedApis: matchedDomain.apis,
    coreFeatures: matchedDomain.features,
    dataModels: matchedDomain.dataModels,
    targetUsers: matchedDomain.userTypes,
    projectType: projectType || 'web-spa',

    // Generate problem context
    problemContext: generateProblemContext(matchedDomain),

    // Generate user stories
    userStories: generateUserStories(matchedDomain),

    // Suggest competing solutions
    competingSolutions: generateCompetingSolutions(matchedDomain)
  };
}

function generateProblemContext(domain) {
  const contexts = {
    movie: 'Users are overwhelmed by fragmented movie information across multiple streaming platforms and websites, with poor mobile experiences and no simple way to save movies for later.',
    recipe: 'Home cooks struggle to find reliable recipes quickly, with information scattered across blogs with ads, pop-ups, and long backstories before the actual recipe.',
    weather: 'Users need quick, accurate weather information without downloading heavy apps or navigating ad-filled websites.',
    music: 'Music lovers want to discover and organize their favorite tracks without the complexity of full streaming services.',
    book: 'Readers need a simple way to discover, track, and organize books they want to read without creating complex accounts.',
    fitness: 'Fitness enthusiasts lack simple tools to track workouts and progress without expensive subscriptions or complex apps.',
    budget: 'People need straightforward expense tracking without linking bank accounts or complex financial software.',
    todo: 'Users need simple task management without the overhead of enterprise project management tools.',
    generic: 'Users need a streamlined way to access and organize information without the complexity of existing solutions.'
  };

  return contexts[domain.name] || contexts.generic;
}

function generateUserStories(domain) {
  const stories = [];

  domain.features.forEach((feature, index) => {
    const userType = domain.userTypes[0] || 'users';
    stories.push({
      id: index + 1,
      story: `As a ${userType}, I want to ${feature} so that I can find information quickly`,
      priority: index < 3 ? 'high' : 'medium',
      milestone: index < 2 ? 2 : 3
    });
  });

  return stories;
}

function generateCompetingSolutions(domain) {
  const solutions = {
    movie: [
      { name: 'IMDb App', pros: 'Comprehensive data', cons: 'Requires login, ad-heavy, slow' },
      { name: 'Just Watch', pros: 'Clean UI', cons: 'Requires account for favorites' },
      { name: 'Google Search', pros: 'Fast, no registration', cons: 'No favorites or organization' }
    ],
    recipe: [
      { name: 'AllRecipes', pros: 'Large database', cons: 'Cluttered with ads, slow mobile' },
      { name: 'Food blogs', pros: 'Detailed content', cons: 'Long intros, inconsistent format' },
      { name: 'Pinterest', pros: 'Visual discovery', cons: 'Links often broken, requires account' }
    ],
    weather: [
      { name: 'Weather.com', pros: 'Accurate data', cons: 'Ad-heavy, cluttered interface' },
      { name: 'Native weather apps', pros: 'Pre-installed', cons: 'Basic features, limited data' },
      { name: 'Weather Channel app', pros: 'Detailed forecasts', cons: 'Heavy app, notifications' }
    ],
    generic: [
      { name: 'Existing Solution 1', pros: 'Established brand', cons: 'Complex, requires account' },
      { name: 'Existing Solution 2', pros: 'Feature-rich', cons: 'Expensive, steep learning curve' },
      { name: 'Manual methods', pros: 'Simple', cons: 'Time-consuming, error-prone' }
    ]
  };

  return solutions[domain.name] || solutions.generic;
}
