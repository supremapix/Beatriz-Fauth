# Beatriz Fauth - Psicanalista Website

## Overview

This is a professional website for Beatriz Fauth, a psychoanalyst and psychologist based in Balneário Camboriú, Brazil (CRP 12/00649). The site serves as a digital presence showcasing her 30+ years of clinical experience, therapy services, and providing appointment scheduling functionality. Built as a single-page application with React, it features a modern, elegant design targeting potential therapy clients in the region. The content and images have been migrated from the original site at beatrizfauthpsicologa.com.br.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 19** with TypeScript as the core UI framework
- **Vite** as the build tool and development server (configured on port 5000)
- **React Router DOM** using HashRouter for client-side navigation across 5 main pages: Home, About (Sobre), Services (Serviços), Contact (Contato), and Blog

### Styling Approach
- **Tailwind CSS** loaded via CDN for utility-first styling
- Delicate, welcoming color palette:
  - `navy` (#5B8C8E): Primary teal-green color (calming)
  - `navy-dark` (#4A7C7E): Hover states
  - `text-navy` (#2D5759): Dark text color
  - `gold` (#c9a962): Accent color for highlights
  - `sand` (#F5F1ED): Light beige background
  - `cream` (#FAFAFA): Off-white backgrounds
  - `rose` (#E8D5D5): Soft pink accent
- **Google Fonts**: Cormorant Garamond (serif) for elegant headings, Inter (sans-serif) for body text
- Responsive design with mobile-first breakpoints
- CSS animations: fadeInUp, float animation, gentle pulse for CTAs
- IntersectionObserver for scroll reveal animations

### Component Structure
The application follows a standard React component hierarchy:
- `App.tsx` - Root component with routing configuration
- Layout components: `Navbar`, `Footer`, `FloatingWhatsApp`, `BackToTop`
- Page components in `/pages`: Home, About, Services, Contact, Blog
- Reusable components in `/components`: `ContactForm`, `SchedulingTool`

### Recent Design Updates (Dec 2025)
- **Cinematographic Hero Section**: Dark gradient background (#0F2027 to #2C5364) with animated gradient orbs
- **Typewriter Effect**: Custom React hook cycling through "cura, transformação, acolhimento, autoconhecimento"
- **Floating Particle System**: 20 particles with precomputed positions for stable CSS animations
- **Glass-Effect Floating Cards**: "Autoconhecimento" and "Bem-estar" cards with backdrop blur
- **Counter Animations**: "+30 anos" and "+1000 vidas" counters triggered by Intersection Observer
- **Shimmer Button Effects**: Gradient animation on CTAs with hover transforms
- **Scroll Indicator**: Animated mouse wheel indicator pointing to next section
- WhatsApp floating button with float animation and tooltip
- Back-to-top button that appears after scrolling
- Section reveal animations on scroll

### State Management
- Local component state using React hooks (`useState`, `useEffect`)
- No external state management library - application complexity doesn't require it
- Form state managed within individual components

### Routing Strategy
- HashRouter chosen for simpler deployment without server-side configuration
- Routes use Portuguese language paths (`/sobre`, `/servicos`, `/contato`)
- Hash-based navigation for in-page anchors (e.g., `/blog#duvidas`)

### Configuration Management
- Centralized constants in `constants.ts` for contact information, service definitions, and neighborhood data
- Environment variables handled through Vite's `loadEnv` for API keys (Gemini API key configured but not actively used in visible code)

## External Dependencies

### Third-Party Libraries
- **lucide-react**: Icon library for UI elements (Phone, Mail, MapPin, etc.)
- **react-router-dom**: Client-side routing

### External Services
- **WhatsApp Business API**: Multi-step scheduling form sends appointment details via WhatsApp using the `wa.me` URL scheme
- **Google Fonts**: Typography served via fonts.googleapis.com
- Local images in `/public/images/`: Logo and therapy service images from original site

### Social Media Integration
- Instagram and Facebook links configured in constants
- Open Graph meta tags for social sharing

### SEO & Structured Data
- JSON-LD structured data for Psychologist schema markup
- Meta tags for search engine optimization and social media previews

### CDN Dependencies
- Tailwind CSS loaded via cdn.tailwindcss.com (runtime compilation)