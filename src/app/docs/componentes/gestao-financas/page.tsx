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
      <p className="text-sm text-muted-foreground">Etapas para planejamento estratégico e financeiro seriam clicáveis aqui.</p>
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

export default function ComponenteGestaoFinancasPage() {
  const checklistExample = [
    { id: "c8_task1", label: "Analisar a saúde financeira atual do cliente.", completed: false },
    { id: "c8_task2", label: "Definir metas financeiras de curto, médio e longo prazo.", completed: false },
    { id: "c8_task3", label: "Desenvolver um plano estratégico com KPIs claros.", completed: false },
    { id: "c8_task4", label: "Implementar ferramentas de controle financeiro e gestão de fluxo de caixa.", completed: false },
    { id: "c8_task5", label: "Realizar análises de rentabilidade e precificação.", completed: false },
    { id: "c8_task6", label: "Acompanhar indicadores e ajustar estratégias para garantir crescimento sustentável.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 8: Gestão Estratégica e Finanças</h1>
      
      <AccordionItem title="O que é?">
        <p>Envolve o planejamento de longo prazo do seu negócio, a definição de metas claras e indicadores de desempenho (KPIs), além do controle rigoroso das finanças – receitas, custos, despesas, fluxo de caixa e lucratividade.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Uma gestão estratégica e financeira sólida garante a sustentabilidade e o crescimento do seu negócio. Sem isso, sua empresa pode estar operando sem direção clara, arriscando a saúde financeira e perdendo oportunidades de expansão.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Oferecemos consultoria em gestão estratégica, auxiliando na definição de metas e KPIs. Apoiamos na análise de performance financeira, na implementação de boas práticas de controle financeiro e na identificação de estratégias para aumentar a lucratividade e otimizar investimentos.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>A saúde financeira e a clareza estratégica são a espinha dorsal do negócio. Utilize este checklist para guiar as ações.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A PME Z, com o apoio da Kolibra na gestão estratégica e financeira, conseguiu otimizar seus custos em 10% e aumentar sua margem de lucro em 5% em um ano, além de definir um plano de expansão claro.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Planilha de Controle de Fluxo de Caixa</li>
          <li>Ferramenta: Software de Gestão Financeira (ex: Conta Azul, Nibo)</li>
          <li>Artigo: Como Definir KPIs Eficazes para seu Negócio</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

