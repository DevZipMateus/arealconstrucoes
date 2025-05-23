
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    // WhatsApp link with predefined message
    const phoneNumber = "5524992627116"; // Brazilian format with country code
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para produtos da Areal da Construção.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 bg-brand-dark">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Display */}
          <div className="mb-8 animate-slide-up [animation-delay:100ms] flex justify-center">
            <img alt="Areal da Construção" className="w-64 md:w-80 h-auto" src="/lovable-uploads/dc161073-883b-4364-8f4e-5a83f98543c8.jpg" />
          </div>
          
          <span className="inline-block px-4 py-2 bg-primary/70 backdrop-blur-md rounded-full text-primary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
            Materiais Elétricos, Hidráulicos e Parafusos
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold light-title mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            <span className="text-primary">Areal da Construção</span>
          </h1>
          
          <p className="text-lg md:text-xl light-title mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
            Conectando ideias, fixando resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-md transition-all duration-300"
              onClick={() => window.location.href = '#services'}
            >
              Conhecer Produtos
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="quote-btn hover:border-primary hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2"
              onClick={handleWhatsAppClick}
            >
              <FileText size={20} className="group-hover:animate-pulse" />
              <span>Entre em Contato</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>;
};

export default HeroSection;
