"use client";

import React, { useState, useCallback } from 'react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  role: string; // Papel do cliente
  deliverables: string;
  icon?: string; // Placeholder for icon
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    title: 'Fase 1: Descoberta Estratégica e Imersão',
    description: 'Começamos com uma imersão profunda no seu universo. Queremos entender seus desafios, metas, visão e o estado atual dos 10 Componentes Essenciais.',
    role: 'Compartilhar informações abertamente, dores, sonhos para o negócio e disponibilidade para conversas estratégicas.',
    deliverables: 'Diagnóstico inicial claro, alinhamento completo de expectativas, identificação dos pontos focais para a transformação.',
  },
  {
    id: 2,
    title: 'Fase 2: Diagnóstico Aprofundado e Design da Solução',
    description: 'Aprofundamos a análise e, em colaboração com você, definimos a configuração ideal para os componentes do seu negócio. Desenvolvemos um Plano Estratégico personalizado.',
    role: 'Validar o diagnóstico, participar ativamente do design da solução, aprovar o plano estratégico e os KPIs propostos.',
    deliverables: 'Plano Estratégico detalhado e personalizado, com metas claras e um roadmap de ações.',
  },
  {
    id: 3,
    title: 'Fase 3: Cocriação e Desenvolvimento das Soluções',
    description: 'Nossa equipe multidisciplinar entra em ação para materializar as soluções planejadas (marca, site, conteúdo, automação, IA).',
    role: 'Participar de sessões de feedback e validação ao longo do desenvolvimento.',
    deliverables: 'Protótipos, layouts, versões beta das plataformas, conteúdo rascunhado – soluções tomando forma.',
  },
  {
    id: 4,
    title: 'Fase 4: Implementação, Lançamento e Transição',
    description: 'As soluções desenvolvidas e aprovadas são ativadas e integradas ao dia a dia do seu negócio. Oferecemos capacitação para sua equipe.',
    role: 'Preparar sua equipe para as novidades, acompanhar o lançamento e fornecer feedback inicial.',
    deliverables: 'Soluções implementadas e funcionando, equipe capacitada, início da medição dos resultados.',
  },
  {
    id: 5,
    title: 'Fase 5: Acompanhamento Contínuo, Mensuração e Otimização',
    description: 'Monitoramos de perto os KPIs, compartilhamos relatórios claros sobre o desempenho e discutimos os aprendizados e os próximos passos. Propomos e implementamos ajustes.',
    role: 'Analisar relatórios, participar de reuniões estratégicas e aprovar otimizações.',
    deliverables: 'Relatórios periódicos de performance, plano de otimizações e recomendações para o crescimento contínuo.',
  },
];

interface InteractiveTimelineProps {
  onEventSelect: (event: TimelineEvent | null) => void;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ onEventSelect }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleEventClick = useCallback((index: number) => {
    if (activeIndex === index) {
      // setActiveIndex(null); // Option to deselect
      // onEventSelect(null);
      onEventSelect(timelineData[index]);
    } else {
      setActiveIndex(index);
      onEventSelect(timelineData[index]);
    }
  }, [activeIndex, onEventSelect]);

  return (
    <div className="w-full relative font-open-sans">
      {/* Line connecting the dots */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary transform -translate-y-1/2"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {timelineData.map((event, index) => (
          <div 
            key={event.id} 
            className="flex-1 flex flex-col items-center text-center cursor-pointer p-4 group md:relative"
            onClick={() => handleEventClick(index)}
          >
            {/* Dot */}
            <div 
              className={`w-6 h-6 rounded-full border-2 border-primary group-hover:bg-secondary transition-all duration-300 z-10
                ${activeIndex === index ? 'bg-secondary scale-125' : 'bg-white'}
              `}
            ></div>
            {/* Title - visible on mobile and above dot on desktop */}
            <h4 
              className={`mt-3 md:mt-0 md:mb-3 text-sm font-semibold transition-colors duration-300 
                ${activeIndex === index ? 'text-secondary' : 'text-primary group-hover:text-secondary'}
              `}
            >
              {event.title.split(':')[0]} {/* Show only 'Fase X' */}
            </h4>
            {/* Vertical line for mobile */}
            {index < timelineData.length - 1 && (
                <div className="md:hidden w-1 h-16 bg-primary mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;

