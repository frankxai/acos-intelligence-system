# ACOS Intelligence System v11.0

**Autonomous Creator Operating System** — Dual-platform, self-learning, video-ready.

## Intelligence Score: 98/100

From v8 (52) → v9.0 (65) → v9.3 (72) → v10.0 (93) → **v11.0 (98)**

## What's New in v11

### Plugin Architecture (from knowledge-work-plugins)
- **Plugin manifest** — `.claude-plugin/plugin.json` for Cowork-compatible installation
- **Connector system** — `CONNECTORS.md` maps `~~category` placeholders to tool vendors
- **Progressive disclosure skills** — lean SKILL.md + `references/` subdirs (new skills)
- **3 new skills** — `creator-productivity`, `brand-voice`, `acos-meta`
- **Creator plugin contributed back** — `creator/` plugin added to [knowledge-work-plugins](https://github.com/frankxai/knowledge-work-plugins)

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
├── .claude-plugin/
│   └── plugin.json      # Plugin manifest (installable in Cowork + Claude Code)
├── .mcp.json            # MCP server registry
├── CONNECTORS.md        # Connector category map (~~category placeholders)
├── .sisyphus/           # Core from oh-my-opencode
├── .swarm/              # Swarm orchestration
├── .memory/             # Memory/Learning system
├── .video/              # Video production
├── .opencode/           # OpenCode adapter
├── hooks/               # Lifecycle hooks
├── skills/              # 25+ curated skills (new: progressive disclosure format)
│   ├── creator-productivity/  # Task + workspace memory for creators
│   ├── brand-voice/           # Voice attributes + tone adaptation
│   ├── acos-meta/             # ACOS self-documentation + extension guide
│   └── [22 existing skills]
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

## knowledge-work-plugins Integration

ACOS v11 is part of the [knowledge-work-plugins](https://github.com/frankxai/knowledge-work-plugins) ecosystem.

**ACOS contributes:**
- `creator/` plugin — content, visual, music creation for independent creators

**ACOS draws from:**
- Plugin manifest pattern (`.claude-plugin/plugin.json`)
- Connector agnosticism (`~~category` placeholders in CONNECTORS.md)
- Progressive disclosure skill format (lean SKILL.md + `references/`)
- Two-tier memory system (from productivity plugin)
- Brand voice framework (from marketing plugin)
- Command workflow structure (trigger → input gathering → steps → output)

## License

MIT — With attribution to oh-my-opencode, claude-flow, and knowledge-work-plugins contributors

---

**Built by [FrankX](https://frankx.ai)** — AI Architect & Creator
