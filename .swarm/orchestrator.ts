export type TopologyType = 
  | 'hierarchical'
  | 'mesh'
  | 'star'
  | 'ring'
  | 'adaptive'
  | 'hierarchical-mesh';

export interface SwarmConfig {
  topology: TopologyType;
  maxAgents: number;
  timeout: number;
}

export interface AgentNode {
  id: string;
  type: string;
  role: 'coordinator' | 'worker' | 'reviewer';
  capabilities: string[];
}

export interface SwarmMessage {
  from: string;
  to: string;
  payload: any;
  timestamp: number;
}

export class SwarmOrchestrator {
  private agents: Map<string, AgentNode> = new Map();
  private topology: TopologyType;
  private messageQueue: SwarmMessage[] = [];

  constructor(config: SwarmConfig) {
    this.topology = config.topology;
  }

  async dispatch(task: string, agents: string[]): Promise<any[]> {
    switch (this.topology) {
      case 'hierarchical':
        return this.hierarchicalDispatch(task, agents);
      case 'mesh':
        return this.meshDispatch(task, agents);
      case 'star':
        return this.starDispatch(task, agents);
      case 'ring':
        return this.ringDispatch(task, agents);
      case 'adaptive':
        return this.adaptiveDispatch(task, agents);
      case 'hierarchical-mesh':
        return this.hierarchicalMeshDispatch(task, agents);
      default:
        return this.hierarchicalDispatch(task, agents);
    }
  }

  private async hierarchicalDispatch(task: string, agents: string[]): Promise<any[]> {
    const coordinator = agents[0];
    const workers = agents.slice(1);
    
    const results = await Promise.all(
      workers.map(worker => this.executeAgent(worker, task))
    );
    
    return results;
  }

  private async meshDispatch(task: string, agents: string[]): Promise<any[]> {
    return Promise.all(
      agents.map(agent => this.executeAgent(agent, task))
    );
  }

  private async starDispatch(task: string, agents: string[]): Promise<any[]> {
    const center = agents[0];
    const spokes = agents.slice(1);
    
    const centerResult = await this.executeAgent(center, task);
    const spokeResults = await Promise.all(
      spokes.map(spoke => this.executeAgent(spoke, task))
    );
    
    return [centerResult, ...spokeResults];
  }

  private async ringDispatch(task: string, agents: string[]): Promise<any[]> {
    const results: any[] = [];
    
    for (const agent of agents) {
      const result = await this.executeAgent(agent, task);
      results.push(result);
    }
    
    return results;
  }

  private async adaptiveDispatch(task: string, agents: string[]): Promise<any[]> {
    const complexity = this.assessComplexity(task);
    
    if (complexity < 5) {
      return this.meshDispatch(task, agents.slice(0, 2));
    } else if (complexity < 10) {
      return this.hierarchicalDispatch(task, agents.slice(0, 4));
    } else {
      return this.hierarchicalMeshDispatch(task, agents);
    }
  }

  private async hierarchicalMeshDispatch(task: string, agents: string[]): Promise<any[]> {
    const coordinators = agents.slice(0, 2);
    const workers = agents.slice(2);
    
    const coordinatorResults = await Promise.all(
      coordinators.map(c => this.executeAgent(c, task))
    );
    
    const workerChunks = this.chunkArray(workers, Math.ceil(workers.length / coordinators.length));
    
    const workerResults = await Promise.all(
      workerChunks.map(chunk => 
        Promise.all(chunk.map(w => this.executeAgent(w, task)))
      )
    );
    
    return [...coordinatorResults, ...workerResults.flat()];
  }

  private assessComplexity(task: string): number {
    const complexityIndicators = [
      'architecture', 'design', 'system', 'complex',
      'refactor', 'implement', 'build', 'create'
    ];
    
    return complexityIndicators.filter(
      indicator => task.toLowerCase().includes(indicator)
    ).length;
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  private async executeAgent(agent: string, task: string): Promise<any> {
    return { agent, result: `Executed by ${agent}` };
  }
}

export default SwarmOrchestrator;
