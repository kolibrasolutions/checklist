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
      <p className="text-sm text-muted-foreground">Etapas do processo interno da Kolibra para a Fase de Acompanhamento e Otimização seriam clicáveis aqui.</p>
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
      <h4 className="text-lg font-semibold text-primary mb-3 font-montserrat">Checklist de Execução da Fase</h4>
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

export default function FaseAcompanhamentoPage() {
  const checklistExample = [
    { id: "f5_task1", label: "Monitorar continuamente os KPIs definidos no Plano Estratégico.", completed: false },
    { id: "f5_task2", label: "Gerar e apresentar relatórios periódicos de performance ao cliente.", completed: false },
    { id: "f5_task3", label: "Realizar reuniões estratégicas para discutir resultados, aprendizados e próximos passos.", completed: false },
    { id: "f5_task4", label: "Propor e implementar otimizações e ajustes nas estratégias e soluções.", completed: false },
    { id: "f5_task5", label: "Identificar novas oportunidades de crescimento e inovação para o cliente.", completed: false },
    { id: "f5_task6", label: "Manter um relacionamento de parceria de longo prazo com o cliente.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Fase 5: Acompanhamento Contínuo, Mensuração e Otimização</h1>
      
      <AccordionItem title="O que acontece nesta fase?">
        <p>O trabalho não termina com o lançamento! Nesta fase, monitoramos de perto os KPIs definidos, compartilhamos relatórios claros sobre o desempenho das ações e discutimos os aprendizados e os próximos passos. Propomos e implementamos ajustes e otimizações contínuas para maximizar os resultados.</p>
      </AccordionItem>

      <AccordionItem title="Qual o papel do cliente?">
        <p>O cliente analisa os relatórios de performance, participa ativamente das reuniões estratégicas de acompanhamento e aprova as otimizações e novas ações propostas. A parceria continua sendo fundamental para o sucesso a longo prazo.</p>
      </AccordionItem>

      <AccordionItem title="Quais são as principais entregas?">
        <p>As principais entregas desta fase incluem relatórios periódicos de performance, planos de otimizações e recomendações estratégicas para o crescimento contínuo do negócio. É a garantia de que o Método Kolibra 360 continua gerando valor ao longo do tempo.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processos Internos da Kolibra para esta Fase</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Guia de Aplicação para a Equipe</h2>
      <p>O acompanhamento é essencial para garantir o sucesso sustentável do cliente. Mantenha o foco na análise de dados e na proatividade.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Templates e Documentos Padrão">
        <ul className="list-disc list-inside">
          <li>Template: Relatório Mensal de Performance</li>
          <li>Modelo: Plano de Otimização Contínua</li>
          <li>Ferramenta: Google Data Studio/Looker Studio para dashboards</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Dicas e Boas Práticas">
        <ul className="list-disc list-inside">
          <li>Seja proativo na identificação de oportunidades de melhoria.</li>
          <li>Baseie as recomendações em dados e análises concretas.</li>
          <li>Mantenha uma comunicação transparente e regular com o cliente sobre os resultados.</li>
          <li>Celebre as conquistas e aprenda com os desafios.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

