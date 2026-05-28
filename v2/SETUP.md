# NAVI Pro v2 - Setup Guide

## Deskripsi Proyek

NAVI Pro v2 adalah versi redesigned dari platform lead generation AI untuk seller Indonesia. Proyek ini menggabungkan inspirasi desain dari MinnaLearn dengan fungsionalitas core NAVI Pro.

### Perubahan Utama dari v1 ke v2

✨ **Desain**
- Estetika yang lebih clean dan modern (terinspirasi MinnaLearn)
- Color scheme: Cream background (#faf8f3) + Accent Blue (#0052cc)
- Typography yang lebih refined dengan font Onest
- Better spacing dan visual hierarchy

🏗️ **Arsitektur**
- Refactor komponen dengan structure yang lebih modular
- Improved responsive design untuk semua perangkat
- Cleaner component composition dan props management

🎨 **UI/UX**
- Navbar yang fixed dengan backdrop blur
- Hero section dengan visual yang lebih engaging
- Feature cards dengan hover effects yang subtle
- Pricing section dengan highlighted plan recommendation
- FAQ dengan accordion interaktif
- Footer yang comprehensive dengan social links

## File Structure

```
v2/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main landing page
│   │   ├── layout.tsx            # Root layout dengan metadata
│   │   └── globals.css           # Global styles & Tailwind
│   └── components/
│       ├── navbar.tsx            # Navigation dengan mobile menu
│       ├── hero.tsx              # Hero section dengan CTA
│       ├── features.tsx          # 6 feature cards dengan icons
│       ├── how-it-works.tsx      # 4-step process visualization
│       ├── pricing.tsx           # 3-tier pricing dengan comparison
│       ├── faq.tsx               # Interactive FAQ accordion
│       └── footer.tsx            # Footer dengan links & social
├── public/
│   └── robots.txt
├── Configuration files:
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript config
│   ├── tailwind.config.ts        # Tailwind dengan custom colors
│   ├── next.config.ts            # Next.js configuration
│   ├── postcss.config.mjs        # PostCSS with Tailwind
│   ├── .eslintrc.json            # ESLint configuration
│   ├── tsconfig.app.json         # App-level TS config
│   └── .env.example              # Environment variables template
└── Documentation:
    ├── README.md                 # Project overview
    └── SETUP.md                  # This file
```

## Color System

### Primary Colors
- **Background**: `#faf8f3` (Cream/Beige)
- **Foreground**: `#1a1a1a` (Dark Gray/Black)
- **Accent**: `#0052cc` (Bright Blue)
- **Accent Hover**: `#0041a8` (Darker Blue)

### Secondary Colors
- **Light Neutral**: `#f5f3ee`
- **Border**: `#e8e4dc`
- **Text Muted**: `#808080` (Tailwind opacity variations)

## Typography

- **Font Family**: Onest (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400), line-height: 1.6
- **Fallback**: System sans-serif

## Component Breakdown

### Navbar
- Fixed positioning dengan backdrop blur
- Logo + Brand name dengan icon
- Desktop navigation menu
- Mobile responsive dengan hamburger menu
- CTA buttons (Login + Demo Gratis)

### Hero Section
- Large headline: "Lead Generation Cerdas untuk Seller Indonesia"
- Feature badge dengan AI highlight
- 2 CTA buttons (Primary + Secondary)
- Stats showcase (5000+ sellers, 10M+ leads, 98% satisfaction)
- Placeholder untuk visual (dapat diganti dengan screenshot product)

### Features Section
- 6 fitur utama dalam grid 3 kolom
- Icon + Title + Description untuk setiap fitur
- Hover effects dengan border dan shadow changes
- Icons dari Lucide React

### How It Works Section
- 4 langkah proses dalam grid 4 kolom
- Numbered steps dengan connectors
- Card-based design dengan light styling
- Responsive untuk mobile (single column)

### Pricing Section
- 3 pricing tiers: Starter, Professional, Enterprise
- Professional tier highlighted sebagai recommended
- Feature comparison dengan checkmarks
- Flexible button styling sesuai tier

### FAQ Section
- Accordion component dengan expand/collapse
- ChevronDown icon dengan rotate animation
- CTA box di bawah dengan support options

### Footer
- 4-column layout (Company, Product, Company Info, Contact)
- Social media links (LinkedIn, Twitter, Instagram)
- Legal links (Privacy, Terms, Cookies)
- Responsive design untuk mobile

## How to Customize

### Mengubah Content
Edit file-file `.tsx` components dan ganti text sesuai kebutuhan:
- Component titles dan descriptions
- CTA button text dan links
- FAQ questions dan answers
- Footer information

### Mengubah Colors
Update di `tailwind.config.ts`:
```typescript
colors: {
  background: '#faf8f3',    // Change background
  foreground: '#1a1a1a',    // Change text color
  accent: '#0052cc',        // Change accent
}
```

### Mengubah Typography
Update di `globals.css`:
```css
@theme inline {
  --font-sans: 'YourFont', 'Fallback';
}
```

### Menambah Section Baru
1. Buat file baru di `src/components/`
2. Export component function
3. Import di `src/app/page.tsx`
4. Tambahkan ke main layout

## Development Workflow

### Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Hot Reload
Next.js otomatis reload ketika ada changes di file

### Build untuk Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML elements
- ARIA labels untuk interactive elements
- Proper color contrast ratios
- Responsive design untuk mobile

## Performance Tips

- Images dioptimasi dengan Next.js Image component (jika ditambahkan)
- CSS diminify otomatis oleh Tailwind
- Code splitting otomatis oleh Next.js

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
Bisa di-deploy ke platform apapun yang support Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- etc.

## Troubleshooting

### Port sudah terpakai
```bash
npm run dev -- -p 3001
```

### Module errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles tidak muncul
- Pastikan path di `tailwind.config.ts` sudah benar
- Restart dev server

## Next Steps

1. ✅ Setup project di local machine
2. ✅ Customize content (text, links, etc)
3. ✅ Tambahkan images dan branding
4. ✅ Setup analytics (Google Analytics, Vercel Analytics)
5. ✅ Configure email forms dan notifications
6. ✅ Setup API endpoints untuk demo requests
7. ✅ Testing dan optimization
8. ✅ Deploy ke production

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev/)
- [React Documentation](https://react.dev)

## Support

Untuk questions atau issues, hubungi development team atau buka GitHub issue.

---

Happy coding! 🚀
