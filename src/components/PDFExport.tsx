import { jsPDF } from 'jspdf'

interface Pergunta {
  id: string
  texto: string
  subTexto: string | null
  status: string
  observacoes: string
}

interface Componente {
  id: string
  nome: string
  perguntas: Pergunta[]
  observacoesGerais: string
}

export const exportToPDF = (componentes: Componente[]) => {
  const doc = new jsPDF()
  let yPos = 20

  // Título
  doc.setFontSize(20)
  doc.text('Checklist Estratégico', 20, yPos)
  yPos += 20

  componentes.forEach((componente, index) => {
    // Verifica se precisa adicionar uma nova página
    if (yPos > 250) {
      doc.addPage()
      yPos = 20
    }

    // Nome do componente
    doc.setFontSize(16)
    doc.text(componente.nome, 20, yPos)
    yPos += 10

    // Observações gerais
    if (componente.observacoesGerais) {
      doc.setFontSize(12)
      doc.text('Observações Gerais:', 20, yPos)
      yPos += 7
      doc.setFontSize(10)
      const observacoesLines = doc.splitTextToSize(componente.observacoesGerais, 170)
      doc.text(observacoesLines, 20, yPos)
      yPos += observacoesLines.length * 5 + 5
    }

    // Perguntas
    componente.perguntas.forEach((pergunta, pIndex) => {
      // Verifica se precisa adicionar uma nova página
      if (yPos > 250) {
        doc.addPage()
        yPos = 20
      }

      doc.setFontSize(12)
      const perguntaLines = doc.splitTextToSize(`${pIndex + 1}. ${pergunta.texto}`, 170)
      doc.text(perguntaLines, 20, yPos)
      yPos += perguntaLines.length * 5 + 5

      if (pergunta.subTexto) {
        doc.setFontSize(10)
        const subTextoLines = doc.splitTextToSize(pergunta.subTexto, 160)
        doc.text(subTextoLines, 25, yPos)
        yPos += subTextoLines.length * 5 + 5
      }

      doc.setFontSize(10)
      doc.text(`Status: ${pergunta.status || 'Não respondido'}`, 25, yPos)
      yPos += 5

      if (pergunta.observacoes) {
        const obsLines = doc.splitTextToSize(`Observações: ${pergunta.observacoes}`, 160)
        doc.text(obsLines, 25, yPos)
        yPos += obsLines.length * 5 + 5
      }

      yPos += 5
    })

    yPos += 10
  })

  // Salva o PDF
  doc.save(`checklist_estrategico_${new Date().toISOString().split('T')[0]}.pdf`)
} 