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
      <p className="text-sm text-muted-foreground">Etapas do processo de análise de mercado seriam clicáveis aqui.</p>
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

export default function ComponenteMercadoPage() {
  const checklistExample = [
    { id: 'c2_task1', label: 'Realizar pesquisa de mercado primária e secundária.', completed: false },
    { id: 'c2_task2', label: 'Analisar concorrentes diretos e indiretos.', completed: false },
    { id: 'c2_task3', label: 'Mapear a jornada do cliente (customer journey mapping).', completed: false },
    { id: 'c2_task4', label: 'Desenvolver personas detalhadas do cliente ideal (ICP).', completed: false },
    { id: 'c2_task5', label: 'Identificar dores, necessidades e desejos do público-alvo.', completed: false },
    { id: 'c2_task6', label: 'Apresentar relatório de inteligência de mercado ao cliente.', completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 2: Inteligência de Mercado e Cliente</h1>
      
      <AccordionItem title="O que é?">
        <p>É o conhecimento profundo sobre o mercado em que você atua, quem são seus clientes ideais (seu ICP - Ideal Customer Profile), suas dores, necessidades, desejos, e também quem são seus concorrentes e como eles se posicionam.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Entender seu público e mercado permite que você crie ofertas mais relevantes, comunique-se de forma eficaz e se diferencie da concorrência. Ignorar isso é como navegar no escuro.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Realizamos pesquisas de mercado, análise de concorrência, mapeamento da jornada do cliente e workshops para definir suas personas e ICP, fornecendo insights valiosos para suas estratégias.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>Este componente é crucial para embasar todas as decisões estratégicas. Siga as etapas abaixo para uma análise completa.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Loja Y, após uma análise de cliente detalhada, ajustou sua comunicação e portfólio, resultando em um aumento de 25% na taxa de conversão de visitantes do site.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Roteiro para Entrevista com Cliente</li>
          <li>Ferramenta: Google Trends para análise de tendências</li>
          <li>Artigo: Como Criar Personas Eficazes</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

