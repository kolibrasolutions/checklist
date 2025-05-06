"use client";

import React from 'react';

// Example of an interactive element - Accordion
const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-border rounded-md mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-primary hover:bg-secondary/10"
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-border bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default function DocsHomePage() {
  return (
    <div className="prose max-w-none prose-kolibra">
      <h1 className="text-4xl font-bold text-primary mb-6 font-montserrat">Visão Geral do Método Kolibra 360</h1>
      
      <p className="text-lg mb-4">
        No dinâmico e competitivo mercado atual, ter uma visão clara e completa do seu negócio não é apenas uma vantagem, é uma necessidade. É por isso que desenvolvemos o 
        <strong>Método Kolibra 360</strong>, uma abordagem estratégica e integrada, pensada para ser a bússola que guia pequenas e médias empresas (PMEs) e profissionais autônomos como você rumo ao crescimento sustentável e ao sucesso duradouro na era digital.
      </p>
      
      <p className="mb-4">
        Imagine seu negócio como uma pizza perfeitamente montada, onde cada fatia representa um componente essencial – desde a sua identidade de marca e a forma como você se conecta com seus clientes, até a eficiência de suas operações e sua capacidade de inovar. O Método Kolibra 360 garante que todas essas "fatias" não apenas existam, mas que estejam saudáveis, saborosas e trabalhando em perfeita harmonia. Uma visão 360° é crucial porque, no mundo digital, o sucesso raramente vem de ações isoladas; ele é o resultado de um sistema coeso, onde cada parte fortalece o todo.
      </p>

      <div className="my-8 p-6 bg-primary/10 rounded-lg">
        <h2 className="text-2xl font-semibold text-primary mb-3 font-montserrat">Por que uma Visão 360° é Crucial?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Permite identificar sinergias e gargalos entre diferentes áreas.</li>
          <li>Otimiza o investimento, direcionando recursos para onde realmente importa.</li>
          <li>Constrói uma marca mais forte e uma experiência do cliente mais coesa.</li>
          <li>Prepara o negócio para a adaptação e inovação contínuas.</li>
        </ul>
      </div>

      <p className="mb-6">
        Com o Método Kolibra 360, a Kolibra Solutions transcende o papel de uma simples agência digital. Nós nos tornamos seus parceiros estratégicos, mergulhando fundo na realidade do seu negócio para entender seus desafios únicos e suas maiores aspirações. Juntos, identificamos as oportunidades, desenhamos soluções personalizadas e implementamos as ações necessárias para que cada "fatia essencial" do seu negócio contribua para um crescimento robusto e resultados que você pode ver e medir. Estamos aqui para construir, ao seu lado, uma jornada de transformação que prepare sua empresa não apenas para o presente, mas para um futuro próspero e cheio de conquistas.
      </p>

      <h2 className="text-3xl font-bold text-primary mt-10 mb-6 font-montserrat">Principais Benefícios da Aplicação do Método</h2>
      
      <AccordionItem title="Clareza Estratégica Aprimorada">
        <p>O método proporciona um entendimento profundo do seu negócio, mercado e clientes, permitindo a definição de metas claras e um roadmap estratégico para alcançá-las.</p>
      </AccordionItem>

      <AccordionItem title="Otimização de Processos e Eficiência">
        <p>Identificamos e implementamos melhorias nos seus processos internos, utilizando automação e tecnologia para aumentar a produtividade e reduzir custos.</p>
      </AccordionItem>

      <AccordionItem title="Fortalecimento da Marca e Comunicação">
        <p>Construímos ou revitalizamos sua identidade de marca, garantindo uma comunicação coesa e impactante que ressoa com seu público-alvo.</p>
      </AccordionItem>

      <AccordionItem title="Crescimento Sustentável e ROI Mensurável">
        <p>Todas as ações são focadas em gerar resultados tangíveis e um retorno sobre o investimento claro, promovendo um crescimento sólido e sustentável para sua empresa.</p>
      </AccordionItem>

      <p className="mt-8 text-sm text-muted-foreground">
        Esta documentação interna tem como objetivo detalhar cada aspecto do Método Kolibra 360, servindo como um guia para nossa equipe aplicar consistentemente nossa metodologia e entregar excelência aos nossos clientes.
      </p>

    </div>
  );
}

// Add a simple prose style for markdown-like content if not already in globals.css
// For example, in your globals.css or a new CSS module:
/*
.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  @apply font-montserrat text-primary;
}
.prose p, .prose ul, .prose ol, .prose blockquote {
  @apply font-open-sans text-foreground mb-4;
}
.prose strong {
  @apply font-semibold;
}
.prose a {
  @apply text-secondary hover:underline;
}
.prose ul, .prose ol {
  @apply pl-6;
}
*/
