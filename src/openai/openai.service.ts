import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

/**
 * A service for interacting with the OpenAI GPT-3 API.
 */
@Injectable()
export class OpenaiService {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Generates text using the OpenAI GPT-3 API based on the given prompt.
   *
   * @param {string} prompt - The prompt to generate text for.
   * @returns {Promise<string>} The generated text.
   */
  async generateText(prompt: string): Promise<string> {
    const openaiApiKey = this.configService.get('OPENAI_API_KEY');
    // davinci-codex는 gpt-4 출시 이후 사용할 엔진이름임
    //const apiUrl = `https://api.openai.com/v1/engines/davinci-codex/completions`;
    const apiUrl = `https://api.openai.com/v1/engines/davinci/completions`;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openaiApiKey}`,
    };

    const data = {
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.1,
    };
    // const data = {
    //   prompt: `Please translate the following English text to Korean:\n\n"Hello, how are you?"\n\n번역:\n`,
    //   max_tokens: 100,
    //   n: 1,
    //   stop: ['\n'],
    //   temperature: 0.1,
    // };

    try {
      const response = await axios.post(apiUrl, data, { headers: headers });
      if (response.status === 200) {
        const generatedText = response.data.choices[0].text;
        return generatedText.trim();
      } else {
        throw new Error(
          `OpenAI API request failed with status code ${response.status}`,
        );
      }
    } catch (error) {
      console.error('Error generating text:', error);
      throw error;
    }
  }
}
