# AI Interior Design Platform

A Next.js (App Router + TypeScript) starter with Tailwind CSS providing three example flows:

- **Enhance** – Upload a room photo and "enhance" it (placeholder API demo).
- **Stage** – Virtual staging concept (placeholder API demo).
- **Design** – Style exploration concept (placeholder API demo).

> This is a scaffold: API routes return mock responses so you can wire up real providers later.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

1. **Install**
   ```bash
   pnpm i
   # or npm i / yarn
   ```

2. **Env**
   ```bash
   cp .env.local.example .env.local
   # add your keys
   ```

3. **Dev**
   ```bash
   pnpm dev
   # or npm run dev
   ```

## Project Structure

```
ai-interior-design-platform/
└── src/
    └── app/
        ├── api/
        │   ├── enhance/route.ts
        │   ├── stage/route.ts
        │   └── design/route.ts
        ├── enhance/page.tsx
        ├── stage/page.tsx
        ├── design/page.tsx
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
```

## API Notes

The `/api/*` endpoints accept `POST` JSON bodies, perform basic validation, and return a mock payload. Replace the internals with calls to your model/provider.

## License

MIT
