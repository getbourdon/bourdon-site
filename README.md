# bourdon-site

Marketing site for [bourdon](https://bourdon.ai) — cross-agent memory federation.

Next.js 16 (App Router) + Tailwind 4 + Geist, statically exported and deployed to **Cloudflare Pages**.

## Local development

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # produces ./out/
```

## Deploy

The site is a static export — `next build` writes everything to `out/`, which Cloudflare Pages serves directly.

### First-time setup (one-shot)

```bash
npx wrangler login
npx wrangler pages project create bourdon-ai --production-branch main
```

Then point `bourdon.ai` DNS in Cloudflare to the new Pages project.

### Ongoing deploys

```bash
bun run deploy
# = next build && npx wrangler pages deploy out --project-name=bourdon-ai
```

Alternatively connect the GitHub repo in the Cloudflare dashboard and Pages will auto-deploy on every push to `main`. Preview deploys fire for non-main branches.

## Why static export

- Cloudflare Pages free tier = unlimited bandwidth + unlimited requests
- Site is mostly content; no Fluid Compute / server actions needed
- If a server component becomes necessary later, swap to [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) without leaving the platform

## Stack notes

- `output: "export"` in `next.config.ts` produces static HTML
- `images.unoptimized: true` because the default `next/image` optimizer requires a server
- `trailingSlash: true` so `/foo` and `/foo/` both work on Cloudflare's edge
- `next/font` (Geist) is fine with static export — fonts are inlined at build time
