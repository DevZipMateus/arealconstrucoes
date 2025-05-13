
import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/95 text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/33108443-3b32-48bd-a904-58a6f7164110.png" 
              alt="Areal da Construção" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-white/80 text-center md:text-left">
              Conectando ideias, fixando resultados. Materiais elétricos, hidráulicos e parafusos de qualidade para sua construção.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-white/80" />
                <a href="tel:+5524992627116" className="text-white/80 hover:text-white transition-colors">
                  (24) 99262-7116
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-white/80" />
                <a href="mailto:ronaldo.rocha27@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  ronaldo.rocha27@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Rua São João Batista, 17 - Areal,<br />
                  Angra dos Reis - RJ
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media and Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/Areal_da_Construcao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-4 mt-6">Horário</h3>
            <p className="text-white/80">
              Segunda à Sexta: 08:00 - 18:00<br />
              Sábado: 08:00 - 12:00
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Areal da Construção. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
