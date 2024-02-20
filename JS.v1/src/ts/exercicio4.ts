class CadastroProjeto {
    status: string
    nome: string
    descricao: string
    equipe: string
    marcos: string
    prazos: Date
    constructor(status: string, nome: string, descricao: string, equipe: string, marcos: string, prazos: Date) {
        this.status = status,
            this.nome = nome,
            this.descricao = descricao,
            this.equipe = equipe,
            this.marcos = marcos,
            this.prazos = prazos
    }
    mostrarDados() {
        console.log('Dados do cadastro do projeto:')
        console.log(`Status: ${this.status}`)
        console.log(`Nome do projeto: ${this.nome}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Equipe: ${this.equipe}`)
        console.log(`Marcos: ${this.marcos}`)
        console.log(`Prazo: ${this.prazos.toLocaleDateString('pt-BR')}`)
    }
}
const projeto1 = new CadastroProjeto('em andamento', 'desenvolvimento app bom', 'deselvolver um app', 'dudu e cesar', 'atingir o objetivo', new Date('2024-07-07'))
console.log(projeto1.mostrarDados())

class ControleTarefas {
    atribuicao: string
    conclusao: Date
    descricao: string
    status: string
    prazosVencidos: Date
    constructor(atribuicao: string, conclusao: Date, descricao: string, status: string, prazosVencidos: Date) {
        this.atribuicao = atribuicao,
            this.conclusao = conclusao,
            this.descricao = descricao,
            this.status = status,
            this.prazosVencidos = prazosVencidos
    }
    mostrarDados2() {
        console.log('Dados do controle de tarefas:')
        console.log(`Atribuição: ${this.atribuicao}`)
        console.log(`Conclusão: ${this.conclusao.toLocaleDateString('pt-BR')}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Status: ${this.status}`)
        console.log(`Prazo vencido: ${this.prazosVencidos.toLocaleDateString('pt-BR')}`)
    }
}
const tarefas1 = new ControleTarefas('Guilherme', new Date('2025-1-1'), 'auxiliar usuarios', 'em desenvolvimento', new Date('2024-1-1'))
console.log(tarefas1.mostrarDados2())

class Comunicacao {
    mensagens: string
    arquivos: string
    registros: string
    constructor(mensagens: string, arquivos: string, registros: string) {
        this.mensagens = mensagens,
            this.arquivos = arquivos,
            this.registros = registros
    }
    mostrarDados3() {
        console.log('Dados da comunicação:')
        console.log(`Mensagens: ${this.mensagens}`)
        console.log(`Arquivos: ${this.arquivos}`)
        console.log(`Registros: ${this.registros}`)
    }
}
const comunica1 = new Comunicacao('Bom dia', 'documentos', '10000 mensagens')
console.log(comunica1.mostrarDados3())