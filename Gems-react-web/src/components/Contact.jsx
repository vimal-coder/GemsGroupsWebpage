import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for getting in touch! We will contact you soon.');
    setFormData({ firstName: '', middleName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gold-primary mb-6 uppercase tracking-wider"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto uppercase tracking-wide leading-relaxed font-semibold"
          >
            Luxury Travel Membership Contact services by GEMS Groups help clients connect with our team for premium travel memberships, strategic media solutions, and luxury business services worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 uppercase tracking-wide">
              We’re Listening. Let’s Begin!
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-10 font-medium">
              Connect with us to bring your vision to life with innovation, performance, and luxury.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors flex-shrink-0">
                  <Mail className="text-gold-primary group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-1">Email</h4>
                  <a href="mailto:gems7.divine@gmail.com" className="text-gray-400 hover:text-gold-primary transition-colors text-sm">
                    gems7.divine@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors flex-shrink-0">
                  <MapPin className="text-gold-primary group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-1">Locations</h4>
                  <p className="text-gray-400 text-sm">Vietnam - India - USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors flex-shrink-0">
                  <Phone className="text-gold-primary group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest font-bold mb-2">Phone</h4>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p><span className="text-gray-500 w-8 inline-block">VN:</span> +84 379 290 233</p>
                    <p><span className="text-gray-500 w-8 inline-block">IN:</span> +91 73387 30245 | +91 73387 40245</p>
                    <p><span className="text-gray-500 w-8 inline-block">US:</span> +1 (256) 415-3929</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative background blur inside card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
            
            <h3 className="text-2xl font-serif text-white mb-8 uppercase tracking-wide relative z-10">Message Us</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 ml-1">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Your First Name" 
                    required
                    className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 ml-1">Middle Name</label>
                  <input 
                    type="text" 
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    placeholder="Enter Your Middle Name" 
                    className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 ml-1">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Your Last Name" 
                    required
                    className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 ml-1">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number" 
                    className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required
                  className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  rows="4"
                  required
                  className="w-full bg-dark-bg/50 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-primary text-black font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-gold-secondary transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
              >
                <Send size={18} />
                Message Us
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
