
//questionsController.js

import axios from 'axios';

const questionsStore = [];

export const postQuestion = async (req, res) => {
    const { question } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            messages: [{ role: "user", content: question }],
            model: "gpt-3.5-turbo",
        }, {
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
        });

        const choices = response.data.choices;

        if (choices && choices.length > 0) {
            const answer = choices[0].message.content;
            questionsStore.push({ question, answer });
            res.status(200).json({ answer });
        } else {
            res.status(400).json({ error: "No response from AI" });
        }

    } catch (error) {
        console.error('Error while fetching answer from OpenAI:', error);
        res.status(500).json({ error: "Server error" });
    }
};

export const getQuestions = (req, res) => {
    res.status(200).json(questionsStore);
};



