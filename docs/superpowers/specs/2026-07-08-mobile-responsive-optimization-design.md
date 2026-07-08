# Mobile Responsiveness & Optimization

## Problem
- HeroSection "ZENITH BUILD" title overflows viewport on mobile due to `whitespace-nowrap` + aggressive clamp
- Hero.tsx description hidden on mobile (`hidden md:block`)
- All Kanit @font-face URLs point to the same 300-weight woff2 file
- SplineBackground backdrop-blur-2xl causes jank on mobile GPUs
- AboutDetail stat font sizes crowd on small screens

## Changes

### 1. Font Loading — `layout.tsx` + `globals.css`
Replace 6 broken @font-face blocks with `next/font/google`:
```tsx
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-kanit",
});
```
Apply via `kanit.variable` on `<html>`, reference `var(--font-kanit)` in `--font-sans`.

### 2. HeroSection.tsx
- Remove `whitespace-nowrap`, let "ZENITH" wrap above "BUILD" on mobile
- `.hero-title` clamp: `clamp(2.5rem, 15vw, 16rem)` instead of `clamp(3.5rem, 22vw, 16rem)`

### 3. Hero.tsx
- Description paragraph: `hidden md:block` → `hidden sm:block` so it appears on larger phones
- Remove `max-w-[200px]` constraint so text fills available space

### 4. SplineBackground.tsx
- Overlay blur: `backdrop-blur-xl sm:backdrop-blur-2xl` to reduce GPU load on mobile

### 5. AboutDetail.tsx
- Stat values: `text-4xl md:text-6xl` instead of `text-5xl md:text-6xl`
