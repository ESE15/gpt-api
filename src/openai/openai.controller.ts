import { Controller, Get, Query } from '@nestjs/common';
import { OpenaiService } from './openai.service';

/**
 * A controller for the OpenAI API
 */
@Controller('openai')
export class OpenaiController {
  constructor(private readonly openapiService: OpenaiService) {}

  /**
   * Generates text using GPT-3 based on the given prompt
   *
   * @param {string} prompt - The prompt to generate text for.
   * @returns {Promise<string>} The generated text.
   */
  @Get('generate-text')
  async generateText(@Query('prompt') prompt: string): Promise<string> {
    return this.openapiService.generateText(prompt);
  }
}
