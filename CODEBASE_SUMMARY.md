# EquitasApex Website - Codebase Summary

## Overview
Multi-page React website for EQUITAS CAPITAL APEX FIDUCIA - a sovereign wealth architecture firm.

## Tech Stack
- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 7.13.0
- **Styling**: Tailwind CSS v4.1.18
- **Build Tool**: Vite 7.3.1
- **Fonts**: Cinzel, Playfair Display (serif) & Montserrat (sans-serif)

## Project Structure
```
src/
├── components/     # 16 React components (57.6KB total)
├── pages/         # 5 page components (43.4KB total)
├── assets/        # Static assets folder
├── App.jsx        # Main app with routing setup
├── main.jsx       # React entry point
├── index.css      # Tailwind v4 + custom theme
└── App.css        # Additional styles
```

## Pages (5)
- **Home** - Landing with all premium components
- **ServicesPage** - Detailed services overview
- **AboutPage** - Company story & mission
- **ContactPage** - Contact form & information
- **ClientPortal** - Secure client login interface

## Components (16)
### Core Components
- Header, Footer, Hero, Services, About, Contact

### Premium Components (10)
- TrustIndicators - Partner logos
- ProcessTimeline - 4-step wealth journey
- FeaturedIn - Publications list
- Testimonials - Client quotes carousel
- MarketInsights - Blog preview section
- IBCalculator - Infinite banking calculator
- FAQAccordion - Expandable Q&A
- GlobalReach - World map & jurisdictions
- SecurityCredentials - Trust badges
- ConsultationCTA - Call-to-action banner

## Brand Identity
- **Colors**: Midnight Navy (#0A2463), Burnished Gold (#C5A059), Slate Grey (#708090), Off-White (#FDFCF0)
- **Typography**: Serif fonts for headers, sans-serif for body
- **Icons**: Replaced emojis with diamond (◆) and bullet (●) symbols

## Key Features
- Responsive design with mobile navigation
- Multi-page routing with React Router
- Custom Tailwind v4 theme configuration
- Component-based architecture
- Premium financial services presentation

## Total Files
- **Source files**: 23 (React components + CSS + HTML)
- **Dependencies**: 8 production + 8 dev packages
- **Total source code**: ~101KB
