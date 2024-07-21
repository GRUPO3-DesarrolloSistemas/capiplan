import OpenAI from 'openai';

// Inicializa el cliente de OpenAI con la clave API
const openai = new OpenAI({
  
});

export const sendDataToOpenAI = async (steps: number, distance: number, calories: number): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Analiza los siguientes datos de fitness: Pasos: ${steps}, Distancia: ${distance.toFixed(2)} km, Calorías: ${calories}. Proporciona una sugerencia en español sobre si los pasos son suficientes para mantener una buena salud, si no lo son que actividad fisica sugieres para complementarlo.`
        }
      ],
      max_tokens: 150,
    });
    
    const messageContent = completion.choices[0]?.message?.content;
    if (!messageContent) {
      throw new Error('No message content received');
    }
    
    console.log(messageContent);
    return messageContent.trim();
  } catch (error) {
    console.error('Error sending data to OpenAI:', error);
    return 'Error retrieving suggestion'; // Devuelve un mensaje predeterminado en caso de error
  }
};





