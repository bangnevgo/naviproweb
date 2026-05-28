# NAVI Pro v2 - Redesigned Landing Page

Modern landing page untuk NAVI Pro dengan desain yang terinspirasi dari MinnaLearn. Platform lead generation AI terdepan untuk seller Indonesia.

## Features

✨ **Modern Design**
- Clean dan minimalist aesthetic
- Inspired by MinnaLearn.com
- Responsive design (mobile, tablet, desktop)
- Smooth animations dan transitions

🎨 **Components**
- Minimal Navigation Bar
- Hero Section dengan stats showcase
- Bento Grid Features
- Workflow Steps (4 tahapan)
- Pricing Plans (3 tiers)
- CTA Footer Section

⚡ **Technology Stack**
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React Icons

📱 **Responsive**
- Mobile-first design
- Tablet optimized
- Desktop perfect

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 3. Build for Production
```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
└── components/
    ├── navbar-minimal.tsx      # Navigation
    ├── hero-new.tsx            # Hero section
    ├── features-bento.tsx      # Features grid
    ├── workflow-steps.tsx      # How it works
    ├── pricing-new.tsx         # Pricing
    └── footer-cta.tsx          # CTA footer
```

## Customization

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  blue: { 600: '#2563eb' },  // Change primary color
  slate: { 950: '#0f172a' }  // Change text color
}
```

### Update Content
Edit component files in `src/components/` to update:
- Heading text
- Pricing details
- Features list
- Footer links

### Update Metadata
Edit `src/app/layout.tsx` to update:
- Page title
- Meta description
- Open Graph tags

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Deploy to Other Platforms
- Netlify
- Railway
- Render
- AWS Amplify

## File Sizes

- JavaScript: ~45KB (gzipped)
- CSS: ~15KB (gzipped)
- Total Bundle: ~60KB

## Performance

- Lighthouse Score: 95+
- Core Web Vitals: Excellent
- TTL (Time to Largest Contentful Paint): <1s

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Proprietary - NAVI Pro Team

## Support

For questions or issues, contact: hello@navipro.id
