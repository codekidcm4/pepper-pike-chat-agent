import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";
export const CREATE_SESSION_ENDPOINT = "/api/create-session";
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const ui = {
  defaultMessage: {
    role: "assistant",
    content:
      "Hi! I'm the Pepper Pike Professor. I can help you with questions about our city, its history, or general inquiries. What would you like to know?",
  },
};

export const getThemeConfig = () => {
  return {};
};
