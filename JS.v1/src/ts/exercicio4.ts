class Colaboradores{
    constructor(
        private equipe: string,
        private lideres: string,
        private cargos: string){
    }
    mostrarDados(){

    }
    getEquipe(): string{
        return this.equipe
    }
    getLideres(): string{
        return this.lideres
    }
    getCargo(): string{
        return this.cargos
    }
}
class Tarefas{
    constructor(
        private conclusao: Date,
        private descricao: string,
        private status: string,
        private prazosVencidos: Date) {
    }
    
    getConclusao(): Date{
        return this.conclusao
    }
    getDescricao(): string{
        return this.descricao
    }
    getStatus(): string{
        return this.status
    }
    getPrazos(): Date{
        return this.prazosVencidos
    }
    
}


class CadastroProjeto extends Colaboradores{
    constructor(
        private status: string,
        private nome: string,
        private descricao: string,
        private marcos: string,
        private prazos: Date,
        equipe: string,
        lideres: string,
        cargos: string) {
            super(equipe, lideres, cargos)
    }
    mostrarDados() {
        console.log('Dados do cadastro do projeto:')
        console.log(`Status: ${this.status}`)
        console.log(`Nome do projeto: ${this.nome}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Equipe: ${super.getEquipe()}`)
        console.log(`Lider: ${super.getLideres()}`)
        console.log(`Cargos: ${super.getCargo()}`)
        console.log(`Marcos: ${this.marcos}`)
        console.log(`Prazo: ${this.prazos.toLocaleDateString('pt-BR')}`)
    }
}
const projeto1 = new CadastroProjeto('em andamento', 'Smithereens', 'deselvolver um app', 'atingir o objetivo', new Date('2024-07-07'), 'pedro e gabriel', 'miguel', 'desenvolvedores')
projeto1.mostrarDados()
console.log('============================================')
///

class ControleTarefas extends Tarefas{
    constructor(
         conclusao: Date,
         descricao: string,
         status: string,
         prazosVencidos: Date,
         private responsaveis: string,
         private prioridade: string) {
            super(conclusao, descricao, status, prazosVencidos)
    }
    mostrarDados2() {
        console.log('Dados do controle de tarefas:')
        console.log(`Conclusão: ${super.getConclusao().toLocaleDateString('pt-BR')}`)
        console.log(`Descrição: ${super.getDescricao()}`)
        console.log(`Status: ${super.getStatus()}`)
        console.log(`Prazo vencido: ${super.getPrazos().toLocaleDateString('pt-BR')}`)
        console.log(`Responsável: ${this.responsaveis}`)
        console.log(`Prioridade: ${this.prioridade}`)
    }
}
const tarefas1 = new ControleTarefas(new Date('2025-1-1'), 'auxiliar usuarios', 'em desenvolvimento', new Date('2024-1-1'), 'miguel', 'concluir o inicio')
tarefas1.mostrarDados2()
console.log('============================================')
///

class Comunicacao extends Colaboradores{
    constructor(
        private mensagens: string,
        private arquivos: string,
        private registros: string,
        equipe: string,
        lideres: string,
        cargos: string) {
            super(equipe, lideres, cargos)
    }
    mostrarDados3() {
        console.log('Dados da comunicação:')
        console.log(`Mensagens: ${this.mensagens}`)
        console.log(`Arquivos: ${this.arquivos}`)
        console.log(`Registros: ${this.registros}`)
        console.log(`Equipe: ${super.getEquipe()}`)
        console.log(`Lider: ${super.getLideres()}`)
        console.log(`Cargos: ${super.getCargo()}`)
    }
}
const comunica1 = new Comunicacao('Via whatsapp', 'documentos', '10000 mensagens', 'pedro e gabriel', 'miguel', 'desenvolvedores')
comunica1.mostrarDados3()