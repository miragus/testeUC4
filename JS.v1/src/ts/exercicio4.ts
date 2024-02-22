class CadastroProjeto {
    constructor(
        public status: string,
        public nome: string,
        public descricao: string,
        public equipe: string,
        public marcos: string,
        public prazos: Date) {
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

///

class ControleTarefas {
    constructor(
        public atribuicao: string,
        public conclusao: Date,
        public descricao: string,
        public status: string,
        public prazosVencidos: Date) {
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

///

class Comunicacao {
    constructor(
        public mensagens: string,
        public arquivos: string,
        public registros: string) {
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