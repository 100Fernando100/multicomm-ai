import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function CalendlySection() {
  const calendlyUrl = "https://calendly.com/multicomm-ai"; // Your Calendly URL
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [hasAdBlocker, setHasAdBlocker] = useState(false);

  // Detect if Calendly fails to load (likely due to ad blockers)
  useEffect(() => {
    const timer = setTimeout(() => {
      const calendlyIframe = document.querySelector('iframe[src*="calendly"]');
      if (!calendlyIframe) {
        setHasAdBlocker(true);
      } else {
        setIsCalendlyLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="book-online" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-900 mb-4">
            Book Directly Online
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto">
            Choose a date and time that works best for you. Schedule your appointment instantly with our integrated booking system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Features Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  Real-Time Availability
                </h3>
                <p className="text-pink-700">
                  See available time slots instantly and book the perfect appointment time that fits your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  24/7 Booking
                </h3>
                <p className="text-pink-700">
                  Book your appointment anytime, day or night. Our online system is always available for your convenience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  Instant Confirmation
                </h3>
                <p className="text-pink-700">
                  Receive immediate confirmation and calendar invites. Get reminders before your appointment.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 mt-8">
              <h4 className="font-semibold text-pink-900 mb-4">Need Help?</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+12898194561" 
                  className="flex items-center gap-3 text-pink-700 hover:text-pink-800 transition-colors"
                >
                  <div className="bg-pink-100 p-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="font-medium">Call: +1 (289) 819-4561</span>
                </a>
                <div className="text-sm text-pink-600">
                  Our AI assistant is available 24/7
                </div>
              </div>
            </div>

            {/* Ad Blocker Warning */}
            {hasAdBlocker && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Having trouble booking?
                    </h4>
                    <p className="text-yellow-700 text-sm mb-3">
                      If the booking calendar isn't loading, please temporarily disable your ad blocker for this page.
                    </p>
                    <a 
                      href="https://calendly.com/multicomm-ai" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors"
                    >
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Calendly Widget - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden">
              {/* Calendly Widget Container with Enhanced Settings */}
              <div className="calendly-container min-h-[700px] p-4">
                <InlineWidget 
                  url={calendlyUrl}
                  styles={{
                    height: '700px',
                    width: '100%'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: 'ec4899',
                    textColor: '4a4a4a'
                  }}
                  prefill={{
                    name: '',
                    email: '',
                    customAnswers: {
                      a1: 'Website Booking'
                    }
                  }}
                  utm={{
                    utmCampaign: 'multicomm-ai-website',
                    utmSource: 'website',
                    utmMedium: 'embedded-widget'
                  }}
                />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Secure & Private • No Account Required • Instant Confirmation
              </p>
            </div>
          </motion.div>
        </div>

        {/* Alternative Booking Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prefer AI Assistance?
            </h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              If you'd rather have our AI assistant call you to help with booking, just fill out the form at the top of the page. 
              Our AI can answer questions and help you choose the perfect service and time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#hero"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Get AI Call Back Instead
              </a>
              <a 
                href="tel:+12898194561"
                className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call AI Assistant
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
