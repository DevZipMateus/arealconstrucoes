import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize the scroll state on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleWhatsAppClick = () => {
    // WhatsApp link with predefined message
    const phoneNumber = "5524992627116"; // Brazilian format with country code
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os produtos da Areal da Construção.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/95 backdrop-blur-md shadow-nav' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-20">
            <img alt="Areal da Construção" className="h-16 md:h-20 w-auto" src="/lovable-uploads/c2949562-66cb-47e6-9c7d-63d69c91c021.jpg" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks isScrolled={isScrolled} />
            <Button className="quote-btn ml-4 text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2" onClick={handleWhatsAppClick}>
              <FileText size={18} />
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu using Sheet from shadcn/ui */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`h-10 w-10 ${!isScrolled ? 'text-white' : 'text-secondary-foreground'}`}>
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <Button className="quote-btn mt-4 w-full text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 py-3 text-base" onClick={handleWhatsAppClick}>
                      <FileText size={18} />
                      Fale Conosco
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}
const NavLinks = ({
  mobile,
  onClick,
  isScrolled
}: NavLinksProps) => {
  const links = [{
    name: 'Início',
    href: '#hero'
  }, {
    name: 'Sobre Nós',
    href: '#about'
  }, {
    name: 'Serviços',
    href: '#services'
  }, {
    name: 'Contato',
    href: '#contact'
  }];
  return <>
      {links.map(link => <a key={link.name} href={link.href} className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile ? 'text-xl text-foreground hover:text-primary mb-2 w-full text-center py-3' : isScrolled ? 'text-foreground/80 hover:text-primary hover:bg-secondary/50' : 'text-white hover:text-white/80 hover:bg-white/10'}`} onClick={onClick}>
          {link.name}
        </a>)}
    </>;
};
export default Header;