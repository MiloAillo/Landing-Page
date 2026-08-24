# Performance Optimization Report

**Date:** 2026-08-24  
**Current Bundle Size:** 621.51 kB (200.82 kB gzipped)  
**Target Bundle Size:** 250-300 kB (estimated)  
**Estimated Improvement:** 50-60% reduction

---

## Executive Summary

The landing page has **significant performance issues** primarily due to:
1. **No code splitting** - all pages load upfront (621 kB)
2. **Large unoptimized images** - 2.5 MB with no lazy loading or WebP
3. **Heavy animation library** - Motion/React adds significant overhead
4. **Unused icon library** - FontAwesome loaded but only 1 icon used
5. **Missing React optimizations** - Excessive re-renders, no memoization

---

## Performance Metrics

### Current State
| Metric | Value |
|--------|-------|
| Initial JS Bundle | 621.51 kB |
| Gzipped JS | 200.82 kB |
| CSS Bundle | 38.20 kB |
| Public Assets | ~2.5 MB (images) |
| Total Page Weight | ~3.2 MB |

### Target State (After Optimizations)
| Metric | Value |
|--------|-------|
| Initial JS Bundle | 250-300 kB |
| Gzipped JS | 80-120 kB |
| CSS Bundle | 35-38 kB |
| Public Assets | 500-800 KB (optimized) |
| Total Page Weight | ~1.0-1.2 MB |

---

## Top Priority Optimizations

### 1. 🔴 Code Splitting with React.lazy() - CRITICAL
**Impact:** 40-60% initial bundle reduction  
**Effort:** Easy  
**Current Issue:** All pages (Page1-4) loaded on initial render

**Implementation:**
```typescript
// Before: src/App.tsx
import Page1 from './containers/Page1/page1.container'
import Page2 from './containers/Page2/page2-container'
import Page3 from './containers/Page3/page3.container'
import Page4 from './containers/Page4/page4.container'

// After:
const Page1 = lazy(() => import('./containers/Page1/page1.container'))
const Page2 = lazy(() => import('./containers/Page2/page2-container'))
const Page3 = lazy(() => import('./containers/Page3/page3.container'))
const Page4 = lazy(() => import('./containers/Page4/page4.container'))

// Wrap with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Page1 ... />
  <Page2 ... />
  <Page3 ... />
  <Page4 ... />
</Suspense>
```

**Expected Savings:** 250-350 kB initial JS

---

### 2. 🔴 Image Optimization - HIGH
**Impact:** 60-80% image size reduction (1.5-2 MB savings)  
**Effort:** Medium  
**Current Images:**
- `parallax.png` - 797.7 KB
- `geneight.png` - 748.4 KB
- `citylocator.png` - 451.3 KB
- Multiple SVGs and PNGs - no optimization

**Actions:**
1. Convert PNG/JPG to WebP format
2. Add lazy loading: `loading="lazy"`
3. Create responsive image sets with `srcset`
4. Consider CDN for backend-fetched images

**Expected Savings:** 1.5-2 MB

---

### 3. 🔴 Remove FontAwesome, Use Lucide - HIGH
**Impact:** 20-40 kB reduction  
**Effort:** Easy  
**Current Issue:** 3 FontAwesome packs imported, only 1 icon (`faLinkedin`) used

**Currently Using:**
- `@fortawesome/free-brands-svg-icons`
- `@fortawesome/free-regular-svg-icons`
- `@fortawesome/free-solid-svg-icons`
- Plus react wrapper

**Action:** Replace with Lucide (already in dependencies)

**Expected Savings:** 20-40 kB

---

### 4. 🟠 Debounce Resize Handler - MEDIUM
**Impact:** 15-30% runtime performance improvement  
**Effort:** Easy  
**Current Issue:** `src/App.tsx:51-64` - resize listener runs on EVERY resize event

```typescript
// Current: Fires hundreds of times during scroll
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
}, [])

// Fix: Add debounce
useEffect(() => {
  let timeoutId
  const handleResize = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => setWidth(window.innerWidth), 150)
  }
  window.addEventListener("resize", handleResize)
  return () => {
    clearTimeout(timeoutId)
    window.removeEventListener("resize", handleResize)
  }
}, [])
```

**Expected Improvement:** Reduced re-renders, smoother scrolling

---

### 5. 🟠 Consolidate Scroll Listeners - MEDIUM
**Impact:** 10-20% runtime improvement  
**Effort:** Medium  
**Current Issue:** Multiple `useScroll()` hooks create separate listeners

**Locations:**
- `Page1` - useScroll
- `Page2` - useScroll
- `Page3` - useScroll (x2)
- `App.tsx` - useScroll

**Fix:** Create scroll context or consolidate listeners

---

### 6. 🟠 Remove onUpdate Animation Dispatch - MEDIUM
**Impact:** Prevents layout thrashing  
**Effort:** Easy  
**Current Issue:** `src/App.tsx:82` - `onUpdate` fires on every animation frame

```typescript
// Current: Causes layout thrashing
transition={{
  type: "spring",
  damping: 20,
  onUpdate: () => window.dispatchEvent(new Event('resize'))
}}

// Fix: Remove or debounce
transition={{
  type: "spring",
  damping: 20
}}
```

---

### 7. 🔵 React Performance Optimizations - LOW
**Impact:** 5-15% runtime improvement  
**Effort:** Medium

**Missing:**
- No `React.memo()` on components
- No `useCallback()` for event handlers
- No `useMemo()` for expensive calculations

**Example Fix:**
```typescript
const Page2Content = memo(({ selectedTech, setTech, techData, ... }) => {
  const scrollFocus = useCallback((e) => {
    e.currentTarget.scrollIntoView({...})
  }, [])
  
  return (...)
})
```

---

## Implementation Roadmap

### Phase 1: Critical (Week 1)
- [ ] Code split pages with React.lazy()
- [ ] Remove FontAwesome, integrate Lucide
- [ ] Debounce resize handler
- [ ] Remove onUpdate animation dispatch

**Est. Impact:** 40% initial bundle reduction, 20% runtime improvement

### Phase 2: High (Week 2)
- [ ] Optimize and convert images to WebP
- [ ] Add lazy loading to images
- [ ] Consolidate scroll listeners

**Est. Impact:** 60% image size reduction, additional 10% runtime improvement

### Phase 3: Medium (Week 3)
- [ ] Self-host fonts or add font-display swap
- [ ] Add React.memo() to components
- [ ] Add useCallback() to handlers

**Est. Impact:** 5-10% FCP improvement, runtime smoothness

---

## Monitoring & Metrics

Track these metrics before and after optimizations:

1. **Bundle Metrics**
   - Initial JS size
   - CSS size
   - Total page weight

2. **Performance Metrics**
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)
   - Time to Interactive (TTI)

3. **Runtime Metrics**
   - Frame rate (60 FPS target)
   - Scroll smoothness
   - Animation jank

---

## Risk Assessment

| Optimization | Risk Level | Mitigation |
|--------------|-----------|-----------|
| Code splitting | Low | Test all pages load correctly |
| Image optimization | Low | Verify WebP browser support fallback |
| FontAwesome removal | Medium | Test all icons render |
| Debounce resize | Low | Test responsive breakpoints |
| Scroll consolidation | Medium | Test all animations still work |

---

## Summary

**Quick Wins (Easy, High Impact):**
1. Code split pages - 250-350 kB saved
2. Remove FontAwesome - 20-40 kB saved
3. Debounce resize - runtime smoothness
4. Remove onUpdate dispatch - eliminates layout thrashing

**Major Improvements (Medium Effort, Very High Impact):**
1. Image optimization - 1.5-2 MB saved
2. Consolidate scroll - 10-20% runtime improvement

**Polish (Lower Priority):**
1. React optimizations
2. Font optimization
3. CSS tree-shaking

**Total Potential Improvement:**
- Bundle size: 621 kB → 250-300 kB (60% reduction)
- Page weight: 3.2 MB → 1.0-1.2 MB (65% reduction)
- Runtime performance: 20-50% improvement
- LCP improvement: 30-50% faster
