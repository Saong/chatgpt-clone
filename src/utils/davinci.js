// import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

export const davinci = async (prompt, key) => {
  // const configuration = new Configuration({
  //   apiKey: key,
  //   //basePath: "https://openai-elser.openai.azure.com/openai/deployments/gpt-35-turbo-elser"
  //   basePath: 'https://openai-elser.openai.azure.com/openai/deployments/gpt-35-turbo-elser'
  // });

  // const openai = new OpenAIApi(configuration);

  // const response = await openai.createChatCompletion({
  //   // engine: "gpt-35-turbo-elser",
  //   api_version: '2023-03-15-preview', 
  //   engine: 'gpt-35-turbo-elser',
  //   messages: [
  //     {
  //       role: 'system',
  //       content:
  //         "you're an a AI assistant that replies to all my questions in markdown format.",
  //     },
  //     { role: 'user', content: 'hi' },
  //     { role: 'assistant', content: 'Hi! How can I help you?' },
  //     { role: 'user', content: `${prompt}?` },
  //   ],
  //   temperature: 0.3,
  //   max_tokens: 1000,
  //   top_p: 0.3,
  //   frequency_penalty: 0.5,
  //   presence_penalty: 0.2,
  // });


  const url = 'https://openai-elser.openai.azure.com/openai/deployments/gpt-35-turbo-elser/chat/completions';

  const apiVersion = '2023-03-15-preview';

  const data = {
    messages: [
      {
        role: 'system',
        content: "你是一位AI助手，需要用markdown格式回答我的问题"
      },
      { role: 'user', content: '你好' },
      { role: 'assistant', content: '你好，我可以帮你什么嘛' },
      { role: 'user', content:  `${prompt}?` },
    ],
    temperature: 0.3,
    max_tokens: 1000,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.2,
  };

  const response = axios.post(`${url}?api-version=${apiVersion}`, data, {
    headers: {
      'Content-Type': 'application/json',
      'api-key': `${key}`
    }
  });

  return response;
};


