# NAVI Pro - AI-Powered Lead Generation Platform

A cutting-edge lead generation automation platform designed specifically for Indonesian sellers. NAVI Pro uses advanced AI and intelligent routing to discover, qualify, and engage potential customers across multiple channels.

## Overview

NAVI Pro is a modern web application built with Next.js, TypeScript, and Tailwind CSS that provides Indonesian e-commerce sellers with an automated lead generation system. The platform automates the entire customer discovery and engagement pipeline, from scraping and enriching data to scoring leads and sending personalized messages across multiple channels.

## Key Features

### Core Capabilities
- **Automated Lead Scraping** - Intelligently gather potential customer data from multiple sources
- **Data Enrichment** - Enrich lead information with additional context and behavioral data
- **AI-Powered Lead Scoring** - Automatically score and prioritize leads based on conversion potential
- **URL Generation** - Generate custom tracking URLs for campaign analytics
- **Message Composition** - AI-driven message templates optimized for each channel
- **Multi-Channel DM Management** - Send messages across WhatsApp, Telegram, Instagram, and Email simultaneously
- **Real-Time Dashboard** - Monitor campaign performance and lead metrics in real-time
- **Pipeline Visualization** - Interactive demo showing the complete lead generation workflow

### Advanced Features
- **Category-Based Solutions** - Tailored solutions for different seller types (Fashion, Electronics, F&B, etc.)
- **Lead Analytics & Reporting** - Comprehensive analytics on lead quality, conversion rates, and ROI
- **Template Management** - Pre-built and custom message templates for different industries
- **Pricing Tiers** - Flexible plans for startups, SMEs, and enterprises
- **RESTful API** - Full API access for integration with existing tools

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Component Library**: shadcn/ui (Radix UI)
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

### Backend & Database
- **Server**: Next.js API Routes
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js
- **ORM**: Prisma

### Development Tools
- **Package Manager**: Bun / npm / pnpm / yarn
- **Build Tool**: Turbopack
- **Linting**: ESLint
- **Type Checking**: TypeScript

## Project Structure

```
naviproweb/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles & CSS variables
│   │   └── api/                # API routes
│   ├── components/             # Reusable React components
│   │   ├── navbar.tsx          # Navigation header
│   │   ├── hero.tsx            # Hero section
│   │   ├── features.tsx        # Features showcase
│   │   ├── pricing.tsx         # Pricing section
│   │   ├── testimonials.tsx    # Social proof
│   │   ├── about.tsx           # About section
│   │   ├── solutions.tsx       # Category solutions
│   │   ├── contact-channels.tsx # Contact methods
│   │   ├── pipeline.tsx        # Pipeline flow
│   │   ├── cta.tsx             # Call-to-action section
│   │   └── footer.tsx          # Footer
│   └── lib/                    # Utility functions
├── public/
│   ├── demo.html               # Interactive demo page
│   └── [other assets]
├── prisma/
│   └── schema.prisma           # Database schema
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json

```

## Getting Started

### Prerequisites
- Node.js 18+ (or Bun 1.0+)
- npm / pnpm / yarn / bun
- PostgreSQL database (or similar)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bangnevgo/naviproweb.git
   cd naviproweb
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/navipro"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Optional: API Keys for integrations
   ```

4. **Set up the database**
   ```bash
   npm run db:generate  # Generate Prisma client
   npm run db:push     # Push schema to database
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

## Available Scripts

```bash
# Development
npm run dev                 # Start development server with logging

# Building
npm run build              # Build for production
npm start                  # Start production server

# Database
npm run db:generate        # Generate Prisma client
npm run db:push           # Push schema to database
npm run db:migrate        # Run migrations
npm run db:reset          # Reset database (⚠️ removes all data)

# Code Quality
npm run lint              # Run ESLint
```

## Features Documentation

### 1. Landing Page (`/`)
The landing page showcases NAVI Pro's capabilities with:
- **Hero Section**: Engaging introduction with CTAs
- **Features**: 6-step pipeline visualization showing the automation workflow
- **Solutions**: Category-based solutions for different seller types
- **Pricing**: Flexible pricing tiers with monthly/yearly options
- **Testimonials**: Customer success stories and ratings
- **About**: Company vision and team information
- **Contact Channels**: Direct ways to reach support
- **Call-to-Action**: Final conversion opportunity

### 2. Interactive Demo (`/demo.html`)
A fully interactive demo showcasing the platform in action:
- **Pipeline Simulation**: Real-time visualization of the lead generation process
- **Dashboard Preview**: Sample dashboard with leads, pipeline, messages, and analytics
- **Performance Metrics**: Mock data showing typical results
- **Message Composer**: Example of the DM composition interface

**Recent UI/UX Improvements:**
- Enhanced button animations with pulsing glow effects
- Animated pipeline flow connectors with visual feedback
- Interactive simulator with spinning border and progress indicators
- Improved tab navigation with underline style indicators
- Mobile-responsive hamburger menu with smooth animations
- Loading state indicators for all interactive elements
- Better accessibility with ARIA labels and keyboard navigation
- Scroll-triggered navbar styling changes
- Progressive enhancement with smooth transitions throughout

### 3. Color System
All colors are now unified through CSS variables in `globals.css`:
- **Primary Colors**: `--color-primary` (main brand color)
- **Accent Colors**: `--accent-cyan`, `--accent-indigo`, `--accent-green`
- **Neutrals**: `--text-primary`, `--text-secondary`, `--text-tertiary`
- **Backgrounds**: `--bg-primary`, `--bg-secondary`, `--bg-card`
- **Borders**: `--border-color`, `--border-glow`

This ensures consistent branding and makes theme changes easy across the entire application.

## Development Guidelines

### Component Best Practices
- Keep components focused and single-responsibility
- Use TypeScript for type safety
- Implement proper error handling and loading states
- Use semantic HTML for accessibility
- Follow the component naming conventions

### Styling Approach
1. **Tailwind First**: Use Tailwind utility classes for most styling
2. **CSS Variables**: Use theme tokens for colors and spacing
3. **CSS Modules**: For complex, scoped styling if needed
4. **Responsive Design**: Mobile-first approach with responsive prefixes

### Adding New Features
1. Create components in `src/components/`
2. Add types in `src/lib/types.ts`
3. Update the database schema if needed
4. Create API routes in `src/app/api/`
5. Add tests for critical functionality

## Database Schema

The project uses Prisma with a modular schema. Key models include:
- **User**: User accounts and authentication
- **Lead**: Potential customer information
- **Campaign**: Lead generation campaigns
- **Channel**: DM channel configurations (WhatsApp, Telegram, etc.)
- **Message**: Sent messages and responses

Run `npm run db:generate` to view the full schema.

## Performance Optimizations

- **Server-Side Rendering**: Using Next.js App Router for optimal performance
- **Image Optimization**: Sharp integration for automatic image optimization
- **CSS Variable System**: Single source of truth for styling
- **Lazy Loading**: Components load only when needed
- **Caching Strategy**: Optimized for production deployments

## Security Considerations

- **Environment Variables**: Sensitive data in `.env.local` (never committed)
- **NextAuth.js**: Secure session management and authentication
- **TypeScript**: Type safety prevents common vulnerabilities
- **Input Validation**: Zod validation on all forms
- **CSRF Protection**: Built-in Next.js protection

## Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub
git push origin code-improvement

# Create a Pull Request
# Once merged, Vercel will auto-deploy

# Or deploy directly:
vercel --prod
```

### Manual Deployment
```bash
npm run build
npm start
```

## Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## Code Style

- **Formatting**: Follow the project's ESLint configuration
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Comments**: Write meaningful comments for complex logic
- **Commits**: Use conventional commit messages (feat:, fix:, refactor:, etc.)

## Recent Improvements (v0.2.0)

### Styling Consolidation
- Replaced all hardcoded colors with CSS variables
- Updated 10+ components for consistent theming
- Improved color system with semantic naming

### Demo Page Enhancements
- Enhanced button animations with pulsing glow effects
- Improved pipeline flow visualization with animated connectors
- Added interactive simulator with better visual feedback
- Implemented smooth tab transitions with underline indicators
- Added mobile-responsive hamburger menu
- Improved loading states and progress indicators
- Better accessibility with ARIA labels
- Navbar scroll effects for dynamic behavior

## Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Find and kill the process
lsof -i :3000
kill -9 <PID>
# Or use a different port
npm run dev -- -p 3001
```

**Database connection errors**
```bash
# Check DATABASE_URL in .env.local
# Ensure PostgreSQL is running
npm run db:push  # Sync schema
```

**Build failures**
```bash
npm run lint     # Check for errors
rm -rf .next     # Clear build cache
npm run build    # Rebuild
```

## API Documentation

### Endpoints

#### Leads
- `GET /api/leads` - Fetch all leads
- `POST /api/leads` - Create new lead
- `GET /api/leads/:id` - Get lead details
- `PUT /api/leads/:id` - Update lead
- `DELETE /api/leads/:id` - Delete lead

#### Campaigns
- `GET /api/campaigns` - List campaigns
- `POST /api/campaigns` - Create campaign
- `GET /api/campaigns/:id/stats` - Campaign statistics

#### Messages
- `POST /api/messages` - Send message
- `GET /api/messages/:id` - Get message details

## Support

- **Documentation**: Check the README sections above
- **GitHub Issues**: Report bugs and request features
- **Email**: Contact through the website contact form
- **Demo Page**: Visit `/demo.html` to see the platform in action

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)
- Database with [Prisma](https://prisma.io)

---

**Last Updated**: May 2026  
**Version**: 0.2.0  
**Branch**: code-improvement

For the latest updates and discussions, visit the [GitHub repository](https://github.com/bangnevgo/naviproweb).
