"use client";

import React, { useState, useCallback } from 'react';
import InteractivePizzaChart from '@/components/InteractivePizzaChart';
import InteractiveTimeline from '@/components/InteractiveTimeline'; // Import the timeline component

// Section for Introduction
const IntroductionSection = () => (
  <section id="intro" className="min-h-screen bg-primary text-primary-foreground flex flex-col justify-center items-center p-8">
    <div className="w-48 h-16 bg-secondary rounded mb-8 flex justify-center items-center text-secondary-foreground">LOGO</div> {/* Placeholder for Kolibra Logo */}
    <h1 className="text-5xl font-bold mb-4 text-center font-montserrat">Desvende o Poder do Método Kolibra 360</h1>
    <p className="text-xl text-center max-w-3xl font-open-sans">
      Uma jornada estratégica integrada para a transformação do seu negócio, visualizada como uma pizza completa, onde cada fatia é essencial para o sucesso.
    </p>
  </section>
);

// Interface for Pizza Slice Data
interface SliceInfo {
  name: string;
  description: string;
  vital: string;
  kolibraHelps: string;
  icon?: string;
}

// Section for Pizza Chart
const PizzaChartSection = () => {
  const [selectedSlice, setSelectedSlice] = useState<SliceInfo | null>(null);

  const handleSliceSelect = useCallback((data: SliceInfo | null) => {
    setSelectedSlice(data);
  }, []);

  return (
    <section id="pizza-chart" className="min-h-screen bg-kolibra-gray-light py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center font-montserrat">As 10 Fatias Essenciais do Seu Negócio</h2>
      <div className="w-full max-w-2xl">
        <InteractivePizzaChart onSliceSelect={handleSliceSelect} />
      </div>
      {selectedSlice && (
        <div id="pizza-info-box" className="mt-8 p-6 bg-white shadow-xl rounded-lg max-w-2xl w-full text-left text-foreground animate-accordion-down">
          <h3 className="text-2xl font-bold text-primary mb-3 font-montserrat">{selectedSlice.name}</h3>
          <div className="space-y-2 font-open-sans">
            <p><strong>O que é?</strong> {selectedSlice.description}</p>
            <p><strong>Por que é vital?</strong> {selectedSlice.vital}</p>
            <p><strong>Como a Kolibra ajuda?</strong> {selectedSlice.kolibraHelps}</p>
          </div>
        </div>
      )}
    </section>
  );
};

// Interface for Timeline Event Data
interface TimelineEventInfo {
  id: number;
  title: string;
  description: string;
  role: string;
  deliverables: string;
  icon?: string;
}

// Section for Timeline
const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEventInfo | null>(null);

  const handleEventSelect = useCallback((data: TimelineEventInfo | null) => {
    setSelectedEvent(data);
  }, []);

  return (
    <section id="timeline" className="min-h-screen bg-white py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center font-montserrat">A Jornada da Transformação: Nossas 5 Fases</h2>
      <div className="w-full max-w-4xl mb-8">
        <InteractiveTimeline onEventSelect={handleEventSelect} />
      </div>
      {selectedEvent && (
        <div id="timeline-info-box" className="mt-8 p-6 bg-kolibra-gray-light shadow-xl rounded-lg max-w-3xl w-full text-left text-foreground animate-accordion-down">
          <h3 className="text-2xl font-bold text-primary mb-3 font-montserrat">{selectedEvent.title}</h3>
          <div className="space-y-2 font-open-sans">
            <p><strong>O que acontece:</strong> {selectedEvent.description}</p>
            <p><strong>Seu papel:</strong> {selectedEvent.role}</p>
            <p><strong>Principais Entregas:</strong> {selectedEvent.deliverables}</p>
          </div>
        </div>
      )}
    </section>
  );
};

// Section for Benefits
const BenefitsSection = () => (
  <section id="benefits" className="min-h-screen bg-primary text-primary-foreground py-16 px-8 flex flex-col items-center">
    <h2 className="text-4xl font-bold mb-12 text-center font-montserrat">Por Que Escolher o Método Kolibra 360?</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
      {[
        { title: "Visão Holística", description: "Entendimento completo do seu negócio, integrando todas as áreas." },
        { title: "Parceria Estratégica", description: "Mais que fornecedores, somos parceiros no seu crescimento." },
        { title: "Soluções Personalizadas", description: "Adaptamos nossa metodologia à realidade e necessidades da sua empresa." },
        { title: "Foco em Resultados", description: "Ações orientadas para o impacto real e mensurável no seu negócio." },
        { title: "Inovação Contínua", description: "Utilizamos as melhores tecnologias, incluindo IA, para otimizar suas estratégias." },
        { title: "Empoderamento do Cliente", description: "Capacitamos sua equipe para o sucesso digital a longo prazo." },
      ].map((benefit, i) => (
        <div key={i} className="bg-secondary p-6 rounded-lg shadow-xl text-secondary-foreground">
          <h3 className="text-2xl font-bold mb-2 font-montserrat">{benefit.title}</h3>
          <p className="font-open-sans">{benefit.description}</p>
        </div>
      ))}
    </div>
  </section>
);

// Section for Contact
const ContactSection = () => (
  <section id="contact" className="h-64 bg-primary flex flex-col justify-center items-center p-8">
    <div className="w-32 h-12 bg-secondary rounded mb-4 flex justify-center items-center text-secondary-foreground">LOGO</div> {/* Placeholder for Kolibra Logo */}
    <p className="text-primary-foreground text-center font-open-sans">
      Saiba mais em <a href="https://kolibrasolutions.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">kolibrasolutions.com.br</a>
    </p>
  </section>
);

// Floating Navigation
const FloatingNav = () => (
  <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-lg shadow-lg space-y-2 z-50 hidden md:block">
    <a href="#intro" title="Introdução" className="block w-3 h-3 bg-primary rounded-full hover:bg-secondary transition-colors"></a>
    <a href="#pizza-chart" title="10 Fatias" className="block w-3 h-3 bg-primary rounded-full hover:bg-secondary transition-colors"></a>
    <a href="#timeline" title="5 Fases" className="block w-3 h-3 bg-primary rounded-full hover:bg-secondary transition-colors"></a>
    <a href="#benefits" title="Benefícios" className="block w-3 h-3 bg-primary rounded-full hover:bg-secondary transition-colors"></a>
    <a href="#contact" title="Contato" className="block w-3 h-3 bg-primary rounded-full hover:bg-secondary transition-colors"></a>
  </nav>
);

// Main Home Page Component
export default function HomePage() {
  return (
    <main className="font-open-sans">
      <FloatingNav />
      <IntroductionSection />
      <PizzaChartSection />
      <TimelineSection />
      <BenefitsSection />
      <ContactSection />
    </main>
  );
}

