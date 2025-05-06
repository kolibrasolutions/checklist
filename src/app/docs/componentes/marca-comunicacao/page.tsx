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
      <p className="text-sm text-muted-foreground">Etapas para construção de marca e comunicação seriam clicáveis aqui.</p>
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

export default function ComponenteMarcaComunicacaoPage() {
  const checklistExample = [
    { id: "c7_task1", label: "Revisar/criar a identidade visual (logo, cores, tipografia).", completed: false },
    { id: "c7_task2", label: "Definir o tom de voz e a mensagem chave da marca.", completed: false },
    { id: "c7_task3", label: "Desenvolver um manual de marca abrangente.", completed: false },
    { id: "c7_task4", label: "Criar um plano de comunicação integrada (online e offline, se aplicável).", completed: false },
    { id: "c7_task5", label: "Produzir materiais de comunicação consistentes com a marca.", completed: false },
    { id: "c7_task6", label: "Monitorar a percepção da marca e ajustar estratégias conforme necessário.", completed: false },
  ];

  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-3xl font-bold text-primary mb-6 font-montserrat">Componente 7: Construção de Marca (Branding) e Comunicação</h1>
      
      <AccordionItem title="O que é?">
        <p>É a forma como sua empresa é percebida pelo mercado. Envolve sua identidade visual (logotipo, cores, design), o tom de voz que você usa para se comunicar e as mensagens que você transmite em todos os pontos de contato com o cliente.</p>
      </AccordionItem>

      <AccordionItem title="Por que é vital para o seu sucesso?">
        <p>Uma marca forte e uma comunicação clara e consistente constroem confiança, diferenciam você da concorrência e criam uma conexão emocional com seus clientes. Uma marca fraca ou confusa pode afastar potenciais clientes.</p>
      </AccordionItem>

      <AccordionItem title="Como a Kolibra Solutions te ajuda a fortalecer esta fatia?">
        <p>Criamos ou renovamos sua identidade visual, desenvolvemos um manual de marca completo, definimos seu tom de voz e elaboramos estratégias de comunicação integrada para garantir que sua mensagem seja coesa, impactante e alcance o público certo da maneira certa.</p>
      </AccordionItem>

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Processo de Análise e Diagnóstico (Kolibra)</h2>
      <ClickableFlowchart data={{}} />

      <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-montserrat">Como Aplicar (para a equipe interna)</h2>
      <p>A construção de uma marca sólida é um investimento contínuo. Utilize este checklist para guiar as ações de branding e comunicação.</p>
      <InteractiveChecklist items={checklistExample} />

      <AccordionItem title="Estudos de Caso/Exemplos Práticos">
        <p>Exemplo: A Startup Y, após um projeto de rebranding completo com a Kolibra, conseguiu atrair investidores e aumentar sua base de usuários em 50%, graças a uma comunicação mais clara e profissional.</p>
      </AccordionItem>

      <AccordionItem title="Recursos e Ferramentas">
        <ul className="list-disc list-inside">
          <li>Template: Briefing de Identidade Visual</li>
          <li>Ferramenta: Canva/Adobe Express para criação rápida de posts, Mailchimp para e-mail marketing</li>
          <li>Artigo: Storytelling para Marcas: Como Contar Histórias que Conectam</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

