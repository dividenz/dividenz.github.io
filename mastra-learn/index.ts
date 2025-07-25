import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { MCPClient } from '@mastra/mcp';
import * as dotenv from 'dotenv';
dotenv.config();
import readline from 'readline';

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a topic for the article: ', async (topic) => {
    // Set up MCP client for Mastra Docs tools
    const mcp = new MCPClient({
      servers: {
        mastra: {
          command: 'cmd',
          args: ['/c', 'npx', '-y', '@mastra/mcp-docs-server'],
        },
      },
    });

    const tools = await mcp.getTools();

    const agent = new Agent({
      name: 'ArticleWriter',
      instructions: 'You are an expert article writer. Write detailed, engaging articles on any topic provided, including an introduction, main points, and a conclusion. Use Mastra Docs tools if relevant.',
      model: openai('gpt-4o-mini', {
        apiKey: process.env.OPENAI_API_KEY,
      }),
      tools,
    });

    const prompt = `Write a detailed, engaging article about the following topic: "${topic}". Include an introduction, main points, and a conclusion.`;
    const result = await agent.generate(prompt);
    console.log('\nGenerated Article:\n');
    console.log(result.text);
    rl.close();
  });
}

main();
