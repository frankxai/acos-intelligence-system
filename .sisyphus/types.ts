export interface Task {
  type: 'agent' | 'category';
  agent?: string;
  category?: string;
  prompt: string;
  run_in_background: boolean;
  session_id?: string;
}

export interface AgentConfig {
  name: string;
  model: string;
  maxTokens: number;
  enabled: boolean;
}

export interface CategoryConfig {
  name: string;
  domain: string;
  model: string;
  maxTokens: number;
}

export interface HookConfig {
  enabled: boolean;
  match: string;
  source: string;
}
