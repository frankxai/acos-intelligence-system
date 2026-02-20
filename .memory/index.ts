export interface MemoryEntry {
  id: string;
  content: string;
  embedding: number[];
  timestamp: number;
  tags: string[];
}

export class VectorStore {
  private entries: Map<string, MemoryEntry> = new Map();
  private index: Map<string, Set<string>> = new Map();

  async add(entry: MemoryEntry): Promise<void> {
    this.entries.set(entry.id, entry);
    
    for (const tag of entry.tags) {
      if (!this.index.has(tag)) {
        this.index.set(tag, new Set());
      }
      this.index.get(tag)!.add(entry.id);
    }
  }

  async search(query: string, limit: number = 10): Promise<MemoryEntry[]> {
    const results = Array.from(this.entries.values())
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
    
    return results;
  }

  async searchByTag(tag: string): Promise<MemoryEntry[]> {
    const ids = this.index.get(tag);
    if (!ids) return [];
    
    return Array.from(ids)
      .map(id => this.entries.get(id))
      .filter((entry): entry is MemoryEntry => entry !== undefined);
  }

  async delete(id: string): Promise<boolean> {
    const entry = this.entries.get(id);
    if (!entry) return false;
    
    for (const tag of entry.tags) {
      this.index.get(tag)?.delete(id);
    }
    
    return this.entries.delete(id);
  }

  async clear(): Promise<void> {
    this.entries.clear();
    this.index.clear();
  }
}

export class PatternMatcher {
  private vectorStore: VectorStore;

  constructor(vectorStore: VectorStore) {
    this.vectorStore = vectorStore;
  }

  async findSimilarPatterns(content: string, threshold: number = 0.8): Promise<MemoryEntry[]> {
    const results = await this.vectorStore.search(content, 10);
    return results;
  }

  async learnFromSuccess(task: string, solution: string): Promise<void> {
    const entry: MemoryEntry = {
      id: `pattern_${Date.now()}`,
      content: `Task: ${task}\nSolution: ${solution}`,
      embedding: [],
      timestamp: Date.now(),
      tags: ['success', 'pattern']
    };
    
    await this.vectorStore.add(entry);
  }

  async learnFromFailure(task: string, error: string): Promise<void> {
    const entry: MemoryEntry = {
      id: `failure_${Date.now()}`,
      content: `Task: ${task}\nError: ${error}`,
      embedding: [],
      timestamp: Date.now(),
      tags: ['failure', 'pattern']
    };
    
    await this.vectorStore.add(entry);
  }
}

export class NeuralTrain {
  private vectorStore: VectorStore;
  private patternMatcher: PatternMatcher;

  constructor() {
    this.vectorStore = new VectorStore();
    this.patternMatcher = new PatternMatcher(this.vectorStore);
  }

  async train(task: string, outcome: 'success' | 'failure', details: string): Promise<void> {
    if (outcome === 'success') {
      await this.patternMatcher.learnFromSuccess(task, details);
    } else {
      await this.patternMatcher.learnFromFailure(task, details);
    }
  }

  async getSuggestions(task: string): Promise<string[]> {
    const similar = await this.patternMatcher.findSimilarPatterns(task);
    return similar.map(entry => entry.content);
  }
}

export const memory = {
  VectorStore,
  PatternMatcher,
  NeuralTrain,
  create: () => new NeuralTrain()
};

export default memory;
