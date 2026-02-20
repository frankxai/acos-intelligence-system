import { Task } from './types';

export interface UltraworkConfig {
  enabled: boolean;
  maxAgents: number;
  defaultAgents: string[];
}

export const DEFAULT_ULTRAWORK_CONFIG: UltraworkConfig = {
  enabled: true,
  maxAgents: 10,
  defaultAgents: [
    'oracle',
    'explore',
    'librarian',
  ]
};

export function isUltraworkTrigger(input: string): boolean {
  const trimmed = input.trim().toLowerCase();
  return trimmed === 'ultrawork' || trimmed === 'ulw' || trimmed.startsWith('ultrawork ') || trimmed.startsWith('ulw ');
}

export function parseUltraworkInput(input: string): { isUltrawork: boolean; task?: string } {
  const trimmed = input.trim().toLowerCase();
  
  if (trimmed === 'ultrawork' || trimmed === 'ulw') {
    return { isUltrawork: true };
  }
  
  if (trimmed.startsWith('ultrawork ') || trimmed.startsWith('ulw ')) {
    const task = input.slice(trimmed.startsWith('ultrawork ') ? 10 : 3).trim();
    return { isUltrawork: true, task };
  }
  
  return { isUltrawork: false };
}

export async function executeUltrawork(
  task: string,
  config: UltraworkConfig = DEFAULT_ULTRAWORK_CONFIG
): Promise<Task[]> {
  const agents = config.defaultAgents.slice(0, config.maxAgents);
  
  const tasks: Task[] = agents.map(agent => ({
    type: 'agent',
    agent,
    prompt: task,
    run_in_background: true
  }));
  
  return tasks;
}

export const ultrawork = {
  name: 'ultrawork',
  aliases: ['ulw'],
  handler: executeUltrawork,
  config: DEFAULT_ULTRAWORK_CONFIG,
  isTrigger: isUltraworkTrigger,
  parse: parseUltraworkInput
};

export default ultrawork;
