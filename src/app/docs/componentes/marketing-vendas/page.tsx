"use client";

import React from 'react';

// Re-usable interactive components (assuming they might be moved to a shared components folder later)
const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-border rounded-md mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-primary hover:bg-secondary/10"
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-border bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const ClickableFlowchart = ({ data }: { data: any }) => {
  return (
    <div className="my-6 p-4 border-2 border-dashed border-secondary rounded-md bg-secondary/5 text-center">
      <p className="text-secondary font-semibold">[Fluxograma Interativo Placeholder]</p>
      <p className="text-sm text-muted-foreground">Etapas para desenvolvimento de estratégias de marketing e vendas seriam clicáveis aqui.</p>
    </div>
  );
};

const InteractiveChecklist = ({ items }: { items: { id: string; label: string; completed: boolean }[] }) => {
  const [checklistItems, setChecklistItems] = React.useState(items);

  const toggleItem = (id: string) => {
    setChecklistItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  return (
    <div className="my-6 p-4 bg-white shadow-sm rounded-md border border-border">
      <h4 className="text-lg font-semibold text-primary mb-3 font-montserrat">Checklist de Aplicação</h4>
      <ul className="space-y-2">
        {checklistItems.map(item => (
          <li key={item.id} className="flex items-center">
            <input 
              type="checkbox" 
              id={item.id} 
              checked={item.completed} 
              onChange={() => toggleItem(item.id)}
              className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary mr-2"
            />
            <label htmlFor={item.id} className={`flex-1 ${item.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ComponenteMarketingVendasPage() {
  const checklistExample = [
    { id: 'c5_task1', label: 'Definir objetivos de marketing e vendas alinhados à estratégia do cliente.', completed: false },
    { id: 'c5_task2', label: 'Desenvolver estratégias de conteúdo (blog, vídeos, e-books).', completed: false },
    { id: 'c5_task3', label: 'Implementar táticas de SEO (on-page, off-page, técnico).', completed: false },
    { id: 'c5_task4', label: 'Gerenciar campanhas de mídia paga (Google Ads, Social Ads).', completed: false },
    { id: 'c5_task5', label: 'Desenvolver estratégias para redes sociais e email marketing.', completed: false },
    { id: 'c5_task6', label: 'Analisar métricas e otimizar campanhas continuamente.', completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 5: Estratégias de Marketing e Vendas</h1>
      
      <AccordionItem title="O que é?">
        <p>São todas as ações e canais que você utiliza para divulgar sua empresa, atrair potenciais clientes (leads) e convertê-los em clientes pagantes. Inclui marketing de conteúdo, SEO, mídias sociais, anúncios pagos, email marketing, entre outros.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Marketing e vendas são o motor que impulsiona o crescimento do seu negócio. Sem estratégias eficazes, sua empresa pode ficar invisível para o público certo, perdendo oportunidades valiosas.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Desenvolvemos e implementamos estratégias de marketing digital completas e personalizadas, desde a produção de conteúdo relevante e otimização para mecanismos de busca (SEO), até a gestão de redes sociais, campanhas de anúncios online e automação de marketing, sempre com foco em gerar resultados mensuráveis.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>As estratégias de marketing e vendas devem ser integradas e orientadas a resultados. Utilize este checklist como guia.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Empresa Tech Solutions, após implementar as estratégias de marketing de conteúdo e SEO propostas pela Kolibra, aumentou o tráfego orgânico do site em 150% e a geração de leads qualificados em 70% em 6 meses.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Plano de Marketing Digital</li>
          <li>Ferramenta: Google Analytics, SEMrush, HubSpot</li>
          <li>Artigo: Guia Completo de Inbound Marketing</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

