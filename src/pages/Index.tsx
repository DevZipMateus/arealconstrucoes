
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for title color change
      if (window.scrollY > 50) {
        setIsScrolled(true);
        document.body.classList.add('scrolled');
      } else {
        setIsScrolled(false);
        document.body.classList.remove('scrolled');
      }
      
      // Original animation trigger logic
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animations a bit earlier (80% of viewport height instead of 90%)
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
