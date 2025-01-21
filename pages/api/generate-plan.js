// /pages/api/generate-plan.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { studyTopics, days } = req.body; // Access the body directly

      // Prepare the prompt for Groq's API
      const prompt = `Create a detailed study plan for the following topics: ${studyTopics}. The student has ${days} days to prepare. Provide a breakdown of study time per topic along with learning resources.`;

      // Get the Groq API key from environment variables
      const apiKey = process.env.GROQ_API_KEY;

      // Ensure the API key is available
      if (!apiKey) {
        return res.status(500).json({ error: 'API key is missing' });
      }

      // Call the Groq API with the correct endpoint and parameters
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`, // Use the API key from the environment
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile', // Specify model here
          messages: [{
            role: 'user',
            content: prompt,
          }],
        }),
      });

      // Check if the response was successful
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from Groq API:', errorData);
        return res.status(500).json({ error: 'Error generating the study plan' });
      }

      // Parse the response from Groq's API
      const data = await response.json();

      // Extract the generated study plan from the API response
      const studyPlan = data.choices[0].message.content;

      // Return the formatted study plan as a JSON response
      return res.status(200).json({ studyPlan });
    } catch (err) {
      console.error('Network error or unexpected error:', err);
      return res.status(500).json({ error: 'Unexpected error occurred' });
    }
  } else {
    // Handle non-POST requests
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
