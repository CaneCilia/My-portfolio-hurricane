import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactDetails = [
    {
      icon: <Mail className="contact-info-icon" size={20} />,
      label: "Email Me",
      value: "kanishkar@example.com",
      link: "mailto:kanishkar@example.com"
    },
    {
      icon: <Phone className="contact-info-icon" size={20} />,
      label: "Call Me",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="contact-info-icon" size={20} />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com", name: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com", name: "LinkedIn" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000); // clear success alert
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-orb glow-orb-blue" style={{ left: '5%', bottom: '5%' }} />

      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an opportunity or want to build something together? Send a log message below.
        </p>
      </div>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info-panel animate-slide-up">
          <h3>Reach Out Directly</h3>
          <p className="contact-panel-desc">
            Feel free to contact me via email, phone, or LinkedIn. I am always excited to discuss software architectures and automation tasks.
          </p>

          <div className="info-cards-list">
            {contactDetails.map((detail, idx) => (
              <a 
                key={idx} 
                href={detail.link} 
                target={detail.link.startsWith('http') ? '_blank' : '_self'} 
                rel="noopener noreferrer" 
                className="info-card-item glass"
              >
                <div className="icon-wrapper">{detail.icon}</div>
                <div className="info-text">
                  <span className="info-label">{detail.label}</span>
                  <span className="info-value">{detail.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-social-channels">
            <h4>Social Networks</h4>
            <div className="social-row">
              {socialLinks.map((soc, idx) => (
                <a 
                  key={idx} 
                  href={soc.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn glass"
                  title={soc.name}
                >
                  {soc.icon}
                  <span>{soc.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-panel glass card animate-slide-up" style={{ animationDelay: '150ms' }}>
          <h3>Send a Message</h3>
          
          {isSuccess && (
            <div className="success-banner animate-fade-in">
              <CheckCircle2 size={20} className="text-green" />
              <div>
                <h5>Log Sent Successfully!</h5>
                <p>Thank you. Your message has been received. I will reply shortly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={errors.subject ? 'error' : ''}
                placeholder="Collaboration Opportunity"
                disabled={isSubmitting}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message Body</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? 'error' : ''}
                placeholder="Hi Kanishkar, I would love to talk about..."
                rows="6"
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className="glow-btn glow-btn-primary submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="spinner" /> Processing Send...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
