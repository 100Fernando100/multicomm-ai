import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Globe, Heart, Phone, Database, Brain } from 'lucide-react';
import { Button } from '../ui/Button';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Voice',
      description: 'Perfect for small salons getting started with AI calls',
      icon: Phone,
      price: {
        monthly: 49,
        annual: 39
      },
      features: [
        'Twilio Voice Integration',
        'Basic Call Routing',
        'Up to 100 calls/month',
        'Standard Voice Quality',
        'Email Support',
        'Basic Analytics Dashboard',
        'Single Language (English)',
        'Business Hours Support'
      ],
      limitations: [
        'No AI Assistant',
        'No Appointment Booking',
        'No Database Integration',
        'Limited Customization'
      ],
      cta: 'Start Basic Plan',
      popular: false,
      color: 'slate'
    },
    {
      id: 'professional',
      name: 'AI Professional',
      description: 'Complete AI assistant with smart booking capabilities',
      icon: Zap,
      price: {
        monthly: 149,
        annual: 129
      },
      features: [
        'Everything in Basic',
        'VAPI AI Assistant',
        'Airtable Integration',
        'Unlimited AI Calls',
        'Smart Appointment Booking',
        'Customer Data Management',
        'Advanced Analytics',
        'Priority Support',
        'Custom Voice Training',
        'Automated Follow-ups'
      ],
      limitations: [
        'English Only',
        'Basic Sentiment Analysis'
      ],
      cta: 'Choose Professional',
      popular: false,
      color: 'pink'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plus',
      description: 'Advanced AI with multilingual support and deep insights',
      icon: Star,
      price: {
        monthly: 199,
        annual: 169
      },
      features: [
        'Everything in Professional',
        'Multi-Language Support (25+ Languages)',
        'Advanced Sentiment Analysis',
        'Emotion Detection',
        'Customer Mood Tracking',
        'Predictive Analytics',
        'Custom Integrations',
        'White-Label Solution',
        'Dedicated Account Manager',
        '24/7 Premium Support',
        'Advanced Reporting Suite',
        'API Access'
      ],
      limitations: [],
      cta: 'Go Enterprise',
      popular: true,
      color: 'gradient'
    }
  ];

  const getButtonClasses = (plan: typeof plans[0]) => {
    if (plan.color === 'gradient') {
      return 'w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white';
    }
    if (plan.color === 'pink') {
      return 'w-full bg-pink-600 hover:bg-pink-700 text-white';
    }
    return 'w-full bg-slate-600 hover:bg-slate-700 text-white';
  };

  const getCardClasses = (plan: typeof plans[0]) => {
    if (plan.popular) {
      return 'relative bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 rounded-2xl p-8 shadow-xl transform scale-105';
    }
    return 'relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow';
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto mb-8">
            From basic voice calls to advanced AI with multilingual support. Scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-pink-900' : 'text-pink-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-pink-900' : 'text-pink-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isAnnual ? plan.price.annual : plan.price.monthly;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={getCardClasses(plan)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transf...(truncated 1429 characters)...span className="text-pink-600">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-pink-500 mt-1">
                        Billed annually (${price * 12}/year)
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-pink-900 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-pink-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-pink-200">
                      <h4 className="font-semibold text-pink-900 mb-3">Not Included:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={getButtonClasses(plan)}
                >
                  {plan.cta}
                </Button>

                {/* Additional Info */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-pink-500">
                    {plan.id === 'basic' && '7-day free trial • No credit card required'}
                    {plan.id === 'professional' && '14-day free trial • Full features included'}
                    {plan.id === 'enterprise' && '30-day free trial • Custom setup & training'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-pink-900 text-center mb-8">
            Why Choose Enterprise Plus?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-semibold text-pink-900 mb-2">25+ Languages</h4>
              <p className="text-pink-600 text-sm">
                Serve customers in their native language with natural AI conversations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-semibold text-pink-900 mb-2">Sentiment Analysis</h4>
              <p className="text-pink-600 text-sm">
                Understand customer emotions and adapt responses for better satisfaction
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-semibold text-pink-900 mb-2">Predictive Analytics</h4>
              <p className="text-pink-600 text-sm">
                Anticipate customer needs and optimize your salon operations
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-pink-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-pink-700 mb-6">
              Our team can help you select the perfect plan for your salon's needs. 
              Get a personalized recommendation based on your customer volume and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                Schedule Consultation
              </Button>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                Start 14-Day Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}