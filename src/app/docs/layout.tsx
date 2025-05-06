import React from 'react';

// Placeholder for a more sophisticated NavLink component if needed
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block py-2 px-4 text-sm text-primary hover:bg-secondary hover:text-secondary-foreground rounded-md transition-colors">
    {children}
  </a>
);

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen font-open-sans bg-kolibra-gray-light">
      <aside className="w-64 bg-white p-4 border-r border-border fixed top-0 left-0 h-full z-40 pt-20 hidden md:block">
        <nav className="space-y-2">
          <h3 className="px-4 py-2 text-lg font-semibold text-primary font-montserrat">Documentação Kolibra 360</h3>
          <NavLink href="/docs">Visão Geral</NavLink>
          <div>
            <h4 className="px-4 mt-4 mb-1 text-sm font-semibold text-muted-foreground font-montserrat">Componentes Essenciais</h4>
            {/* Placeholder - these would be dynamically generated or listed manually */}
            <NavLink href="/docs/componentes/identidade">1. Identidade Estratégica</NavLink>
            <NavLink href="/docs/componentes/mercado">2. Inteligência de Mercado</NavLink>
            {/* ... more components ... */}
            <NavLink href="/docs/componentes/inovacao">10. Inovação e Adaptação</NavLink>
          </div>
          <div>
            <h4 className="px-4 mt-4 mb-1 text-sm font-semibold text-muted-foreground font-montserrat">Fases da Jornada</h4>
            {/* Placeholder - these would be dynamically generated or listed manually */}
            <NavLink href="/docs/fases/descoberta">Fase 1: Descoberta</NavLink>
            <NavLink href="/docs/fases/diagnostico">Fase 2: Diagnóstico</NavLink>
            {/* ... more phases ... */}
            <NavLink href="/docs/fases/acompanhamento">Fase 5: Acompanhamento</NavLink>
          </div>
          <NavLink href="/docs/guias">Guias e Ferramentas</NavLink>
          <NavLink href="/docs/glossario">Glossário</NavLink>
          <NavLink href="/">Voltar ao Site Principal</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-8 md:ml-64 pt-20">
        {children}
      </main>
    </div>
  );
}

