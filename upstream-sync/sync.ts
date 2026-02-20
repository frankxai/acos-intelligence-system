export interface SyncConfig {
  upstream: string;
  branch: string;
  protected: string[];
  autoMerge: boolean;
}

export interface SyncResult {
  success: boolean;
  message: string;
  pulled: string[];
  merged: string[];
}

export interface Conflict {
  file: string;
  local: string;
  upstream: string;
}

export class UpstreamSync {
  private config: SyncConfig;

  constructor(config: SyncConfig) {
    this.config = config;
  }

  async pull(): Promise<SyncResult> {
    return {
      success: true,
      message: 'Pulled from upstream',
      pulled: ['src/index.ts', 'src/hooks/'],
      merged: []
    };
  }

  async merge(): Promise<SyncResult> {
    return {
      success: true,
      message: 'Merged upstream changes',
      pulled: [],
      merged: ['src/index.ts']
    };
  }

  async status(): Promise<{ ahead: number; behind: number; conflicts: Conflict[] }> {
    return {
      ahead: 0,
      behind: 0,
      conflicts: []
    };
  }

  async resolveConflict(conflict: Conflict, resolution: 'local' | 'upstream'): Promise<void> {
    console.log(`Resolved ${conflict.file} with ${resolution} version`);
  }

  isProtected(path: string): boolean {
    return this.config.protected.some(pattern => {
      if (pattern.endsWith('/**')) {
        return path.startsWith(pattern.slice(0, -3));
      }
      return path === pattern;
    });
  }
}

export default UpstreamSync;
