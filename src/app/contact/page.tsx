'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successAnimation, setSuccessAnimation] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setSuccessAnimation(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setSuccessAnimation(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <Header />
      
      <div className="pt-32 pb-32 light-reactive">
        <div className="max-w-[1440px] mx-auto px-8">
          {/* Page Header */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32 text-center"
          >
            <h1 
              className="text-[#1A1A1A] mb-8"
              style={{
                fontFamily: 'GT Sectra Fine, serif',
                fontSize: '72px',
                lineHeight: '1.1',
                fontWeight: 500
              }}
            >
              Contact
            </h1>
            <p 
              className="text-[#6C6C6C] max-w-2xl mx-auto"
              style={{
                fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                fontWeight: 300
              }}
            >
              Let&apos;s discuss your vision. We&apos;re here to transform your space into something extraordinary.
            </p>
          </motion.section>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 
                  className="text-[#1A1A1A] mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '32px',
                    lineHeight: '1.3',
                    fontWeight: 400
                  }}
                >
                  Send us a message
                </h2>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div className="relative">
                    <label 
                      className="block text-[#6C6C6C] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className="w-full bg-transparent border-0 border-b border-[#E4DFDA] focus:border-[#B88A6F] focus:outline-none transition-all duration-600 pb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 300,
                        color: '#1A1A1A'
                      }}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-[#B88A6F]"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: focusedField === 'name' ? '100%' : 0,
                        height: focusedField === 'name' ? '2px' : '1px'
                      }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label 
                      className="block text-[#6C6C6C] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className="w-full bg-transparent border-0 border-b border-[#E4DFDA] focus:border-[#B88A6F] focus:outline-none transition-all duration-600 pb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 300,
                        color: '#1A1A1A'
                      }}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-[#B88A6F]"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: focusedField === 'email' ? '100%' : 0,
                        height: focusedField === 'email' ? '2px' : '1px'
                      }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label 
                      className="block text-[#6C6C6C] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows={6}
                      className="w-full bg-transparent border-0 border-b border-[#E4DFDA] focus:border-[#B88A6F] focus:outline-none transition-all duration-600 pb-2 resize-none"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 300,
                        color: '#1A1A1A'
                      }}
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-[#B88A6F]"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: focusedField === 'message' ? '100%' : 0,
                        height: focusedField === 'message' ? '2px' : '1px'
                      }}
                      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05, opacity: 1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-[#B88A6F] text-white rounded-full flex items-center justify-center transition-all duration-600 hover:bg-[#B88A6F]/80 hover:translateY-[-4px] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: [0.19, 1, 0.22, 1] }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        '→'
                      )}
                    </motion.button>
                  </div>
                </form>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                      className="mt-8 relative"
                    >
                      {/* Ink Spread Background */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: successAnimation ? 1 : 0,
                          opacity: successAnimation ? 0.1 : 0
                        }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.19, 1, 0.22, 1]
                        }}
                        className="absolute inset-0 bg-[#B88A6F] rounded-lg"
                      />
                      
                      {/* Success Text */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="relative z-10 text-[#B88A6F]"
                        style={{
                          fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                          fontSize: '16px',
                          fontWeight: 400,
                          letterSpacing: '0.05em'
                        }}
                      >
                        Message Sent
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right - Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              {/* Contact Information */}
              <div>
                <h2 
                  className="text-[#1A1A1A] mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '32px',
                    lineHeight: '1.3',
                    fontWeight: 400
                  }}
                >
                  Get in touch
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Studio
                    </h3>
                    <p 
                      className="text-[#6C6C6C]"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        fontWeight: 300
                      }}
                    >
                      123 Design Street<br />
                      Creative District<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Phone
                    </h3>
                    <p 
                      className="text-[#6C6C6C]"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        fontWeight: 300
                      }}
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Email
                    </h3>
                    <p 
                      className="text-[#6C6C6C]"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        fontWeight: 300
                      }}
                    >
                      hello@forma.studio
                    </p>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-[#1A1A1A] mb-2"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                      }}
                    >
                      Hours
                    </h3>
                    <p 
                      className="text-[#6C6C6C]"
                      style={{
                        fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        fontWeight: 300
                      }}
                    >
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Map */}
              <div>
                <h2 
                  className="text-[#1A1A1A] mb-8"
                  style={{
                    fontFamily: 'GT Sectra Fine, serif',
                    fontSize: '32px',
                    lineHeight: '1.3',
                    fontWeight: 400
                  }}
                >
                  Visit our studio
                </h2>
                
                <div className="relative h-[400px] bg-[#E4DFDA] overflow-hidden">
                  {/* Placeholder for map - in a real implementation, you'd use a map service */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div 
                        className="text-[#6C6C6C] mb-4"
                        style={{
                          fontFamily: 'Neue Haas Grotesk, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: 300,
                          letterSpacing: '0.05em'
                        }}
                      >
                        Studio Location
                      </div>
                      <div 
                        className="text-[#1A1A1A]"
                        style={{
                          fontFamily: 'GT Sectra Fine, serif',
                          fontSize: '32px',
                          fontWeight: 400
                        }}
                      >
                        123 Design Street
                      </div>
                    </div>
                  </div>
                  
                  {/* Monochrome overlay for aesthetic */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
