// Mock implementations for development
export const UploadFile = async ({ file }) => {
  // Simulate file upload
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        file_url: URL.createObjectURL(file),
        file_id: `file_${Date.now()}`
      })
    }, 1000)
  })
}

export const InvokeLLM = async ({ prompt, file_urls, response_json_schema }) => {
  // Mock AI response based on the prompt
  return new Promise((resolve) => {
    setTimeout(() => {
      let response = {}
      
      if (prompt.includes('emotion analysis')) {
        const emotions = ['joy', 'sadness', 'anger', 'fear', 'surprise', 'neutral', 'anxiety', 'hope', 'frustration']
        const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
        
        response = {
          text_emotion: randomEmotion,
          voice_emotion: file_urls ? emotions[Math.floor(Math.random() * emotions.length)] : null,
          facial_emotion: file_urls ? emotions[Math.floor(Math.random() * emotions.length)] : null,
          combined_emotion: randomEmotion,
          confidence_score: 0.7 + Math.random() * 0.3,
          emotional_consistency: 'consistent',
          psychological_insights: ['User appears to be in a reflective state', 'Emotions seem genuine and authentic'],
          support_recommendations: ['Continue sharing your thoughts', 'Practice mindfulness techniques']
        }
      } else if (prompt.includes('empathetic response')) {
        const responses = [
          "I hear what you're saying, and I want you to know that your feelings are completely valid. It takes courage to open up like this.",
          "Thank you for sharing that with me. I can sense the weight of what you're carrying, and I'm here to support you.",
          "That sounds really challenging. I appreciate you trusting me enough to share this. Would you like to explore this feeling further together?",
          "I understand how difficult this must be for you. Your emotions are important, and I'm here to listen without judgment."
        ]
        
        response = {
          content: responses[Math.floor(Math.random() * responses.length)],
          empathy_level: 8 + Math.floor(Math.random() * 2),
          therapeutic_approach: "validation_and_exploration",
          follow_up_suggestions: ["Consider what might be underlying these feelings", "Remember to practice self-compassion"]
        }
      }
      
      resolve(response)
    }, 1500 + Math.random() * 1000)
  })
}