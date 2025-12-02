# 📊 Deligro - Quick Reference Structure

## 🎯 AT A GLANCE

```
┌─────────────────────────────────────────────────────────────┐
│                    DELIGRO STRUCTURE                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📁 app/                                                    │
│  ├── 🌐 (main)/          → Public pages (home, about)      │
│  ├── 🔐 (auth)/          → Login, signup                   │
│  ├── 👤 (user)/          → Profile, settings, orders       │
│  ├── 🛒 (ordering)/      → Order flow, cart, payment       │
│  ├── 👨‍💼 (admin)/         → Admin dashboard                  │
│  ├── 🏍️ (rider)/         → Rider dashboard                  │
│  ├── 📜 (legal)/         → Policies, terms                  │
│  │                                                          │
│  ├── 🧩 components/                                         │
│  │   ├── layout/        → Navbar, Footer                   │
│  │   ├── navigation/    → Menus, breadcrumbs               │
│  │   ├── ui/            → Buttons, cards, modals           │
│  │   ├── sections/      → Page sections (hero, features)   │
│  │   └── forms/         → Form components                  │
│  │                                                          │
│  ├── 📚 lib/            → Utils, firebase, constants        │
│  ├── 🏷️ types/          → TypeScript interfaces             │
│  ├── 🪝 hooks/          → Custom React hooks                │
│  └── 🌍 context/        → React Context providers           │
│                                                             │
│  📁 data/               → Restaurant data, categories       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗂️ COMPONENT CATEGORIES

### **Layout** (`components/layout/`)

```
Navbar.tsx          → Top navigation bar
Footer.tsx          → Bottom footer
MainLayout.tsx      → Wrapper layout
```

### **Navigation** (`components/navigation/`)

```
UserProfileMenu.tsx → User dropdown menu
ServicesMenu.tsx    → Services mega menu
```

### **UI Components** (`components/ui/`)

```
cards/
  ├── RestaurantCard.tsx    → Restaurant display card
  └── FeatureCard.tsx       → Feature highlight card

modals/
  └── LocationPopup.tsx     → Location selection modal

toggles/
  ├── ThemeToggle.tsx       → Light/dark mode toggle
  └── LiquidDarkModeToggle.tsx → Fancy theme toggle

buttons/
  ├── PrimaryButton.tsx     → Main action button
  └── SecondaryButton.tsx   → Secondary action button
```

### **Page Sections** (`components/sections/`)

```
home/
  ├── HeroSection.tsx           → Homepage hero
  ├── FeaturesSection.tsx       → Features grid
  ├── PopularRestaurants.tsx    → Restaurant showcase
  ├── WhyChooseUs.tsx           → Benefits section
  └── CustomerFeedback.tsx      → Testimonials

service/
  └── ServicesSection.tsx       → Services grid

order/
  ├── SearchSection.tsx         → Search & filters
  └── CategoriesSection.tsx     → Category browser
```

---

## 🎨 NAMING CHEAT SHEET

| Type            | Convention           | Example               |
| --------------- | -------------------- | --------------------- |
| **Component**   | PascalCase           | `RestaurantCard.tsx`  |
| **Utility**     | camelCase            | `formatPrice.ts`      |
| **Hook**        | use + PascalCase     | `useAuth.ts`          |
| **Context**     | PascalCase + Context | `AuthContext.tsx`     |
| **Type**        | PascalCase           | `Restaurant`          |
| **Folder**      | lowercase/kebab-case | `ui`, `page-sections` |
| **Route Group** | (lowercase)          | `(auth)`, `(main)`    |

---

## 🚦 IMPORT PATHS

### **Before (❌ Old)**

```typescript
import Navbar from "../../../components/Navbar";
import { restaurantsData } from "../data/restaurants";
import firebase from "./firebase";
```

### **After (✅ New)**

```typescript
import { Navbar } from "@/components/layout";
import { restaurantsData } from "@/data/restaurants";
import firebase from "@/lib/firebase";
```

---

## 📍 WHERE TO PUT NEW FILES?

### **Creating a new component?**

```
Is it reusable across pages?
  ├─ YES → components/ui/[category]/
  └─ NO  → components/sections/[page]/
```

### **Creating a new page?**

```
What type of page?
  ├─ Public page       → app/(main)/
  ├─ Auth page         → app/(auth)/
  ├─ User dashboard    → app/(user)/
  ├─ Order flow        → app/(ordering)/
  ├─ Admin             → app/(admin)/
  ├─ Rider             → app/(rider)/
  └─ Legal/Policy      → app/(legal)/
```

### **Creating a utility function?**

```
app/lib/utils.ts
```

### **Creating a TypeScript type?**

```
app/types/[domain].ts
```

### **Creating a custom hook?**

```
app/hooks/use[Name].ts
```

---

## 🔄 MIGRATION CHECKLIST

- [ ] Run `chmod +x migrate-structure.sh`
- [ ] Run `./migrate-structure.sh`
- [ ] Update `tsconfig.json` with path aliases
- [ ] Update all import statements
- [ ] Split `FoodiePage.tsx` into sections
- [ ] Test all pages
- [ ] Fix any broken imports
- [ ] Run `npm run build` to verify
- [ ] Commit changes

---

## 💡 QUICK TIPS

### **1. Use Barrel Exports**

```typescript
// components/ui/cards/index.ts
export { default as RestaurantCard } from "./RestaurantCard";
export { default as FeatureCard } from "./FeatureCard";

// Usage
import { RestaurantCard, FeatureCard } from "@/components/ui/cards";
```

### **2. Keep Components Small**

- Max 200 lines per component
- Single responsibility
- Extract repeated logic to hooks

### **3. Organize by Feature, Not File Type**

```
✅ GOOD:
components/
  ├── ui/cards/
  └── sections/home/

❌ BAD:
components/
  ├── tsx/
  └── css/
```

### **4. Use Path Aliases**

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/components/*": ["./app/components/*"],
      "@/lib/*": ["./app/lib/*"],
      "@/types/*": ["./app/types/*"],
      "@/data/*": ["./data/*"]
    }
  }
}
```

---

## 🎓 LEARNING PATH

1. **Week 1:** Understand route groups
2. **Week 2:** Master component organization
3. **Week 3:** Learn barrel exports
4. **Week 4:** Implement path aliases
5. **Week 5:** Refactor large components

---

## 📞 NEED HELP?

| Issue               | Solution                              |
| ------------------- | ------------------------------------- |
| Import errors       | Check path aliases in `tsconfig.json` |
| Component not found | Verify file moved correctly           |
| Build fails         | Check for circular dependencies       |
| Type errors         | Update type imports to `@/types`      |

---

**Keep this reference handy while migrating! 📌**
