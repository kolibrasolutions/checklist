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
      <p className="text-sm text-muted-foreground">Etapas para mapeamento e melhoria da experiência do cliente seriam clicáveis aqui.</p>
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

export default function ComponenteExperienciaClientePage() {
  const checklistExample = [
    { id: "c9_task1", label: "Mapear todos os pontos de contato da jornada do cliente.", completed: false },
    { id: "c9_task2", label: "Coletar feedback dos clientes (pesquisas, entrevistas, NPS).", completed: false },
    { id: "c9_task3", label: "Identificar momentos de atrito e oportunidades de encantamento.", completed: false },
    { id: "c9_task4", label: "Implementar/otimizar CRM para gestão do relacionamento.", completed: false },
    { id: "c9_task5", label: "Desenvolver estratégias de fidelização e programas de recompensa.", completed: false },
    { id: "c9_task6", label: "Treinar a equipe para um atendimento focado na experiência do cliente.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 9: Experiência do Cliente e Relacionamento</h1>
      
      <AccordionItem title="O que é?">
        <p>É a percepção geral que seus clientes têm ao interagir com sua empresa em todos os pontos de contato – desde o primeiro contato até o pós-venda. Envolve emoções, facilidade, eficiência e a qualidade do relacionamento construído.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Clientes satisfeitos e encantados com a experiência não apenas voltam a comprar, mas também se tornam promotores da sua marca, indicando para amigos e familiares. Uma experiência ruim, por outro lado, pode destruir sua reputação.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Mapeamos a jornada do seu cliente, identificamos pontos de melhoria e implementamos soluções para otimizar cada interação. Isso inclui a configuração de CRMs, desenvolvimento de chatbots inteligentes, criação de programas de fidelidade e estratégias para um atendimento excepcional.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>A experiência do cliente deve ser uma prioridade em todas as áreas. Utilize este checklist para guiar as ações de melhoria.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Clínica Médica W, após implementar um sistema de agendamento online otimizado e um chatbot para triagem inicial com a Kolibra, melhorou o índice de satisfação dos pacientes em 40% e reduziu o tempo de espera para atendimento.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Mapa da Jornada do Cliente</li>
          <li>Ferramenta: Software de CRM (HubSpot, Salesforce), Plataformas de Pesquisa de Satisfação (SurveyMonkey)</li>
          <li>Artigo: Customer Centricity: Colocando o Cliente no Centro de Tudo</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

