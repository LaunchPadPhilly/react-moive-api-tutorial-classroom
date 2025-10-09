const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const BASE_URL = 'https://api.openai.com/v1/chat/completions';

export const openaiApi = {
  async getLocalRecommendations(latitude, longitude, totalHours, watchedMovies) {
    if (!API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    // Build context about watched movies
    const movieTitles = watchedMovies
      .slice(0, 10) // Limit to last 10 movies to avoid token limits
      .map(m => m.title)
      .join(', ');

    const userMessage = `I've watched ${totalHours} hours of movies recently (including: ${movieTitles}). I'm at coordinates ${latitude}, ${longitude}. Can you suggest 3-5 outdoor activities, parks, or film museums near me to take a break from watching movies? Keep it casual and friendly!`;

    const requestBody = {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a friendly movie app assistant. When users reach 40 hours of watch time, recommend local outdoor activities, film museums, or parks near their location to encourage taking a break from watching movies. Use a casual, friendly tone. Format your response as a bulleted list with specific place names when possible.',
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      temperature: 0.8,
      max_tokens: 500,
    };

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || 'Failed to get recommendations from OpenAI');
    }

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      throw new Error('No recommendations received from OpenAI');
    }

    return {
      recommendation: data.choices[0].message.content,
      usage: data.usage,
    };
  },
};
