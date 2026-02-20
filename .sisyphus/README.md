# ACOS Sisyphus Core

> Forked from oh-my-opencode with ACOS customizations

## Overview

This directory contains the core Sisyphus agent implementation for ACOS v11.

## Structure

```
.sisyphus/
├── rules/
│   └── sisyphus-prompt.md    # Main Sisyphus system prompt
├── magic-words/
│   ├── ultrawork.ts           # Magic word handler
│   └── index.ts              # Magic word registry
├── tools/
│   ├── hash-edit.ts          # Hash-anchored edit tool
│   └── parallel-exec.ts      # Parallel execution
└── sisyphus.ts              # Main orchestrator
```

## Integration

This module is designed to work with:
- Claude Code via hooks system
- OpenCode via `.opencode/` adapter

## Upstream Sync

This is ACOS-customized code. During upstream sync with oh-my-opencode:
- Files in this directory are PROTECTED
- Custom ACOS branding is preserved
- Only core upstream changes are merged

## License

MIT - With attribution to oh-my-opencode contributors
