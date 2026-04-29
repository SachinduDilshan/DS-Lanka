# Nexin — Creative Digital Agency Website

A pixel-perfect recreation of the **Nexin Home Three** template built with **Next.js 14**, **Tailwind CSS**, and **Firebase**.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** | App Router, SSR, Image optimisation |
| **Tailwind CSS** | Utility-first styling + custom design tokens |
| **Firebase** | Firestore (contact form), Auth, Storage |
| **TypeScript** | Full type safety |
| **React Icons** | Icon library (FontAwesome, etc.) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Home page (assembles all sections)
│   └── globals.css       # Global styles, CSS utilities
├── components/
│   ├── Navbar.tsx        # Sticky responsive navbar
│   ├── Hero.tsx          # Hero with floating cards & gradient headline
│   ├── Marquee.tsx       # Animated brand ticker
│   ├── About.tsx         # About split layout
│   ├── Services.tsx      # 6-card services grid
│   ├── Stats.tsx         # Animated number counters
│   ├── Portfolio.tsx     # Filterable project gallery
│   ├── Process.tsx       # 4-step workflow
│   ├── Team.tsx          # Team member cards
│   ├── Testimonials.tsx  # Auto-rotating testimonials
│   ├── Blog.tsx          # Latest posts grid
│   ├── Contact.tsx       # Firebase contact form
│   └── Footer.tsx        # Full footer with CTA band
└── lib/
    └── firebase.ts       # Firebase initialisation
```

---

## ⚡ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

Copy `.env.example` to `.env.local` and fill in your Firebase project credentials:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Set up Firestore

In your Firebase Console:
1. Go to **Firestore Database** → Create database
2. Add the following security rule to allow contact form writes:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{doc} {
      allow create: if true; // or add rate-limiting as needed
    }
  }
}
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#6C63FF` | CTAs, accents, highlights |
| `accent` | `#FF6B35` | Gradient pairs, warm accents |
| `dark` | `#0A0A0F` | Page background |
| `dark-card` | `#1E1E28` | Card backgrounds |
| `muted` | `#8888A0` | Body text, labels |

### Fonts
- **Syne** (headings) — Bold, geometric display font
- **DM Sans** (body) — Clean, readable body copy

### Key CSS Utilities
- `.reveal` — Scroll-triggered fade-up animation
- `.btn-primary` / `.btn-outline` — Button variants
- `.tag` — Category badge
- `.glow-ring` — Purple glow border effect

---

## 📦 Build & Deploy

```bash
npm run build
npm run start
```

Deploy to **Vercel** (recommended):

```bash
npx vercel
```

Set your Firebase environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## 📸 Sections Overview

1. **Navbar** — Fixed, transparent → blurred on scroll, mobile hamburger menu
2. **Hero** — Full-screen with animated floating cards, gradient headline, social proof
3. **Brand Marquee** — Infinite scrolling ticker
4. **About** — Split layout with image, features and experience badge
5. **Services** — 6-card grid with hover gradient effects
6. **Stats** — Animated count-up numbers (triggered on scroll)
7. **Portfolio** — Filterable project gallery with category tabs
8. **Process** — 4-step workflow with connecting line
9. **Team** — Member cards with social link hover overlay
10. **Testimonials** — Auto-rotating carousel with dot navigation
11. **Blog** — Latest posts with author info
12. **Contact** — Firebase-powered form with real-time status feedback
13. **Footer** — CTA band + links grid + social icons

---

## 🔧 Customisation

- **Content**: Update data arrays in each component file
- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Fonts**: Swap font imports in `src/app/layout.tsx`
- **Firebase**: Extend `src/lib/firebase.ts` for Auth or Storage features
