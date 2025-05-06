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
      <p className="text-sm text-muted-foreground">Etapas para design da proposta de valor seriam clicáveis aqui.</p>
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

export default function ComponentePropostaValorPage() {
  const checklistExample = [
    { id: 'c3_task1', label: 'Conduzir workshop de Design de Proposta de Valor com o cliente.', completed: false },
    { id: 'c3_task2', label: 'Identificar os "jobs-to-be-done", dores e ganhos do cliente.', completed: false },
    { id: 'c3_task3', label: 'Mapear os produtos/serviços que aliviam as dores e criam ganhos.', completed: false },
    { id: 'c3_task4', label: 'Formular a Proposta de Valor Única (PVU) de forma clara e concisa.', completed: false },
    { id: 'c3_task5', label: 'Validar a PVU com o público-alvo (se possível).', completed: false },
    { id: 'c3_task6', label: 'Integrar a PVU na comunicação e materiais de marketing.', completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 3: Proposta de Valor e Oferta</h1>
      
      <AccordionItem title="O que é?">
        <p>É a promessa única que seu negócio faz aos clientes. É o que torna sua empresa diferente e a melhor escolha para resolver um problema específico ou atender a uma necessidade particular.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Uma proposta de valor clara e convincente é o que atrai e converte clientes. Se os clientes não entendem o que você oferece de único, eles não têm motivos para escolher você.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Auxiliamos na construção ou refinamento da sua Proposta de Valor Única (PVU), garantindo que ela seja clara, relevante para seu público e destaque seus diferenciais competitivos. Cocriamos o design das suas ofertas para que sejam irresistíveis.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>A clareza na proposta de valor é fundamental. Utilize este checklist para guiar o processo com o cliente.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: O Serviço Z, ao refinar sua proposta de valor, conseguiu aumentar a clareza de sua oferta e viu um crescimento de 40% nos pedidos de orçamento qualificados.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Canvas da Proposta de Valor (Strategyzer)</li>
          <li>Artigo: Como Escrever uma Proposta de Valor Irresistível</li>
          <li>Ferramenta: Software de Mapeamento Mental para Brainstorming</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

