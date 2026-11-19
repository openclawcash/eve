import openclawcash from "@openclawcash/eve";

export default openclawcash({
  apiKey: process.env.OPENCLAWCASH_AGENT_KEY!,
});
