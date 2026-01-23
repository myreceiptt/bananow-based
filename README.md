# BANANOW BASED NFTs Mint Page

---

---

## About This Repo

`bananow-based` is the mint page for the BANANOW NFTs on **Base**. This repository provides a production-ready Web3 frontend where collectors can connect a wallet, review the drop, and execute mint/claim transactions against the on-chain contract(s). The primary target chain is Base today, while remaining compatible with migration to any **EVM-compatible** blockchain.

### Purpose & Scope

- Provide a dedicated, user-friendly mint/claim experience for BANANOW on Base.
- Keep the app focused: wallet connection, eligibility/status display, and mint execution.
- Maintain production safety and reliable deployments under Evergreen practices.

### Blockchain

- Primary chain: **Base**
- Compatibility: **EVM-compatible**, with a migration-friendly posture for other EVM chains.

### Technology

- Framework: **Next.js** + **React**
- Web3 integration: **thirdweb**
- Styling: **Tailwind CSS**
- Tooling: **Yarn (modern)**, **ESLint**, **TypeScript**
- Deployment: **Vercel**

### Local Development

```bash
yarn install
```

Set env:

- `CLIENT_ID` (thirdweb client ID)

Run:

```bash
yarn dev
```

Optional checks:

```bash
yarn lint
yarn build
```

### How We Maintain Quality

- We follow **Prof. NOTA Evergreen Standard**: safe monthly updates and scheduled quarterly majors, keeping version for Vercel compatibility.
- We validate changes with audit + lint + build, and document runs under `EVERGREENING/completion-log-*.md`.

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)

  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~

- Package manager:

  - **Yarn** (lockfile: `yarn.lock`)
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~
  - ~~NPM (lockfile: `package-lock.json`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `yarn outdated`
   - ~~pnpm outdated~~
   - ~~npm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `yarn upgrade`
   - ~~pnpm update~~
   - ~~npm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `yarn audit --level moderate`
   - ~~pnpm audit~~
   - ~~npm audit~~
   - `yarn build`
   - ~~pnpm build~~
   - ~~npm run build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version
