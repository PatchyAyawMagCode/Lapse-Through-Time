# Design Guidelines: A Lapse Through Time

## Design Approach & Philosophy

**Selected Approach:** Hybrid Reference + Custom
- Primary inspiration: Immersive storytelling experiences (Apple Events, Stripe product pages, museum digital exhibits)
- Modern gradient aesthetics with purple-pink color palette
- Focus on smooth, cinematic user experience with deliberate pacing
- Timeline interaction draws from interactive documentary interfaces

**Core Principles:**
- Cinematic immersion: Each section should feel like entering a new chapter
- Purposeful motion: Animations enhance storytelling, never distract
- Content breathing room: Generous spacing creates anticipation
- Visual hierarchy through scale and proximity rather than color alone

## Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, modern sans-serif for UI elements and body text
- Display: 'Playfair Display' (Google Fonts) - Elegant serif for hero title and section headers, conveying historical gravitas

**Type Scale:**
- Hero Title: 4xl to 6xl (responsive), font-weight 700, Playfair Display
- Section Headers: 3xl to 4xl, font-weight 600, Playfair Display  
- Feature Card Titles: xl to 2xl, font-weight 600, Inter
- Body Text: base to lg, font-weight 400, Inter, line-height relaxed (1.7)
- Buttons/CTAs: base to lg, font-weight 500, Inter, letter-spacing wide

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (mobile), py-32 (desktop)
- Card spacing: p-8 to p-12
- Element gaps: gap-8 standard, gap-12 for larger breakpoints
- Container max-width: max-w-7xl for full sections, max-w-6xl for content

**Grid Structure:**
- Hero: Single column, centered, full-viewport approach
- Feature cards: Single column (mobile), 3-column grid (lg: grid-cols-3) desktop
- Video section: Full-width container with constrained aspect ratio
- CTA section: Centered single column with max-w-4xl

**Viewport Strategy:**
- Hero section: 85vh minimum, allows natural scroll discovery
- Content sections: Natural height based on content
- Video section: 16:9 aspect ratio with max-height constraints
- All sections flow naturally without forced viewport heights

## Component Library

### Navigation Header
- Fixed position with backdrop blur effect
- Logo/title left-aligned, navigation links right-aligned
- Light/dark mode toggle as icon button (far right)
- Height: h-20, subtle border-bottom in light mode
- Links: "Home", "Timeline", "Explore" with smooth scroll anchoring

### Hero Section
- Full-width gradient background (purple-pink diagonal gradient)
- Centered content with title, subtitle, dual CTAs
- Buttons: "Start Exploring" (primary solid with backdrop blur), "Learn More" (outline/ghost)
- Button styling: Rounded-full, px-8, py-3, backdrop-blur-md for solid button
- No hero image - gradient serves as immersive backdrop
- Floating animation for title (subtle vertical movement)

### Feature Cards
- Card container: Rounded-2xl, p-8, backdrop-blur-sm with subtle border
- Icon area: mb-6, large icon from Heroicons (outline style)
- Title: text-2xl, font-semibold, mb-4
- Description: text-base, opacity-80, leading-relaxed
- Hover state: Lift effect (transform translateY), increased shadow, subtle scale
- Cards arranged in 3-column grid (desktop), stack on mobile

### Video Section
- Full-width container with dark/gradient background
- Video player: aspect-video, rounded-xl, max-w-6xl centered
- Controls: Custom controls overlay (play/pause, timeline scrubber, volume, fullscreen)
- Caption/title above video: text-3xl, mb-8
- Video autoplay on scroll trigger (muted), loop enabled

### Timeline Component (Interactive)
- Horizontal scrolling timeline on desktop, vertical on mobile
- Timeline markers: Circular nodes with year labels
- Active node: Enlarged, pulsing glow effect
- Connection lines: Gradient stroke between nodes
- Content cards appear on node hover/click
- Sticky position during scroll for context

### CTA Section
- Full-width gradient background (matches brand gradient)
- Centered heading (text-4xl) and button
- Button: Large (px-10 py-4), rounded-full, with arrow icon
- Minimal content for focus on action

### Footer
- Full-width, py-16, subtle background
- Three columns: About (brief description), Quick Links (navigation), Social
- Social icons: Heroicons, hover scale effect
- Copyright centered at bottom

## Animations & Interactions

**Scroll-Triggered Animations:**
- Fade-in: Elements fade up (translateY and opacity) as they enter viewport
- Stagger effect: Feature cards animate sequentially with 100ms delay
- Video auto-play: Starts when 50% visible, pauses when out of view
- Timeline progression: Active state follows scroll position

**Micro-interactions:**
- Button hover: Subtle scale (1.05), increased shadow
- Card hover: translateY(-8px), shadow expansion
- Link hover: Underline animation from left to right
- Toggle switch: Smooth slide transition for theme change

**Page Transitions:**
- Smooth scroll behavior: CSS scroll-behavior smooth
- Section transitions: 0.6s ease-in-out for opacity changes
- Theme toggle: 0.3s transition for all color properties

**Performance Notes:**
- Use transform and opacity for animations (GPU-accelerated)
- Intersection Observer API for scroll-triggered effects
- RequestAnimationFrame for timeline scrubbing smoothness
- Minimal use of animation libraries - prefer CSS and vanilla JS

## Images

**Hero Section:** No image - gradient background provides visual impact

**Feature Cards:** 
- Icon-based (Heroicons): Clock icon (Timeline), Sparkles icon (Animations), Database icon (Content)
- No photographic images needed

**Video Section:**
- Primary asset: Timelapse video file (YTDown.com_YouTube_1-5-YEARS-4-minutes...)
- Poster frame: Extract first frame or create custom gradient frame matching brand
- Fallback: Gradient placeholder during load

**Optional Enhancement Images:**
- Historical imagery: Could add subtle background patterns or textures in timeline component
- Decorative elements: Abstract geometric shapes or gradient orbs for visual interest in CTA section

**Image Treatment:**
- All images: Rounded corners (rounded-xl minimum)
- Overlay gradients on video for text readability
- Lazy loading for all media assets

## Responsive Behavior

**Breakpoints:**
- Mobile: base (< 768px) - Single column, stacked elements
- Tablet: md (768px) - 2-column grids where applicable
- Desktop: lg (1024px+) - Full multi-column layouts

**Typography Scaling:**
- Hero title: text-4xl (mobile) → text-6xl (desktop)
- Section headers: text-3xl → text-4xl
- Body text remains consistent (base to lg)

**Component Adaptations:**
- Navigation: Hamburger menu (mobile), full menu (desktop)
- Feature grid: Stack (mobile) → 3-column (desktop)
- Timeline: Vertical scroll (mobile) → Horizontal (desktop)
- Video: Full-width with padding (mobile) → Contained width (desktop)

This design creates a cinematic, immersive experience that honors historical content while feeling thoroughly modern and engaging.