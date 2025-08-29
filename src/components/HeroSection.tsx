// src/components/HeroSection.tsx (full - add your animations/buttons)
import React, { useState } from 'react';
import { submitForm } from '../api/contact';  // Import backend

export function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      const result = await submitForm({ phoneNumber, customerName: 'Website Visitor' });
      if (result.success) {
        setIsSubmitted(true);
        setHasError(false);
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full JSX from your text: form, buttons, testimonial */}
      <form onSubmit={handleSubmit}>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" />
        <button type="submit">Get AI Call Back</button>
      </form>
      {isSubmitted && <p>Success! You'll receive a call shortly.</p>}
      {hasError && <p>Error: Please enter a valid phone number.</p>}
    </section>
  );
}