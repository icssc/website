# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 14 site (ICS Student Council website) using pnpm. No backend, database, or external services required.

### Quick reference

- **Install deps:** `pnpm install`
- **Dev server:** `pnpm dev` (port 3000)
- **Lint:** `pnpm lint` (runs Biome — warnings for `<img>` usage are expected and pre-existing)
- **Build:** `pnpm build` (static export via `output: "export"`)
- **Format:** `pnpm format`

### Gotchas

- The original lockfile references a stale `pkg.pr.new` URL for `@opennextjs/aws` that 404s. A `pnpm.overrides` entry in `package.json` pins `@opennextjs/aws` to `3.4.2` to fix this. If the lockfile is deleted and regenerated, this override must be present.
- `pnpm.onlyBuiltDependencies` in `package.json` allowlists `@biomejs/biome`, `esbuild`, `sharp`, and `workerd` so their postinstall scripts run. Without this, Biome (lint) and build tooling will not work.
- The `next build` ESLint step warns about invalid options (`useEslintrc`, `extensions` removed) but does not fail the build.
- Cloudflare deployment commands (`pnpm preview`, `pnpm deploy`) require Cloudflare credentials and are not needed for development.
