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
      <p className="text-sm text-muted-foreground">Etapas para design e otimização do portfólio seriam clicáveis aqui.</p>
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

export default function ComponentePortfolioPage() {
  const checklistExample = [
    { id: 'c4_task1', label: 'Analisar o portfólio de produtos/serviços atual do cliente.', completed: false },
    { id: 'c4_task2', label: 'Identificar oportunidades de otimização ou criação de novas ofertas.', completed: false },
    { id: 'c4_task3', label: 'Desenvolver/otimizar websites estratégicos e landing pages.', completed: false },
    { id: 'c4_task4', label: 'Criar ou melhorar e-commerces e plataformas de agendamento.', completed: false },
    { id: 'c4_task5', label: 'Projetar Micro SaaS ou aplicações web sob medida, se aplicável.', completed: false },
    { id: 'c4_task6', label: 'Garantir que o portfólio seja claro, atraente e alinhado com a PVU.', completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 4: Portfólio de Produtos e Serviços</h1>
      
      <AccordionItem title="O que é?">
        <p>São as soluções concretas que você oferece para atender às necessidades identificadas em sua Proposta de Valor. É o "como" você entrega o valor prometido aos seus clientes.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Um portfólio bem estruturado, com produtos e serviços que realmente resolvem os problemas dos clientes, é a base da sua receita e da satisfação do cliente. Ofertas desalinhadas ou confusas geram perda de oportunidades.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Ajudamos a desenhar, otimizar ou criar novos produtos e serviços digitais, como websites estratégicos, lojas virtuais, landing pages de alta conversão, aplicativos sob medida e plataformas de conteúdo, garantindo que sejam atraentes, funcionais e alinhados à sua estratégia.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>O portfólio deve ser uma materialização da proposta de valor. Use este checklist para orientar o desenvolvimento e otimização das ofertas.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Consultoria ABC, ao reestruturar seu portfólio de serviços digitais com a Kolibra, conseguiu aumentar o ticket médio por cliente em 15% e melhorar a clareza de suas soluções no mercado.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Matriz de Análise de Portfólio</li>
          <li>Artigo: Design de Serviços Digitais Centrados no Usuário</li>
          <li>Ferramenta: Plataforma de Prototipagem Figma/Adobe XD</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

