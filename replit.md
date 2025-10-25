# A Lapse Through Time

## Overview

A Lapse Through Time is an interactive web application that enables users to explore historical changes through cinematic visualizations and smooth animations. The project presents historical content through an immersive, storytelling-focused interface featuring interactive timelines, video content, and rich datasets spanning multiple eras. The application emphasizes a premium user experience with carefully crafted animations, generous spacing, and a modern purple-pink gradient aesthetic inspired by museum digital exhibits and immersive product pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR (Hot Module Replacement)
- React Router via Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with code splitting capabilities

**UI Component System**
- Radix UI primitives as the foundation for accessible, unstyled components
- shadcn/ui component library (New York style variant) for consistent design patterns
- Tailwind CSS for utility-first styling with custom design tokens
- Component architecture follows composition patterns with extensive use of forwardRef for flexibility

**Design System**
- Custom color system using HSL values with CSS variables for theme support
- Typography scale using Inter (sans-serif) and Playfair Display (serif) from Google Fonts
- Spacing primitives based on Tailwind's 4px base unit (4, 8, 12, 16, 20, 24, 32)
- Responsive grid system: single column mobile, 3-column desktop for feature cards
- Custom animation utilities (hover-elevate, active-elevate-2) for interactive feedback

**State Management**
- TanStack Query (React Query) for server state management and caching
- React Context for theme management (light/dark mode)
- Local component state with React hooks for UI interactions
- Custom hooks for scroll animations and responsive behavior

**Key Features**
- Scroll-based animations using Intersection Observer API
- Video player with custom controls (play/pause, mute/unmute, progress tracking)
- Theme switching between light and dark modes with localStorage persistence
- Smooth scroll navigation between page sections
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js running on Node.js with ESM (ES Modules) support
- HTTP server creation via Node's built-in `http` module
- Custom middleware for request logging with response time tracking
- Static file serving for attached assets (videos, images) with proper MIME type handling

**Development vs Production**
- Development: Vite middleware integration for HMR and dev server capabilities
- Production: Serves pre-built static assets from dist/public directory
- Environment-based configuration via NODE_ENV variable

**Data Layer**
- In-memory storage implementation (MemStorage class) as default
- Interface-based storage abstraction (IStorage) allowing easy swapping to database implementations
- User management with basic CRUD operations (getUser, getUserByUsername, createUser)
- UUID generation for user IDs using Node's crypto module

**API Architecture**
- RESTful endpoint structure (all API routes prefixed with /api)
- JSON request/response handling with body parsing middleware
- Session management capabilities via connect-pg-simple (PostgreSQL session store)
- Static asset serving with caching headers (1-day max-age)

### Database Schema

**ORM & Migration System**
- Drizzle ORM configured for PostgreSQL dialect
- Neon Database serverless driver (@neondatabase/serverless) for database connections
- Schema defined in TypeScript with type inference
- Migration files generated to ./migrations directory
- Drizzle Kit for schema management and migrations

**Current Schema**
- Users table with fields: id (UUID primary key), username (unique text), password (text)
- Zod schema integration via drizzle-zod for runtime validation
- Type-safe insertions and selections with TypeScript inference

**Design Considerations**
- Schema extensible for historical content, timelines, and datasets
- Currently minimal user system - likely placeholder for future authentication
- No active session or authentication implementation in current codebase
- Database URL required via environment variable (DATABASE_URL)

## External Dependencies

### Third-Party Services
- **Google Fonts**: Typography delivery for Inter and Playfair Display fonts
- **Neon Database**: Serverless PostgreSQL hosting (configured but may not be actively used)

### Key Libraries
- **React Ecosystem**: React, React DOM, TanStack Query for data fetching
- **UI Components**: Extensive Radix UI component primitives (accordion, dialog, dropdown, navigation, etc.)
- **Styling**: Tailwind CSS, class-variance-authority for component variants, clsx for conditional classes
- **Form Handling**: React Hook Form with Hookform Resolvers, Zod for validation
- **Utilities**: date-fns for date manipulation, nanoid for ID generation, embla-carousel-react for carousels
- **Development**: Replit-specific plugins for dev banner, cartographer, and runtime error handling

### Build & Development Tools
- **TypeScript**: Type checking and compilation
- **Vite**: Build tool with plugin ecosystem (@vitejs/plugin-react)
- **PostCSS**: CSS processing with Autoprefixer
- **Drizzle Kit**: Database schema management
- **esbuild**: Server-side bundling for production

### Asset Management
- Static assets stored in attached_assets directory
- Video files served with proper Content-Type and Accept-Ranges headers for streaming
- Build output to dist/public for client assets, dist for server bundle