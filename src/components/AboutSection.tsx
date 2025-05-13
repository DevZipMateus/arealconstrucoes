
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            A Sua Parceira em Materiais para Construção
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Somos uma loja especializada em materiais elétricos, hidráulicos e parafusos, 
            oferecendo qualidade e variedade para suas obras e reformas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Conectando Ideias, Fixando Resultados
              </h3>
              <p className="text-muted-foreground mb-6">
                Desde nossa fundação, temos nos dedicado a oferecer os melhores produtos e soluções
                para projetos de construção. Nossa equipe está preparada para ajudar você a encontrar
                exatamente o que precisa, seja para uma pequena reforma ou uma grande obra.
              </p>
              <ul className="space-y-3">
                {[
                  'Produtos de qualidade e marcas renomadas',
                  'Atendimento especializado e personalizado',
                  'Variedade de itens para todas as necessidades',
                  'Preços justos e competitivos'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Missão"
              description="Oferecer produtos de qualidade que atendam às necessidades dos nossos clientes, contribuindo para o sucesso de seus projetos de construção."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Visão"
              description="Ser referência em Angra dos Reis no segmento de materiais elétricos, hidráulicos e parafusos, reconhecida pela qualidade e atendimento."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Valores"
              description="Compromisso com a qualidade, respeito ao cliente, transparência nas negociações e busca constante por inovação."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Diferenciais"
              description="Atendimento personalizado, variedade de produtos, conhecimento técnico e serviço de entrega para facilitar sua construção."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
