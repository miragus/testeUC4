abstract class Dono {
    constructor(
        private nome: string,
        private cpf: string,
        private email: string,
        private rg: string,
        private telefone: string) {
    }
    mostrarDados() {
    
    }
    getNome(): string{
        return this.nome
    }
    getCpf(): string{
        return this.cpf
    }
    getRg(): string{
        return this.rg
    }
    getEmail(): string{
        return this.email
    }
    getTelefone(): string{
        return this.telefone
    }
}
abstract class Conta {
    constructor(
        private nome: string,
        private cnpj: string,
        private cpf: string,
        private email: string,
        private telefone: string) {
    }
    mostrarDados() {
      
    }
    getNome(): string{
        return this.nome
    }
    getCnpj(): string{
        return this.cnpj
    }
    getCpf(): string{
        return this.cpf
    }
    getEmail(): string{
        return this.email
    }
    getTelefone(): string{
        return this.telefone
    }

}

class CadastroConta extends Dono {
    constructor(
        nome: string,
        cpf: string,
        email: string,
        rg: string,
        telefone: string,
        private titularidade: string,
        private tipo: string,
        private saldo: string) {
        super(nome, cpf, email, rg, telefone)
    }
    mostrarDados() {
        super.mostrarDados()
        console.log('Dados do cadastro:')
        console.log(`Saldo: ${this.saldo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Titularidade: ${this.titularidade}`)
        console.log(`E-mail: ${super.getEmail()}`)
        console.log(`CPF: ${super.getCpf()}`)
        console.log(`Nome: ${super.getNome()}`)
        console.log(`Telefone: ${super.getTelefone()}`)
        console.log(`RG: ${super.getRg()}`)
    }
}
const cadastroconta1 = new CadastroConta('Cris', '1957846321', 'cris@gmail.com', '987654', '123456789', 'Cris', 'salário', '+50')
cadastroconta1.mostrarDados()
console.log('============================================')
///

class Controle extends Conta {
    constructor(
        private receitas: string,
        private transacao: string,
        private categoria: string,
        private despesas: string,
        private relatorios: string,
        private progresso: string,
        private historico: string,
        nome: string,
        cnpj: string,
        cpf: string,
        email: string,
        telefone: string) {
        super(nome, cnpj, cpf, email, telefone)
    }
    mostrarDados() {
        super.mostrarDados()
        console.log('Dados de controle:')
        console.log(`Receitas: ${this.receitas}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Despesas: ${this.despesas}`)
        console.log(`Relatórios: ${this.relatorios}`)
        console.log(`Transações: ${this.transacao}`)
        console.log(`Progresso: ${this.progresso}`)
        console.log(`Histórico: ${this.historico}`)
        console.log(`Nome: ${super.getNome()}`)
        console.log(`Telefone: ${super.getTelefone()}`)
        console.log(`E-mail: ${super.getEmail()}`)
        console.log(`CPF: ${super.getCpf()}`)
        console.log(`CNPJ: ${super.getCnpj()}`)
        
        

    }   
}
const controle1 = new Controle('5000', 'compras no mercado', 'alimentação', '-2000', 'fluxo de caixa', '500', '15 compras no dia 01/02', 'Cris', '123456789', '987654321', 'cris@gmail.com', '1235489' )
controle1.mostrarDados()
console.log('============================================')
///

class Planejamento{
    constructor(
        private metas: string,
        private economia: string,
        private dividas: string,
        private progresso: string) {
            }
    mostrarDados() {
        console.log('Dados de planejamento:')
        console.log(`Metas: ${ this.metas }`)
        console.log(`Economia: ${ this.economia }`)
        console.log(`Dívidas: ${ this.dividas }`)
        console.log(`Progresso: ${ this.progresso }`)
    }
}
const planejamento1 = new Planejamento('10000', '500', '200', '3500')
planejamento1.mostrarDados()

