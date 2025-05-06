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
      <p className="text-sm text-muted-foreground">Etapas do processo interno da Kolibra para a Fase de Diagnóstico seriam clicáveis aqui.</p>
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

export default function FaseDiagnosticoPage() {
  const checklistExample = [
    { id: "f2_task1", label: "Analisar profundamente os dados coletados na Fase 1.", completed: false },
    { id: "f2_task2", label: "Identificar pontos fortes, fracos, oportunidades e ameaças (Análise SWOT).", completed: false },
    { id: "f2_task3", label: "Conduzir workshops de cocriação com o cliente para o design da solução.", completed: false },
    { id: "f2_task4", label: "Desenvolver o Plano Estratégico personalizado com metas e KPIs.", completed: false },
    { id: "f2_task5", label: "Criar um roadmap de ações claro e priorizado.", completed: false },
    { id: "f2_task6", label: "Apresentar e validar o Plano Estratégico com o cliente.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Fase 2: Diagnóstico Aprofundado e Design da Solução</h1>
      
      <AccordionItem title="O que acontece nesta fase?">
        <p>Com base na imersão inicial, aprofundamos a análise dos 10 Componentes Essenciais. Em colaboração com o cliente, definimos a configuração ideal para cada componente e desenhamos um Plano Estratégico personalizado, com metas claras e um roadmap de ações para alcançá-las.</p>
      </AccordionItem>

      <AccordionItem title="Qual o papel do cliente?">
        <p>O cliente participa ativamente na validação do diagnóstico, no design da solução e na aprovação do plano estratégico e dos KPIs (Indicadores Chave de Performance) propostos. Sua expertise sobre o próprio negócio é crucial nesta etapa.</p>
      </AccordionItem>

      <AccordionItem title="Quais são as principais entregas?">
        <p>A principal entrega desta fase é o Plano Estratégico detalhado e personalizado, contendo o diagnóstico completo, as soluções propostas para cada componente, metas claras, KPIs para acompanhamento e um roadmap de implementação das ações.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processos Internos da Kolibra para esta Fase</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Guia de Aplicação para a Equipe</h2>
      <p>O diagnóstico preciso e um plano estratégico bem desenhado são cruciais para o sucesso. Siga este checklist.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Templates e Documentos Padrão">
        <ul className="list-disc list-inside">
          <li>Template: Análise SWOT Detalhada</li>
          <li>Template: Plano Estratégico Kolibra 360</li>
          <li>Modelo: Definição de Metas SMART e KPIs</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Dicas e Boas Práticas">
        <ul className="list-disc list-inside">
          <li>Utilize frameworks de análise estratégica (SWOT, Porter, etc.).</li>
          <li>Envolva o cliente ativamente nas sessões de design da solução.</li>
          <li>Garanta que as metas sejam SMART (Específicas, Mensuráveis, Alcançáveis, Relevantes, Temporais).</li>
          <li>Priorize as ações no roadmap com base no impacto e viabilidade.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

