# ACOS - Agentic Creator OS v10.0

**Autonomous Intelligence** — Self-improving with safety guarantees.

## System Status

Run diagnostic and display:

1. Count `.claude/trajectories/*.json` (exclude \_active, \_operations, patterns)
2. Read `.claude/trajectories/patterns.json` for pattern count
3. Read `.claude-flow/metrics/learning-status.json` for learning state

```
+================================================================+
|                    AGENTIC CREATOR OS v10.0                      |
|         "Autonomous Intelligence. One Command."                  |
+================================================================+
|  Skills: 22 curated | Agents: 8 specialist | Profiles: 6 IAM   |
|  Hooks: 7 events | Intelligence: 93/100 | MCP: 6 servers       |
|  Trajectories: [N] | Avg Success: [N%] | Patterns: [N]         |
|  Learning: Active | Audit: Immutable | Circuit Breaker: Armed  |
+================================================================+
```

## v10 Intelligence Systems

| System | Purpose |
| --- | --- |
| Experience Replay | Injects top-2 similar successful trajectories as context |
| Agent IAM | Per-profile tool/directory scoping with least-privilege |
| Immutable Audit Trail | Append-only JSONL logging all tool use and decisions |
| Confidence Circuit Breaker | WARN at 3, RESTRICT at 5, BREAK at 8 failures per file |
| Conservative Self-Modify Gate | Snapshots config, auto-reverts if score drops >5 points |

## How It Works

You just talk. ACOS handles routing automatically.

```
Your request
    |
    v
ACOS Auto-Router (this command)
    |
    +-- "build a component"     --> Frontend Designer agent
    +-- "write a blog post"     --> Content Engine + SEO
    +-- "deploy to production"  --> DevOps pipeline
    +-- "create music"          --> Frequency Alchemist
    +-- "research AI trends"    --> Deep Research swarm
    +-- "build Arcanea world"   --> /ultraworld swarm
    +-- "write chapter 5"       --> /ultraworld Story Weaver
    +-- "review this PR"        --> Code Reviewer agent
    +-- "optimize performance"  --> Performance analysis swarm
    +-- "complex multi-file"    --> Auto-spawns swarm (3+ files)
    +-- anything else           --> Smart routing via hooks
```

No need to remember specific commands. No need to type /claude-flow-\* anything.
ACOS IS the interface. Everything else is internal infrastructure.

## Auto-Routing Rules

The system detects intent from your words:

| Keywords Detected                      | Route               | Agents     |
| -------------------------------------- | ------------------- | ---------- |
| build, component, ui, design           | Frontend Designer   | 1 agent    |
| blog, article, content, write, seo     | Content Engine      | 1-2 agents |
| deploy, push, production, vercel       | DevOps Engineer     | 1 agent    |
| music, suno, song, track               | Music Producer      | 1 agent    |
| research, investigate, analyze         | Deep Research       | 2-3 agents |
| architecture, system, oracle           | Technical Architect | 1 agent    |
| arcanea, gate, realm, guardian, seeker | Ultraworld          | 3-7 agents |
| book, chapter, story, character        | Ultraworld Story    | 2-4 agents |
| game, mechanics, progression           | Ultraworld Game     | 2-3 agents |
| complex, refactor, overhaul, redesign  | Full Swarm          | 5-8 agents |

## What Runs Automatically (You Never Touch These)

7 hook events fire every session (optimized from 15 to 7 for performance):

| Hook             | What It Does                                              |
| ---------------- | --------------------------------------------------------- |
| SessionStart     | Trajectory created, learning restored, Starlight context  |
| UserPromptSubmit | Skills activated, routing hints, domain classification    |
| PreToolUse       | Agent IAM enforcement, circuit breaker checks             |
| PostToolUse      | Operations tracked, audit trail, success scoring          |
| Stop             | Trajectory scored, patterns extracted, Starlight sync     |
| PreCompact       | Context preserved when window compresses                  |

## Self-Learning (Agentic Jujutsu)

Every session makes ACOS smarter:

- Operations recorded as trajectories (60+ stored)
- Success auto-scored on session end (67% avg)
- Patterns extracted from successful workflows (50+ n-grams)
- Experience Replay injects top-2 similar past successes
- Starlight Intelligence System syncs patterns across sessions
- Intelligence score: 93/100 (up from 72 in v9.3)

## Quick Reference

### Primary Commands (Use These)

| Command              | Purpose                               |
| -------------------- | ------------------------------------- |
| /acos                | THIS. The auto-router. Start here.    |
| /ultraworld          | Arcanea creative swarm world-building |
| /frankx-ai-build     | Full FrankX build session             |
| /frankx-ai-deploy    | Deploy to frankx.ai                   |
| /starlight-architect | Strategic meta-orchestration          |
| /superintelligence   | Maximum reasoning depth               |

### Specialized (Auto-Routed, Rarely Need Directly)

| Command          | Purpose                                   |
| ---------------- | ----------------------------------------- |
| /acos-swarm      | Manual swarm init (auto-detected usually) |
| /acos-flow       | System dashboard + metrics                |
| /acos-agents     | Agent registry reference                  |
| /acos-memory     | Memory layer operations                   |
| /acos-checkpoint | Manual checkpoint management              |
| /agentic-jujutsu | Learning system status                    |

### Internal Infrastructure (Never Type These)

All 83 /claude-flow-\* commands are absorbed into ACOS.
They still exist for backwards compatibility but you never need them.
ACOS invokes them internally when appropriate.

## Architecture

```
                           /acos v10
                              |
                 +------------+------------+
                 |            |            |
            FrankX AI    Ultraworld    Intelligence
            (Build)      (Create)      (Think)
                 |            |            |
            +---+---+   +---+---+   +---+---+
            |   |   |   |   |   |   |   |   |
           Blog UI SEO World Book Game Star Super
           Eng Des Int  Arch Weav Des light intel

  +---------------- Safety Layer -----------------+
  |  Agent IAM | Circuit Breaker | Audit Trail    |
  +-----------------------------------------------+
  +------------- Intelligence Layer ---------------+
  |  Experience Replay | Starlight Sync | Score 93 |
  +-----------------------------------------------+
```

Just describe what you want. ACOS handles the rest.
