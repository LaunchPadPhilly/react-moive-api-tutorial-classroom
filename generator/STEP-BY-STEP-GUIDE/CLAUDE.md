# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Home cooks struggle to find reliable recipes quickly, with information scattered across blogs with ads, pop-ups, and long backstories before the actual recipe.

**Tech Stack:**
- **Frontend:** React 18 + Next.js 14
- **Routing:** Next.js App Router
- **Data Fetching:** React Server Components + SWR
- **Styling:** CSS Modules / Tailwind CSS
- **Testing:** Jest + React Testing Library
- **Storage:** localStorage (client) + Database (server)

## Essential Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm run dev

# Production build
pnpm run build

# Run tests
pnpm run test

# Preview production build
pnpm run preview
```

## Architecture

```
app/  # App Router pages and layouts
components/  # Reusable UI components
lib/  # Utilities and API functions
public/  # Static assets
hooks/  # Custom React hooks
```

## Critical Requirements

- Follow CSS Modules / Tailwind CSS conventions
- Target beginner skill level
- Meet WCAG 2.1 AA standards
- Achieve Lighthouse scores: Performance ≥ 85, Accessibility ≥ 90

## API Integration

**Primary API:** Spoonacular API

**Integration Pattern:**
- React Server Components + SWR for server state
- Caching strategy: stale-while-revalidate
- Error handling: retry with exponential backoff
- Rate limiting: client-side throttling

## Development Milestones

1. **Milestone 1:** Project setup, routing, basic components
2. **Milestone 2:** Core feature implementation, API integration
3. **Milestone 3:** Advanced features, data persistence
4. **Milestone 4:** Testing, accessibility, performance, deployment

## Testing Guidelines

- Unit tests for hooks and utilities
- Component tests for UI components
- Integration tests for user flows
- Accessibility tests (keyboard nav, screen readers)
- Target coverage: ≥ 70%

## Common Patterns

See milestone guides for framework-specific patterns.

## Important Notes

- Always use pnpm for package management
- Follow CSS Modules / Tailwind CSS conventions (no mixing approaches)
- All interactive elements must have proper ARIA labels
- Respect `prefers-reduced-motion` for animations
- Images should use `loading="lazy"` attribute
