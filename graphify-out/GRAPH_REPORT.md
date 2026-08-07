# Graph Report - trazmediacom  (2026-08-07)

## Corpus Check
- 18 files · ~2,128 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 130 nodes · 137 edges · 27 communities (11 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `22cf7538`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- index.ts
- Release Documentation
- package.json
- paths
- dependencies
- compilerOptions
- devDependencies
- Trazmediacom
- vercel.json
- AGENTS.md
- CLAUDE.md
- @astrojs/react
- @astrojs/tailwind
- conventional-changelog-conventionalcommits
- semantic-release
- @semantic-release/changelog
- @semantic-release/commit-analyzer
- @semantic-release/git
- @semantic-release/github
- @semantic-release/release-notes-generator
- tailwindcss
- @tailwindcss/vite
- @types/react
- @types/react-dom
- typescript

## God Nodes (most connected - your core abstractions)
1. `Release Documentation` - 8 edges
2. `scripts` - 7 edges
3. `paths` - 7 edges
4. `Locale` - 5 edges
5. `compilerOptions` - 5 edges
6. `Trazmediacom` - 4 edges
7. `Initial Setup (One-Time)` - 4 edges
8. `Troubleshooting` - 4 edges
9. `getTranslations()` - 3 edges
10. `TranslationDict` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (27 total, 16 thin omitted)

### Community 0 - "index.ts"
Cohesion: 0.20
Nodes (11): getAlternateLinks(), getAlternateLocale(), getTranslations(), translations, alternateLinks, t, t, Locale (+3 more)

### Community 1 - "Release Documentation"
Cohesion: 0.12
Nodes (16): 1. Merge Release Workflow to Main, 2. Create Initial Git Tag, 3. Configure GitHub Secrets, Automatic Release Process, Commit Message Format, Configuration Files, How It Works, Initial Setup (One-Time) (+8 more)

### Community 2 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, scripts, astro, build, dev, preview (+4 more)

### Community 3 - "paths"
Cohesion: 0.15
Nodes (13): src/assets/*, src/components/*, src/i18n/*, src/layouts/*, src/styles/*, src/types/*, paths, @assets/* (+5 more)

### Community 4 - "dependencies"
Cohesion: 0.18
Nodes (11): astro, @astrojs/vercel, dependencies, astro, @astrojs/vercel, react, react-dom, @tanstack/react-query (+3 more)

### Community 5 - "compilerOptions"
Cohesion: 0.29
Nodes (6): astro/tsconfigs/strict, compilerOptions, baseUrl, jsx, jsxImportSource, extends

### Community 6 - "devDependencies"
Cohesion: 0.40
Nodes (5): @astrojs/check, devDependencies, @astrojs/check, @semantic-release/exec, @semantic-release/exec

### Community 7 - "Trazmediacom"
Cohesion: 0.40
Nodes (4): Getting Started, Release, Tech Stack, Trazmediacom

### Community 8 - "vercel.json"
Cohesion: 0.50
Nodes (3): buildCommand, installCommand, outputDirectory

## Knowledge Gaps
- **69 isolated node(s):** `name`, `type`, `version`, `dev`, `start` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`, `@astrojs/react`, `@astrojs/tailwind`, `conventional-changelog-conventionalcommits`, `semantic-release`, `@semantic-release/changelog`, `@semantic-release/commit-analyzer`, `@semantic-release/git`, `@semantic-release/github`, `@semantic-release/release-notes-generator`, `tailwindcss`, `@tailwindcss/vite`, `@types/react`, `@types/react-dom`, `typescript`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Release Documentation` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._