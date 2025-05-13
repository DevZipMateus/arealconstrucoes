
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, FileCheck, FileText, Map, Home, Link } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const services = [
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Material Elétrico",
      description: "Cabos, disjuntores, tomadas, interruptores e todos os componentes elétricos para sua construção ou reforma."
    }, 
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Material Hidráulico",
      description: "Tubos, conexões, registros e todo tipo de material hidráulico para instalações residenciais e comerciais."
    }, 
    {
      icon: <Link className="h-12 w-12 text-primary" />,
      title: "Parafusos",
      description: "Ampla variedade de parafusos, porcas, arruelas e fixadores para diferentes aplicações e necessidades."
    }, 
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Acessórios para Construção",
      description: "Ferramentas e acessórios essenciais para suas obras e projetos de construção."
    }, 
    {
      icon: <FileCheck className="h-12 w-12 text-primary" />,
      title: "Atendimento Especializado",
      description: "Equipe treinada para oferecer a melhor orientação na escolha dos produtos ideais para sua necessidade."
    }, 
    {
      icon: <Map className="h-12 w-12 text-primary" />,
      title: "Entrega Local",
      description: "Serviço de entrega para toda região de Angra dos Reis, facilitando seus projetos de construção."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Tudo para sua Construção
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma gama completa de produtos e materiais de qualidade para atender todas as necessidades 
            da sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;
