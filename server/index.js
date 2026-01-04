const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Simulate email sending (replace with actual email service)
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Built scalable e-commerce platform handling 100K+ daily transactions',
      solution: 'Architected microservices-based solution with React frontend, Node.js backend, and PostgreSQL database.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/rupeshkumar',
      demo: 'https://demo.example.com'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Created real-time analytics dashboard for business intelligence',
      solution: 'Developed responsive dashboard with interactive charts and real-time data streaming.',
      tech: ['React', 'D3.js', 'Python', 'Redis'],
      github: 'https://github.com/rupeshkumar',
      demo: 'https://demo.example.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Built collaborative task management platform for remote teams',
      solution: 'Developed full-stack application with real-time collaboration and file sharing.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Docker'],
      github: 'https://github.com/rupeshkumar',
      demo: 'https://demo.example.com'
    }
  ];
  
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});