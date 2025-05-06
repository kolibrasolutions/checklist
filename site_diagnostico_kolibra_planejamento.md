# Planejamento do Site Interativo: Checklist Diagnóstico Kolibra 360

## 1. Visão Geral

O objetivo é criar um site interativo baseado no template React para permitir que o usuário (Kolibra Solutions) utilize o Checklist Diagnóstico Kolibra 360 de forma digital. O site deverá apresentar os 10 Componentes Essenciais, permitir a avaliação de cada um através de perguntas específicas, registrar observações e, com base nas respostas, sugerir os serviços Kolibra Solutions mais adequados.

## 2. Estrutura da Página e Layout

O site será uma Single Page Application (SPA) para facilitar a navegação e a interatividade.

*   **Header:**
    *   Título: "Checklist Diagnóstico Kolibra 360"
    *   Logo da Kolibra Solutions (se disponível, ou um placeholder).
*   **Corpo Principal:**
    *   **Seção de Introdução/Instruções:** Breve explicação de como usar o checklist.
    *   **Seção de Checklist Interativo:** Onde os 10 componentes serão listados.
        *   Cada componente será um acordeão ou uma seção expansível para mostrar suas perguntas.
    *   **Seção de Recomendações/Resultados:** Exibirá os serviços recomendados com base nas respostas do checklist.
*   **Footer:**
    *   Informações de copyright ou contato (opcional).

## 3. Componentes Principais e Funcionalidades

### 3.1. Componente `ChecklistPrincipal`

*   Responsável por renderizar a lista dos 10 Componentes Essenciais.
*   Cada item da lista será um `ComponenteItem`.

### 3.2. Componente `ComponenteItem` (para cada um dos 10 Componentes Essenciais)

*   **Display:**
    *   Nome do Componente Essencial (ex: "1. Identidade Estratégica e Propósito").
    *   Um botão ou ícone para expandir/recolher as perguntas.
*   **Conteúdo Expansível:**
    *   Lista de `PerguntaItem`.
    *   Um campo de texto geral para "Observações Gerais do Componente".

### 3.3. Componente `PerguntaItem` (para cada pergunta dentro de um Componente Essencial)

*   **Display:**
    *   Texto da pergunta chave.
*   **Interação:**
    *   **Seleção de Status:** Um grupo de botões de rádio ou um dropdown para selecionar o status: "Forte", "Ok, mas pode melhorar", "Fraco", "Ausente", "Não se aplica". O valor selecionado será armazenado no estado da aplicação.
    *   **Campo de Observações da Pergunta:** Um pequeno campo de texto para anotações específicas daquela pergunta.

### 3.4. Componente `PainelRecomendacoes`

*   **Lógica:**
    *   Este componente observará o estado das respostas do checklist (especificamente os status "Fraco" ou "Ausente").
    *   Utilizará o mapeamento (já criado no arquivo `mapeamento_componentes_servicos_kolibra.md`, que será convertido para um objeto JSON no código) para identificar os serviços Kolibra Solutions relevantes.
*   **Display:**
    *   Listará os Componentes Essenciais que foram marcados como "Fraco" ou "Ausente".
    *   Para cada um desses componentes, listará os serviços Kolibra recomendados.
    *   Pode incluir links para descrições mais detalhadas dos serviços (se aplicável no futuro).

## 4. Gerenciamento de Estado (React)

*   O estado principal da aplicação residirá no componente pai (provavelmente `App.js` ou um componente container dedicado).
*   Este estado incluirá:
    *   Os dados do checklist (perguntas, estrutura dos componentes - possivelmente carregados de um arquivo JSON).
    *   As respostas do usuário para cada pergunta (status e observações).
*   As funções para atualizar o estado (quando o usuário seleciona um status ou digita uma observação) serão passadas como props para os componentes filhos.

## 5. Dados do Checklist e Mapeamento

*   O conteúdo do `checklist_diagnostico_kolibra_360.md` (perguntas) e do `mapeamento_componentes_servicos_kolibra.md` (serviços recomendados) será transformado em estruturas de dados JSON que serão importadas e utilizadas pela aplicação React.
    *   Exemplo de estrutura para o checklist:
        ```json
        [
          {
            "id": "componente1",
            "nome": "Identidade Estratégica e Propósito",
            "perguntas": [
              { "id": "p1_1", "texto": "A empresa possui uma Missão claramente definida e documentada?", "status": "", "observacoes": "" },
              // ... outras perguntas
            ],
            "observacoesGerais": ""
          },
          // ... outros componentes
        ]
        ```
    *   Exemplo de estrutura para o mapeamento:
        ```json
        {
          "componente1": ["Serviço A", "Serviço B"],
          "componente2": ["Serviço C"],
          // ... outros mapeamentos
        }
        ```

## 6. Estilização

*   Utilizará Tailwind CSS e shadcn/ui (disponíveis no template React) para um design moderno e responsivo.
*   Foco na clareza, usabilidade e fácil leitura.

## 7. Funcionalidades Adicionais (Pós-MVP)

*   Opção de "Limpar" o checklist para recomeçar.
*   Opção de "Salvar" o estado atual do checklist (localStorage ou exportar para JSON).
*   Opção de "Imprimir" ou "Gerar PDF" do diagnóstico preenchido e das recomendações.

## 8. Próximos Passos no Desenvolvimento

1.  Converter os arquivos Markdown do checklist e mapeamento para formato JSON.
2.  Estruturar os componentes React básicos (`App`, `ChecklistPrincipal`, `ComponenteItem`, `PerguntaItem`, `PainelRecomendacoes`).
3.  Implementar a lógica de gerenciamento de estado para as respostas do checklist.
4.  Implementar a lógica de exibição das recomendações com base no estado.
5.  Estilizar os componentes.
6.  Testar a funcionalidade e usabilidade.

Este planejamento servirá como guia para o desenvolvimento do site interativo.
