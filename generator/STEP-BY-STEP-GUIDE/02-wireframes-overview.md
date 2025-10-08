# Wireframes Overview

This document describes the visual design and user interface patterns for the Recipe Sharing App.

## Design Principles

1. **Mobile-First:** Design starts at 320px width, progressively enhanced
2. **Accessibility:** WCAG 2.1 AA compliance from the start
3. **Performance:** Optimize for fast loading and smooth interactions
4. **Simplicity:** Clean, uncluttered interface focusing on core features

## Page Layouts

### 1. Home/Search Page
- Search input at top
- Results grid (responsive: 2 → 3 → 4 → 5 columns)
- Loading skeleton during fetch
- Empty state when no results

### 2. Detail Page
- Header with poster/image
- Key information prominently displayed
- Action buttons (favorites, share)
- Related items section

### 3. favorites Page
- Grid layout matching search page
- Empty state with call-to-action
- Filters and sorting options

## Responsive Breakpoints

- **Mobile:** 320px - 639px (2 columns)
- **Tablet:** 640px - 767px (3 columns)
- **Desktop:** 768px - 1023px (4 columns)
- **Large:** 1024px+ (5 columns)

## Color Palette

- Primary: #3b82f6 (blue)
- Background: #f9fafb (light gray)
- Text: #111827 (dark gray)
- Error: #ef4444 (red)
- Success: #10b981 (green)

## Typography

- Font Family: System font stack
- Base Size: 16px
- Headings: 700 weight
- Body: 400 weight
- Line Height: 1.6

*See img/ directory for visual wireframes*
