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
- Custom color palette matching original beatrizfauthpsicologa.com.br:
  - `navy` (#1a5d4a): Primary green/teal color for headers, buttons
  - `gold` (#c9a962): Accent color for highlights
  - `sand` (#f8f9f8): Light background color
  - `teal-900` (#145a48): Hover states
- **Google Fonts**: Lora (serif) for headings, Montserrat (sans-serif) for body text
- Responsive design with mobile-first breakpoints

### Component Structure
The application follows a standard React component hierarchy:
- `App.tsx` - Root component with routing configuration
- Layout components: `Navbar`, `Footer`, `FloatingWhatsApp`
- Page components in `/pages`: Home, About, Services, Contact, Blog
- Reusable components in `/components`: `ContactForm`, `SchedulingTool`

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