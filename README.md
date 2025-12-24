# BANANOW BASED NFTs Mint Page

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)

  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~

- Package manager:

  - **Yarn** (lockfile: `yarn.lock`, repo-pinned to `yarn@4.12.0`)
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~
  - ~~NPM (lockfile: `package-lock.json`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `yarn up -i` (interactive report)
   - ~~pnpm outdated~~
   - ~~npm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `yarn up -i` (apply non-major only)
   - ~~pnpm update~~
   - ~~npm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `yarn npm audit --severity moderate`
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

---

---

![tw-banner](https://github.com/thirdweb-example/next-starter/assets/57885104/20c8ce3b-4e55-4f10-ae03-2fe4743a5ee8)

## thirdweb-next-starter

Starter template to build an onchain react native app with [thirdweb](https://thirdweb.com/) and [next](https://nextjs.org/).

### Installation

Install the template using [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
  npx thirdweb create app --next
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`CLIENT_ID`

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).

### Run locally

Install dependencies

```bash
yarn
```

Start development server

```bash
yarn dev
```

Create a production build

```bash
yarn build
```

Preview the production build

```bash
yarn start
```

### Resources

- [Documentation](https://portal.thirdweb.com/typescript/v5)
- [Templates](https://thirdweb.com/templates)
- [YouTube](https://www.youtube.com/c/thirdweb)
- [Blog](https://blog.thirdweb.com)

### Need help?

For help or feedback, please [visit our support site](https://thirdweb.com/support)
