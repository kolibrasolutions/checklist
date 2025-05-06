"use client";

import React from "react";

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
        <span>{isOpen ? "−" : "+"}</span>
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
      <p className="text-sm text-muted-foreground">Etapas para mapeamento e otimização de processos seriam clicáveis aqui.</p>
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
            <label htmlFor={item.id} className={`flex-1 ${item.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ComponenteOperacoesPage() {
  const checklistExample = [
    { id: "c6_task1", label: "Mapear os processos internos chave do cliente (AS-IS).", completed: false },
    { id: "c6_task2", label: "Identificar gargalos, ineficiências e oportunidades de melhoria.", completed: false },
    { id: "c6_task3", label: "Desenhar fluxos de trabalho otimizados (TO-BE).", completed: false },
    { id: "c6_task4", label: "Recomendar e implementar ferramentas de automação (CRM, ERP, etc.).", completed: false },
    { id: "c6_task5", label: "Desenvolver soluções de IA personalizadas para otimizar tarefas específicas.", completed: false },
    { id: "c6_task6", label: "Treinar a equipe do cliente nas novas ferramentas e processos.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 6: Operações e Processos Internos</h1>
      
      <AccordionItem title="O que é?">
        <p>Refere-se a como sua empresa funciona por dentro – as tarefas diárias, os fluxos de trabalho, as ferramentas utilizadas e a maneira como as equipes colaboram para entregar valor aos clientes.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Processos eficientes economizam tempo e dinheiro, reduzem erros, melhoram a qualidade da entrega e aumentam a satisfação tanto dos clientes quanto dos colaboradores. Operações desorganizadas geram desperdício e frustração.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Analisamos seus processos atuais, identificamos gargalos e oportunidades de otimização. Implementamos ferramentas de automação, como CRMs e sistemas de gestão, e desenvolvemos soluções de Inteligência Artificial personalizadas para simplificar tarefas e aumentar a eficiência operacional.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>A otimização de operações é um pilar para a escalabilidade. Siga este checklist para guiar a análise e implementação.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Empresa de Serviços W, após a implementação de um CRM e a automação de processos de atendimento com a Kolibra, reduziu o tempo de resposta ao cliente em 50% e aumentou a produtividade da equipe em 20%.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Mapeamento de Processos (BPMN Básico)</li>
          <li>Ferramenta: Trello/Asana para gestão de tarefas, Zapier/Make para automações</li>
          <li>Artigo: Como a Inteligência Artificial pode Otimizar suas Operações</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

