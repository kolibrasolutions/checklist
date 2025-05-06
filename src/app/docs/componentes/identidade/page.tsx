"use client";

import React from 'react';

// Example of an interactive element - Accordion
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

// Placeholder for a clickable flowchart component
const ClickableFlowchart = ({ data }: { data: any }) => {
  // In a real scenario, this would render an SVG or a series of connected nodes
  // For now, it's a placeholder
  return (
    <div className="my-6 p-4 border-2 border-dashed border-secondary rounded-md bg-secondary/5 text-center">
      <p className="text-secondary font-semibold">[Fluxograma Interativo Placeholder]</p>
      <p className="text-sm text-muted-foreground">Etapas do processo seriam clicáveis aqui.</p>
    </div>
  );
};

// Placeholder for an interactive checklist
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

export default function ComponenteIdentidadePage() {
  const checklistExample = [
    { id: 'c1_task1', label: 'Realizar workshop de branding com o cliente.', completed: false },
    { id: 'c1_task2', label: 'Definir/refinar missão, visão e valores.', completed: false },
    { id: 'c1_task3', label: 'Desenvolver a personalidade da marca.', completed: false },
    { id: 'c1_task4', label: 'Criar/revisar nome e slogan (se aplicável).', completed: false },
    { id: 'c1_task5', label: 'Desenvolver identidade visual (logo, cores, fontes).', completed: false },
    { id: 'c1_task6', label: 'Produzir manual de marca com diretrizes.', completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 1: Identidade Estratégica e Propósito Corporativo</h1>
      
      <AccordionItem title="O que é?">
        <p>É a alma do seu negócio – sua missão (o que você faz), visão (onde quer chegar) e valores (no que acredita). É a história que você conta e o porquê de sua existência.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Uma identidade clara e um propósito forte guiam todas as suas decisões, atraem os clientes certos e inspiram sua equipe. Sem isso, seu negócio pode parecer sem direção.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Através de workshops de branding, definimos ou refinamos sua missão, visão, valores, personalidade de marca e até mesmo o nome e slogan, se necessário. Criamos uma identidade visual que traduz sua essência.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>Diretrizes claras para a equipe sobre como trabalhar este componente com os clientes.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Empresa X, após redefinir sua identidade estratégica com a Kolibra, aumentou o reconhecimento da marca em 30% e melhorou o engajamento dos colaboradores.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Questionário de Briefing de Marca</li>
          <li>Artigo: A Importância do Propósito no Branding Moderno</li>
          <li>Ferramenta: Gerador de Paleta de Cores XYZ</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

