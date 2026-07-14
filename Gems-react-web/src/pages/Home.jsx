import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MembershipPlans from '../components/MembershipPlans';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <MembershipPlans />
      {/* Future sections (About, Services, Contact) would go here */}
      <Footer />
    </div>
  );
};

export default Home;
