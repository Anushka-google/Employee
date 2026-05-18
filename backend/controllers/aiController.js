const axios = require('axios');

const recommendEmployee = async (req, res) => {
  try {
    const { name, skills, performanceScore, experience } = req.body;

    if (!name || !skills || !performanceScore || experience === undefined) {
      return res.status(400).json({ message: 'Missing employee details for recommendation' });
    }

    const prompt = `You are an HR AI assistant. Provide a performance recommendation for the following employee:
    Name: ${name}
    Skills: ${skills.join(', ')}
    Performance Score: ${performanceScore}/100
    Years of Experience: ${experience}

    Please provide:
    1. Promotion Recommendation
    2. Training Suggestions
    3. AI Feedback Generation
    Limit the response to a short, concise paragraph.`;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const recommendation = response.data.choices[0].message.content;

    res.json({ recommendation });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Error communicating with AI service',
    });
  }
};

module.exports = {
  recommendEmployee,
};