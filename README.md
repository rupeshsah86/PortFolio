# Senior Developer Portfolio

A modern, professional full-stack portfolio built with React, TypeScript, Node.js, and Express. Features responsive design, smooth animations, and a working contact form.

## 🚀 Features

- **React + TypeScript Frontend**: Modern, type-safe React application
- **Node.js + Express Backend**: RESTful API with contact form handling
- **Fully Responsive**: Mobile-first design that works on all devices
- **Professional Design**: Clean, minimal interface suitable for senior developers
- **Smooth Animations**: Subtle animations and transitions
- **Contact Form**: Working contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.tsx         # Main App component
│   │   └── App.css         # Global styles
│   └── public/
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   └── package.json       # Server dependencies
├── package.json           # Root package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone and install dependencies:**
```bash
cd portfolio
npm run install-deps
```

2. **Start development servers:**
```bash
npm run dev
```

This will start:
- React frontend on http://localhost:3000
- Express backend on http://localhost:5000

### Individual Commands

**Frontend only:**
```bash
cd client
npm start
```

**Backend only:**
```bash
cd server
npm run dev
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

**Client Components:**
- `client/src/components/Hero.tsx` - Name, title, description
- `client/src/components/About.tsx` - About section content
- `client/src/components/Experience.tsx` - Work experience
- `client/src/components/Contact.tsx` - Contact information

**Server Data:**
- `server/index.js` - Projects data in `/api/projects` endpoint

### Styling

**Colors:** Update CSS variables in component files:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Fonts:** Change in `client/public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)

1. **Build the React app:**
```bash
cd client
npm run build
```

2. **Deploy the `build` folder** to Netlify or Vercel

### Backend (Heroku/Railway)

1. **Deploy the `server` folder** to your hosting platform
2. **Set environment variables** if needed
3. **Update API endpoints** in React components to point to your deployed backend

### Full-Stack Deployment

For platforms like Railway or Render that support monorepos:

1. **Add build scripts** to root `package.json`
2. **Configure build commands** to build both frontend and backend
3. **Set up environment variables**

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 API Endpoints

### GET /api/health
Health check endpoint

### GET /api/projects
Returns array of projects

### POST /api/contact
Contact form submission
- **Body**: `{ name, email, message }`
- **Response**: `{ success: true, message: string }`

## 🎯 Performance Features

- **Code Splitting**: React lazy loading
- **Optimized Images**: Proper image optimization
- **Minimal Bundle**: Only necessary dependencies
- **Smooth Animations**: CSS-based animations
- **Fast Loading**: Optimized for Core Web Vitals

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Input Validation**: Form validation on both client and server
- **XSS Protection**: Sanitized inputs

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for senior developers looking to showcase their expertise professionally.**