import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const pricing = {
  Vietnam: { economy: '2,499,000 ₫', premium: '7,499,000 ₫', firstClass: '14,999,000 ₫' },
  India: { economy: '₹7,999', premium: '₹24,999', firstClass: '₹49,999' },
  USA: { economy: '$99', premium: '$299', firstClass: '$599' }
};

const getPlans = (country) => [
  {
    name: 'Economy',
    price: `${pricing[country].economy}/month`,
    desc: 'Perfect for occasional travelers seeking essential savings, convenience, and reliable support.',
    features: [
      'Up to 10% discount on flights',
      '5% discount on hotels',
      'Dedicated email support',
      'Access to seasonal offers',
      '2 social media content per month'
    ],
    validity: [
      'Monthly Plan: 30 Days',
      'Yearly Plan: 12 Months'
    ],
    cardStyle: 'bg-gradient-to-b from-[#3a1b0b]/60 to-transparent border-t border-[#5a2b1b]/70',
    buttonStyle: 'bg-[#876615] hover:bg-[#A67E1D] text-white',
  },
  {
    name: 'Premium',
    price: `${pricing[country].premium}/month`,
    desc: 'Designed for frequent travelers who require enhanced savings, priority assistance, and premium travel support.',
    features: [
      'Up to 20% discount on flights',
      '15% discount on hotels',
      'Priority support along with email (Call & Chat)',
      'Complimentary itinerary planning',
      'Early access to exclusive deals',
      '4 social media contents per month'
    ],
    validity: [
      'Monthly Plan: 30 Days',
      'Yearly Plan: 12 Months'
    ],
    cardStyle: 'bg-gradient-to-b from-[#4a3b1b]/60 to-transparent border-t border-[#6a5b2b]/70 relative transform lg:-translate-y-4 shadow-2xl shadow-gold-primary/10',
    buttonStyle: 'bg-[#876615] hover:bg-[#A67E1D] text-white',
  },
  {
    name: 'First Class',
    price: `${pricing[country].firstClass}/month`,
    desc: 'An elite membership crafted for luxury travelers seeking personalized experiences and exclusive privileges.',
    features: [
      'Up to 30% discount on flights',
      '25% discount on hotels & resorts',
      '24/7 VIP support',
      'Dedicated personal travel manager',
      'Complimentary travel insurance on selected trips',
      '8 social media contents per month'
    ],
    validity: [
      'Monthly Plan: 30 Days',
      'Yearly Plan: 12 Months'
    ],
    cardStyle: 'bg-gradient-to-b from-[#0f1b2b]/60 to-transparent border-t border-[#1f2b3b]/70',
    buttonStyle: 'bg-[#876615] hover:bg-[#A67E1D] text-white',
  }
];

const GlobalMembership = () => {
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const activePlans = getPlans(selectedCountry);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative flex flex-col">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold-primary mb-8 tracking-wider"
            >
              Global Membership Plans
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8"
            >
              Global Membership Plans by GEMS Groups provide premium travel experiences, luxury lifestyle benefits, automotive solutions, and strategic business services across Vietnam, India, and the USA.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-lg font-semibold mt-10"
            >
              <button 
                onClick={() => setSelectedCountry('Vietnam')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCountry === 'Vietnam' ? 'bg-gold-primary/20 text-white border border-gold-primary/50' : 'text-gray-400 hover:text-white border border-transparent'}`}
              >
                <span className="font-bold">VN</span> Vietnam
              </button>
              
              <span className="text-gold-primary hidden md:block">•</span>
              
              <button 
                onClick={() => setSelectedCountry('India')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCountry === 'India' ? 'bg-gold-primary/20 text-white border border-gold-primary/50' : 'text-gray-400 hover:text-white border border-transparent'}`}
              >
                <span className="font-bold">IN</span> India
              </button>
              
              <span className="text-gold-primary hidden md:block">•</span>
              
              <button 
                onClick={() => setSelectedCountry('USA')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCountry === 'USA' ? 'bg-gold-primary/20 text-white border border-gold-primary/50' : 'text-gray-400 hover:text-white border border-transparent'}`}
              >
                <span className="font-bold">US</span> USA
              </button>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {activePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`rounded-2xl p-8 flex flex-col h-full border border-gray-700/50 backdrop-blur-md ${plan.cardStyle}`}
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-serif text-gold-primary mb-3 tracking-wide">{plan.name}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gold-primary text-xl">◉</span>
                    <span className="text-3xl font-bold text-white tracking-wide">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed min-h-[60px]">
                    {plan.desc}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-gray-800 mb-8"></div>

                <div className="flex-grow">
                  <h4 className="text-gold-primary font-bold uppercase tracking-widest text-sm mb-5">Benefits</h4>
                  <ul className="space-y-4 text-sm text-gray-200 font-medium mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gold-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-gold-primary font-bold uppercase tracking-widest text-sm mb-5">Validity</h4>
                  <ul className="space-y-3 text-sm text-gray-300 font-medium">
                    {plan.validity.map((v, vIndex) => (
                      <li key={vIndex} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></div>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full mt-12 py-4 rounded-lg uppercase tracking-widest text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-gold-primary/20 ${plan.buttonStyle}`}>
                  Join Membership
                </button>
              </motion.div>
            ))}
          </div>

          {/* Contact Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold-primary/20 via-gold-primary/5 to-transparent border border-gold-primary/20 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Encountering an issue?</h3>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Or interested in a Custom Enterprise Membership tailored to your needs?<br/>
                Feel free to reach out to us—we're here to help!
              </p>
            </div>
            <a href="#contact" className="whitespace-nowrap px-8 py-4 bg-white text-dark-bg hover:bg-gray-200 font-bold uppercase tracking-widest text-sm rounded-lg transition-colors inline-block text-center">
              Contact GEMS Groups
            </a>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalMembership;
