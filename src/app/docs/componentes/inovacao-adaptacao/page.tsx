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
      <p className="text-sm text-muted-foreground">Etapas para fomentar a inovação e adaptação seriam clicáveis aqui.</p>
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

export default function ComponenteInovacaoAdaptacaoPage() {
  const checklistExample = [
    { id: "c10_task1", label: "Monitorar tendências de mercado e novas tecnologias relevantes.", completed: false },
    { id: "c10_task2", label: "Promover uma cultura de experimentação e aprendizado contínuo na empresa do cliente.", completed: false },
    { id: "c10_task3", label: "Identificar oportunidades para aplicar IA e outras inovações nos processos e produtos.", completed: false },
    { id: "c10_task4", label: "Desenvolver projetos piloto para testar novas ideias e tecnologias.", completed: false },
    { id: "c10_task5", label: "Ajudar o cliente a se adaptar a mudanças no comportamento do consumidor e no cenário competitivo.", completed: false },
    { id: "c10_task6", label: "Revisar e atualizar regularmente as estratégias para manter a relevância e competitividade.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 10: Inovação e Adaptação Contínua</h1>
      
      <AccordionItem title="O que é?">
        <p>É a capacidade da sua empresa de se manter atualizada, buscar constantemente novas ideias, melhorar produtos e processos, e se preparar para as mudanças e desafios do futuro. Envolve estar atento às tendências e tecnologias emergentes.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>O mercado está em constante evolução. Empresas que não inovam e não se adaptam correm o risco de se tornarem obsoletas. A inovação garante relevância, competitividade e a capacidade de aproveitar novas oportunidades.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Trazemos para sua empresa as últimas tendências e tecnologias, como Inteligência Artificial, e incentivamos uma cultura de experimentação e melhoria contínua. Ajudamos você a identificar oportunidades de inovação e a implementar soluções que preparem seu negócio para o futuro.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>A inovação deve ser um processo contínuo, não um evento isolado. Utilize este checklist para fomentar a adaptação e a busca por novidades.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Indústria Q, com o apoio da Kolibra na implementação de soluções de IA para otimização da produção e na criação de um laboratório de inovação, conseguiu lançar dois novos produtos disruptivos em um ano e reduzir custos operacionais.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Matriz de Priorização de Ideias de Inovação</li>
          <li>Ferramenta: Plataformas de Gestão de Ideias (ex: Brightidea, IdeaScale)</li>
          <li>Artigo: Design Thinking como Ferramenta de Inovação</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

