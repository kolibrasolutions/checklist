"use client";

import React, { useState, useCallback } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

interface SliceData {
  name: string;
  value: number; // All slices are equal, so value is 1
  description: string;
  vital: string;
  kolibraHelps: string;
  icon?: string; // Placeholder for icon
  color: string;
}

const initialData: SliceData[] = [
  {
    name: '1. Identidade Estratégica e Propósito',
    value: 1,
    description: 'Quem é sua empresa, por que ela existe e para onde ela quer ir. Inclui sua missão, visão e valores.',
    vital: 'Guia todas as decisões, atrai clientes certos e inspira a equipe.',
    kolibraHelps: 'Definimos ou refinamos missão, visão, valores, personalidade de marca, nome, slogan e identidade visual.',
    color: 'hsl(var(--kolibra-light-blue))',
  },
  {
    name: '2. Inteligência de Mercado e Cliente',
    value: 1,
    description: 'Entender bem o mercado em que você atua e, principalmente, quem são seus clientes.',
    vital: 'Permite criar ofertas relevantes, comunicar-se de forma eficaz e se diferenciar.',
    kolibraHelps: 'Realizamos pesquisas de mercado, análise de concorrência, mapeamento da jornada do cliente e definição de personas.',
    color: 'hsl(var(--kolibra-light-orange))',
  },
  {
    name: '3. Proposta de Valor e Oferta',
    value: 1,
    description: 'O que sua empresa oferece de especial e por que os clientes deveriam escolher você.',
    vital: 'Atrai e converte clientes. Se não entendem o que você oferece de único, não escolhem você.',
    kolibraHelps: 'Auxiliamos na construção ou refinamento da sua Proposta de Valor Única (PVU) e no design de ofertas.',
    color: 'hsl(var(--kolibra-light-blue))',
  },
  {
    name: '4. Portfólio de Produtos e Serviços',
    value: 1,
    description: 'Os produtos ou serviços que você vende, como são apresentados, precificados e entregues.',
    vital: 'Base da sua receita e da satisfação do cliente. Ofertas desalinhadas geram perda de oportunidades.',
    kolibraHelps: 'Ajudamos a desenhar, otimizar ou criar produtos e serviços digitais (sites, e-commerces, apps).',
    color: 'hsl(var(--kolibra-light-orange))',
  },
  {
    name: '5. Estratégias de Marketing e Vendas',
    value: 1,
    description: 'Todas as formas como você divulga sua empresa, atrai interessados e os transforma em clientes.',
    vital: 'Motor que impulsiona o crescimento. Sem elas, você fica invisível.',
    kolibraHelps: 'Desenvolvemos e implementamos estratégias de marketing digital completas (conteúdo, SEO, redes sociais, anúncios).',
    color: 'hsl(var(--kolibra-light-blue))',
  },
  {
    name: '6. Operações e Processos',
    value: 1,
    description: 'Como sua empresa funciona por dentro: tarefas, ferramentas e onde simplificar ou melhorar.',
    vital: 'Processos eficientes economizam tempo e dinheiro, reduzem erros e melhoram a qualidade.',
    kolibraHelps: 'Analisamos processos, identificamos oportunidades de otimização e automação (CRMs, IA personalizada).',
    color: 'hsl(var(--kolibra-light-orange))',
  },
  {
    name: '7. Construção de Marca e Comunicação',
    value: 1,
    description: 'A percepção que as pessoas têm da sua empresa: logotipo, visual, tom de voz.',
    vital: 'Constrói uma imagem positiva e uma comunicação clara e consistente, gerando confiança.',
    kolibraHelps: 'Criamos ou renovamos sua identidade visual e desenvolvemos estratégias de comunicação integrada.',
    color: 'hsl(var(--kolibra-light-blue))',
  },
  {
    name: '8. Gestão Estratégica e Finanças',
    value: 1,
    description: 'Planejamento financeiro, controle de custos e receitas, e estratégias para lucratividade e crescimento sustentável.',
    vital: 'Garante a sustentabilidade e o crescimento do seu negócio. Sem isso, pode estar sem direção ou inviável.',
    kolibraHelps: 'Oferecemos consultoria em gestão estratégica, definição de metas e KPIs, e análise de performance financeira.',
    color: 'hsl(var(--kolibra-light-orange))',
  },
  {
    name: '9. Experiência do Cliente e Relacionamento',
    value: 1,
    description: 'Como seus clientes se sentem ao interagir com sua empresa em todos os pontos de contato.',
    vital: 'Clientes satisfeitos voltam e indicam sua empresa. Uma boa experiência é crucial.',
    kolibraHelps: 'Mapeamos a jornada do cliente, implementamos CRMs, desenvolvemos chatbots e criamos estratégias de fidelização.',
    color: 'hsl(var(--kolibra-light-blue))',
  },
  {
    name: '10. Inovação e Adaptação',
    value: 1,
    description: 'Manter sua empresa atualizada, buscando novas ideias, melhorando produtos/processos e se preparando para o futuro.',
    vital: 'O mercado está sempre mudando. Empresas que não inovam ficam obsoletas.',
    kolibraHelps: 'Trazemos as últimas tendências e tecnologias, incentivamos a experimentação e promovemos uma cultura de melhoria contínua.',
    color: 'hsl(var(--kolibra-light-orange))',
  },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 5} // Slightly expand on hover/active
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="hsl(var(--kolibra-orange))" // Orange border on active
        strokeWidth={2}
      />
      {/* You can add labels here if needed, but info box is separate */}
    </g>
  );
};

interface InteractivePizzaChartProps {
  onSliceSelect: (data: SliceData | null) => void;
}

const InteractivePizzaChart: React.FC<InteractivePizzaChartProps> = ({ onSliceSelect }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onPieEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, [setActiveIndex]);

  const onPieLeave = useCallback(() => {
    // Keep selected if clicked, otherwise clear
    // This logic will be handled by onClick for persistence
  }, []);

  const onPieClick = useCallback((_: any, index: number) => {
    if (activeIndex === index) { // Clicked on already active slice
      // setActiveIndex(undefined); // Option to deselect
      // onSliceSelect(null);
      // For this use case, let's keep it selected or select another
      onSliceSelect(initialData[index]);
    } else {
      setActiveIndex(index);
      onSliceSelect(initialData[index]);
    }
  }, [activeIndex, onSliceSelect]);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={initialData}
          cx="50%"
          cy="50%"
          innerRadius={120} // Adjust for donut chart look
          outerRadius={200} // Adjust size
          fill="#8884d8" // Default fill, overridden by Cell
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
          onClick={onPieClick}
          paddingAngle={1}
        >
          {initialData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="hsl(var(--kolibra-white))" strokeWidth={2} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default InteractivePizzaChart;

