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
      <p className="text-sm text-muted-foreground">Etapas do processo interno da Kolibra para a Fase de Descoberta seriam clicáveis aqui.</p>
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

export default function FaseDescobertaPage() {
  const checklistExample = [
    { id: "f1_task1", label: "Agendar e conduzir reunião de kick-off com o cliente.", completed: false },
    { id: "f1_task2", label: "Aplicar questionário de briefing detalhado.", completed: false },
    { id: "f1_task3", label: "Realizar entrevistas com stakeholders chave do cliente.", completed: false },
    { id: "f1_task4", label: "Analisar materiais e informações existentes fornecidas pelo cliente.", completed: false },
    { id: "f1_task5", label: "Consolidar todas as informações coletadas em um documento de imersão.", completed: false },
    { id: "f1_task6", label: "Apresentar o diagnóstico inicial e alinhar expectativas com o cliente.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Fase 1: Descoberta Estratégica e Imersão</h1>
      
      <AccordionItem title="O que acontece nesta fase?">
        <p>Começamos com uma imersão profunda no universo do cliente. Nosso objetivo é entender seus desafios, metas, visão de futuro e o estado atual dos 10 Componentes Essenciais do seu negócio. É o momento de ouvir, perguntar e coletar o máximo de informações relevantes.</p>
      </AccordionItem>

      <AccordionItem title="Qual o papel do cliente?">
        <p>O cliente desempenha um papel fundamental ao compartilhar informações de forma aberta e transparente. Isso inclui suas dores, sonhos para o negócio, dados de mercado que possui, e disponibilidade para conversas estratégicas com nossa equipe.</p>
      </AccordionItem>

      <AccordionItem title="Quais são as principais entregas?">
        <p>Ao final desta fase, entregamos um diagnóstico inicial claro, um alinhamento completo de expectativas entre a Kolibra e o cliente, e a identificação dos pontos focais que necessitam de maior atenção para a transformação do negócio.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processos Internos da Kolibra para esta Fase</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Guia de Aplicação para a Equipe</h2>
      <p>A fase de descoberta é a base de todo o projeto. Garanta que todas as informações sejam coletadas com precisão e empatia.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Templates e Documentos Padrão">
        <ul className="list-disc list-inside">
          <li>Template: Roteiro para Reunião de Kick-off</li>
          <li>Template: Questionário de Briefing Estratégico</li>
          <li>Modelo: Documento de Diagnóstico Inicial</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Dicas e Boas Práticas">
        <ul className="list-disc list-inside">
          <li>Pratique a escuta ativa durante as conversas com o cliente.</li>
          <li>Seja curioso e faça perguntas investigativas para aprofundar o entendimento.</li>
          <li>Documente todas as informações de forma organizada e acessível.</li>
          <li>Valide os entendimentos com o cliente ao final da fase para garantir o alinhamento.</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

