# Luma — Learning Platform

Responsive landing page built from the Buzzvel Figma design.

## Tech stack

- Next.js App Router
- React 19 and TypeScript
- Tailwind CSS 4
- `next/font` and `next/image`
- Storybook 10 and Playwright

## Getting started

Requires Node.js compatible with the installed Next.js version and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev              # Development server
npm run build            # Production build
npm start                # Production server
npm run lint             # ESLint
npm run typecheck        # TypeScript
npm run storybook        # Storybook at http://localhost:6006
npm run build-storybook  # Build Storybook
npm run test-storybook   # Run interaction tests
```

To run Storybook interaction tests, install the Playwright browser first:

```bash
npx playwright install chromium
```

Start Storybook in one terminal with `npm run storybook`, then run `npm run test-storybook` in another.

## Notes

- The page uses the Next.js App Router. Most sections are Server Components; the header is a Client Component for the mobile menu.
- Sections and shared UI are split into reusable components. Images exported from Figma are stored in `public/images-updated`.
- Layouts are responsive across mobile, tablet and desktop.

## Time spent

Approximately 20 hours.

## AI tools

ChatGPT was used for code review, debugging, Figma comparison and documentation. Changes were reviewed against the design and project code.
