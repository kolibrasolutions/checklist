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
      <p className="text-sm text-muted-foreground">Etapas do processo interno da Kolibra para a Fase de Implementação e Lançamento seriam clicáveis aqui.</p>
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

export default function FaseImplementacaoPage() {
  const checklistExample = [
    { id: "f4_task1", label: "Realizar os preparativos finais para o lançamento das soluções.", completed: false },
    { id: "f4_task2", label: "Configurar ambientes de produção e realizar testes finais.", completed: false },
    { id: "f4_task3", label: "Lançar as soluções desenvolvidas (site, campanhas, sistemas).", completed: false },
    { id: "f4_task4", label: "Integrar as novas soluções aos processos existentes do cliente.", completed: false },
    { id: "f4_task5", label: "Oferecer capacitação e treinamento para a equipe do cliente.", completed: false },
    { id: "f4_task6", label: "Monitorar o lançamento de perto e fornecer suporte inicial.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Fase 4: Implementação, Lançamento e Transição</h1>
      
      <AccordionItem title="O que acontece nesta fase?">
        <p>Após a aprovação final, as soluções desenvolvidas são ativadas e integradas ao dia a dia do negócio do cliente. É o momento do lançamento oficial! Além disso, oferecemos capacitação para a equipe do cliente, garantindo que todos saibam como utilizar as novas ferramentas e processos.</p>
      </AccordionItem>

      <AccordionItem title="Qual o papel do cliente?">
        <p>O cliente prepara sua equipe interna para as novidades, acompanha de perto o processo de lançamento e fornece feedback inicial sobre o funcionamento das soluções em um ambiente real. A comunicação e colaboração continuam sendo essenciais.</p>
      </AccordionItem>

      <AccordionItem title="Quais são as principais entregas?">
        <p>As principais entregas são as soluções efetivamente implementadas e funcionando (site no ar, campanhas ativas, sistemas operando), a equipe do cliente capacitada para utilizá-las, e o início da medição dos resultados e KPIs definidos no plano estratégico.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processos Internos da Kolibra para esta Fase</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Guia de Aplicação para a Equipe</h2>
      <p>O lançamento é um momento crítico. Garanta uma transição suave e um suporte eficaz ao cliente.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Templates e Documentos Padrão">
        <ul className="list-disc list-inside">
          <li>Template: Checklist de Lançamento</li>
          <li>Modelo: Material de Treinamento para Cliente</li>
          <li>Template: Plano de Comunicação de Lançamento</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Dicas e Boas Práticas">
        <ul className="list-disc list-inside">
          <li>Realize testes exaustivos em ambiente de homologação antes do lançamento.</li>
          <li>Tenha um plano de contingência para possíveis imprevistos durante o lançamento.</li>
          <li>Comunique claramente os passos do lançamento para o cliente e sua equipe.</li>
          <li>Colete feedback rápido do cliente após o lançamento para ajustes imediatos, se necessário.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

