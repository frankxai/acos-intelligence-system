# ACOS Intelligence System v11.0

**Autonomous Creator Operating System** — Dual-platform, self-learning, video-ready.

## Intelligence Score: 98/100

From v8 (52) → v9.0 (65) → v9.3 (72) → v10.0 (93) → **v11.0 (98)**

## What's New in v11

### Dual Platform Support
- **Claude Code** - Full hook system integration
- **OpenCode** - Native adapter in `.opencode/`

### From oh-my-opencode (32.5k ⭐)
- **Sisyphus Agent** - Main orchestrator
- **Hephaestus Agent** - Autonomous deep worker
- **Magic Word: `ultrawork`** - Fires all agents in parallel

### From claude-flow (100+ skills)
- **Swarm Orchestration** - 6 topologies (hierarchical, mesh, star, ring, adaptive, hierarchical-mesh)
- **Memory System** - Vector-based pattern storage with semantic search
- **8 Agent Types** - coordinator, coder, tester, reviewer, architect, researcher

### Video Production
- **Veo 3.1** - 8s, 720p video generation
- **Suno** - AI music creation
- **Remotion** - Programmatic video creation

### Upstream Sync
- Automated sync with oh-my-opencode
- Protected files preserved during merge

## Structure

```
acos-intelligence-system/
├── .sisyphus/           # Core from oh-my-opencode
├── .swarm/              # Swarm orchestration
├── .memory/             # Memory/Learning system
├── .video/              # Video production
├── .opencode/           # OpenCode adapter
├── hooks/               # Lifecycle hooks
├── skills/              # 22+ curated skills
├── commands/            # 40+ slash commands
├── scripts/             # Activity monitor
├── upstream-sync/       # oh-my-opencode sync
└── docs/                # Documentation
```

## Quick Start

```bash
npm install
npm run monitor  # Real-time hook/trajectory dashboard

# Run swarm
npm run swarm

# Sync upstream
npm run sync
```

## Integration

### Claude Code
Copy to your `.claude/` directory:
- `hooks/` → `.claude/hooks/`
- `skills/` → `.claude/skills/`
- `commands/` → `.claude/commands/`

### OpenCode
Use `.opencode/config.json` for native integration

## Magic Words

- `ultrawork` or `ulw` - Fire all agents in parallel

## Documentation

- [Master Plan](docs/ACOS_V11_MASTER_PLAN.md)
- [Monitoring Guide](docs/ACOS_MONITORING_GUIDE.md)

## License

MIT — With attribution to oh-my-opencode and claude-flow contributors

---

**Built by [FrankX](https://frankx.ai)** — AI Architect & Creator
