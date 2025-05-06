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
      <p className="text-sm text-muted-foreground">Etapas do processo interno da Kolibra para a Fase de Cocriação e Desenvolvimento seriam clicáveis aqui.</p>
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

export default function FaseCocriacaoPage() {
  const checklistExample = [
    { id: "f3_task1", label: "Iniciar o desenvolvimento das soluções (marca, site, conteúdo, automação, IA) conforme o plano.", completed: false },
    { id: "f3_task2", label: "Manter comunicação constante com o cliente, apresentando progressos.", completed: false },
    { id: "f3_task3", label: "Realizar sessões de feedback e validação com o cliente em marcos chave.", completed: false },
    { id: "f3_task4", label: "Ajustar e refinar as soluções com base no feedback do cliente.", completed: false },
    { id: "f3_task5", label: "Preparar protótipos, layouts e versões beta para aprovação.", completed: false },
    { id: "f3_task6", label: "Garantir a qualidade e o alinhamento das entregas com o plano estratégico.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Fase 3: Cocriação e Desenvolvimento das Soluções</h1>
      
      <AccordionItem title="O que acontece nesta fase?">
        <p>É a hora de colocar a mão na massa! Nossa equipe multidisciplinar (designers, desenvolvedores, redatores, especialistas em IA) entra em ação para materializar as soluções definidas no Plano Estratégico. Seja a criação de uma nova marca, o desenvolvimento de um site, a produção de conteúdo ou a implementação de automações.</p>
      </AccordionItem>

      <AccordionItem title="Qual o papel do cliente?">
        <p>O cliente participa ativamente através de sessões de feedback e validação ao longo do desenvolvimento. Sua opinião é crucial para garantir que as soluções atendam às suas expectativas e necessidades. A cocriação é a chave aqui.</p>
      </AccordionItem>

      <AccordionItem title="Quais são as principais entregas?">
        <p>As entregas variam conforme o escopo do projeto, mas geralmente incluem protótipos interativos, layouts visuais, versões beta das plataformas digitais, rascunhos de conteúdo e demonstrações das automações. São as soluções tomando forma e se tornando tangíveis.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processos Internos da Kolibra para esta Fase</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Guia de Aplicação para a Equipe</h2>
      <p>A fase de desenvolvimento exige colaboração intensa e foco na qualidade. Siga este checklist para manter o projeto nos trilhos.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Templates e Documentos Padrão">
        <ul className="list-disc list-inside">
          <li>Template: Cronograma de Desenvolvimento (Sprints/Marcos)</li>
          <li>Modelo: Relatório de Progresso Semanal/Quinzenal</li>
          <li>Ferramenta: Figma para prototipagem, Jira/Trello para gestão de tarefas</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Dicas e Boas Práticas">
        <ul className="list-disc list-inside">
          <li>Adote metodologias ágeis para flexibilidade e entregas incrementais.</li>
          <li>Mantenha uma comunicação transparente e regular com o cliente.</li>
          <li>Documente as decisões e alterações ao longo do processo.</li>
          <li>Realize testes internos de qualidade antes de apresentar ao cliente.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

