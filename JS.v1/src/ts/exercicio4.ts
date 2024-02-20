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
}
const projeto1 = new CadastroProjeto('em andamento', 'desenvolvimento app bom', 'deselvolver um app', 'dudu e cesar', 'atingir o objetivo', new Date('2024-07-07'))
console.log(projeto1)

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
}
const tarefas1 = new ControleTarefas('Guilherme', new Date('2025-1-1'), 'auxiliar usuarios', 'em desenvolvimento', new Date('2024-1-1'))
console.log(tarefas1)

class Comunicacao {
    mensagens: string
    arquivos: string
    registros: string
    constructor(mensagens: string, arquivos: string, registros: string) {
        this.mensagens = mensagens,
            this.arquivos = arquivos,
            this.registros = registros
    }
}
const comunica1 = new Comunicacao('Bom dia', 'documentos', '10000 mensagens')
console.log(comunica1)