import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        showNotification(data.message, 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showNotification(data.error, 'error');
      }
    } catch {
      showNotification('Network error. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div className="contact-info">
            <span className="section-label">Contact</span>
            <h2>Let's build something together.</h2>
            <p>
              I'm actively looking for internship opportunities and interesting projects.
              Whether you have a role, a collaboration idea, or just want to connect — my inbox is open.
            </p>
            <div className="contact-links">
              <a href="mailto:rupeshshah.86@gmail.com" className="contact-link">
                <i className="fas fa-envelope" />
                rupeshshah.86@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/rupesh-shah-a480b8324/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
                linkedin.com/in/rupesh-shah
              </a>
              <a href="https://github.com/rupeshsah86" className="contact-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
                github.com/rupeshsah86
              </a>
              <a href="https://x.com/RupeshshahB86" className="contact-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
                x.com/RupeshshahB86
              </a>
            </div>
          </div>

          {/* Right */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What's on your mind?"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
