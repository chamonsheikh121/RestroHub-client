# RestroHub - Restaurant Management System

A comprehensive SaaS platform for managing restaurant operations. Built with React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Clone and setup
git clone <repo-url>
cd zest-restro-app-main
npm install

# Run development server
npm run dev
```

Application runs on `http://localhost:8082`

**Demo:** Use the Demo Login button on the login page for instant access.

---

## Features

### Core Operations
- **POS System** - Fast checkout with multiple order types (dine-in, takeaway, online)
- **Menu Management** - Complete CRUD for menu items with categories and pricing
- **Table Management** - Visual table layout with status tracking
- **Staff Management** - Team member management with role-based access
- **Order Tracking** - Real-time order status and history

### Business Intelligence
- **Analytics Dashboard** - Revenue trends, order statistics, and performance metrics
- **Reporting** - Sales analytics, top items, order type distribution
- **Print Receipts** - Formatted receipts with itemized details

### Additional Features
- Full authentication system (login, signup, password recovery)
- Dark/Light mode support
- Fully responsive design
- Tax & currency configuration
- Business profile settings

---

## Installation

### Requirements
- Node.js 16+
- npm, yarn, or bun

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file (.env.local)
VITE_APP_NAME=RestroHub
VITE_TAX_RATE=0.08
VITE_CURRENCY=USD

# 3. Start development server
npm run dev
```

### Build for Production
```bash
npm run build      # Creates optimized build in 'dist' folder
npm run preview    # Preview production build locally
```

---

## Project Pages

### Public
- `/` - Landing page
- `/features` - Feature showcase
- `/pricing` - Pricing tiers
- `/about` - Company info
- `/contact` - Contact form

### Authentication
- `/login` - User login
- `/signup` - New user registration
- `/forgot-password` - Password recovery
- `/reset-password` - Reset password

### Dashboard
- `/dashboard` - Main business overview
- `/pos` - Point of sale system
- `/orders` - Order management
- `/menu` - Menu item management
- `/tables` - Table management
- `/staff` - Staff management
- `/reports` - Business analytics
- `/settings` - Business configuration

---

## Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Run tests
npm test
```

---

## Deployment

### Vercel
```bash
npx vercel
```

### Netlify
```bash
netlify deploy --prod --dir=dist
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
```

---

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Charts:** Recharts
- **Build:** Vite

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Common Issues

**Port 8082 in use?**
```bash
npx kill-port 8082
npm run dev
```

**Module errors?**
```bash
rm -rf node_modules dist
npm install
npm run dev
```

---

## License

MIT License

## Support

- Email: support@restroHub.io
- Website: https://www.restroHub.io

---

**Version:** 1.0.0 | **Status:** Production Ready
# RestroHub
