import { useState } from 'react'
import checklistData from './checklistData.json'
import { exportToPDF } from './components/PDFExport'
import './App.css'

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

function App() {
  const [componentes, setComponentes] = useState<Componente[]>(checklistData)
  const [componenteAtual, setComponenteAtual] = useState(0)
  const [mensagem, setMensagem] = useState('')

  const atualizarStatus = (componenteIndex: number, perguntaIndex: number, status: string) => {
    const novosComponentes = [...componentes]
    novosComponentes[componenteIndex].perguntas[perguntaIndex].status = status
    setComponentes(novosComponentes)
  }

  const atualizarObservacoes = (componenteIndex: number, perguntaIndex: number, observacoes: string) => {
    const novosComponentes = [...componentes]
    novosComponentes[componenteIndex].perguntas[perguntaIndex].observacoes = observacoes
    setComponentes(novosComponentes)
  }

  const atualizarObservacoesGerais = (componenteIndex: number, observacoes: string) => {
    const novosComponentes = [...componentes]
    novosComponentes[componenteIndex].observacoesGerais = observacoes
    setComponentes(novosComponentes)
  }

  const salvarRespostas = () => {
    const data = JSON.stringify(componentes, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `checklist_respostas_${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setMensagem('Respostas salvas com sucesso!')
    setTimeout(() => setMensagem(''), 3000)
  }

  const exportarPDF = () => {
    try {
      exportToPDF(componentes)
      setMensagem('PDF gerado com sucesso!')
      setTimeout(() => setMensagem(''), 3000)
    } catch (error) {
      setMensagem('Erro ao gerar PDF. Tente novamente.')
      setTimeout(() => setMensagem(''), 3000)
    }
  }

  const limparRespostas = () => {
    if (window.confirm('Tem certeza que deseja limpar todas as respostas?')) {
      const novosComponentes = componentes.map(componente => ({
        ...componente,
        observacoesGerais: '',
        perguntas: componente.perguntas.map(pergunta => ({
          ...pergunta,
          status: '',
          observacoes: ''
        }))
      }))
      setComponentes(novosComponentes)
      setMensagem('Respostas limpas com sucesso!')
      setTimeout(() => setMensagem(''), 3000)
    }
  }

  const calcularProgresso = () => {
    const totalPerguntas = componentes.reduce((acc, comp) => acc + comp.perguntas.length, 0)
    const perguntasRespondidas = componentes.reduce((acc, comp) => 
      acc + comp.perguntas.filter(p => p.status !== '').length, 0)
    return Math.round((perguntasRespondidas / totalPerguntas) * 100)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Checklist Estratégico</h1>
        <div className="flex gap-4">
          <button
            onClick={exportarPDF}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Exportar PDF
          </button>
          <button
            onClick={salvarRespostas}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Salvar JSON
          </button>
          <button
            onClick={limparRespostas}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Limpar Respostas
          </button>
        </div>
      </div>

      {mensagem && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {mensagem}
        </div>
      )}

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Componente:</label>
          <span className="text-sm text-gray-600">
            Progresso: {calcularProgresso()}%
          </span>
        </div>
        <select 
          className="w-full p-2 border rounded"
          value={componenteAtual}
          onChange={(e) => setComponenteAtual(Number(e.target.value))}
        >
          {componentes.map((componente, index) => (
            <option key={componente.id} value={index}>
              {componente.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">{componentes[componenteAtual].nome}</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Observações Gerais:</label>
          <textarea
            className="w-full p-2 border rounded"
            value={componentes[componenteAtual].observacoesGerais}
            onChange={(e) => atualizarObservacoesGerais(componenteAtual, e.target.value)}
            rows={3}
            placeholder="Digite suas observações gerais sobre este componente..."
          />
        </div>

        {componentes[componenteAtual].perguntas.map((pergunta, index) => (
          <div key={pergunta.id} className="mb-6 p-4 border rounded hover:shadow-md transition-shadow">
            <p className="font-medium mb-2">{pergunta.texto}</p>
            {pergunta.subTexto && (
              <p className="text-sm text-gray-600 mb-2">{pergunta.subTexto}</p>
            )}
            
            <div className="flex gap-4 mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`status-${pergunta.id}`}
                  value="sim"
                  checked={pergunta.status === "sim"}
                  onChange={() => atualizarStatus(componenteAtual, index, "sim")}
                  className="mr-2"
                />
                Sim
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`status-${pergunta.id}`}
                  value="não"
                  checked={pergunta.status === "não"}
                  onChange={() => atualizarStatus(componenteAtual, index, "não")}
                  className="mr-2"
                />
                Não
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`status-${pergunta.id}`}
                  value="parcial"
                  checked={pergunta.status === "parcial"}
                  onChange={() => atualizarStatus(componenteAtual, index, "parcial")}
                  className="mr-2"
                />
                Parcial
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Observações:</label>
              <textarea
                className="w-full p-2 border rounded"
                value={pergunta.observacoes}
                onChange={(e) => atualizarObservacoes(componenteAtual, index, e.target.value)}
                rows={2}
                placeholder="Digite suas observações sobre esta pergunta..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
