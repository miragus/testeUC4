class Dono{
    constructor(
       public nome: string,
       public cpf: string,
       public email: string,
       public rg: string,
       public telefone: string){
       }
       mostrarDados(){
        console.log('Dados do cliente:')
        console.log(`Nome: ${this.nome}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`RG: ${this.rg}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`CPF: ${this.cpf}`)
       }
}
class Conta{
    constructor(
        public nome: string,
        public cnpj: string,
        public cpf: string,
        public email: string,
        public telefone: string,
        public tipo_conta: string){
        }
        mostrarDados0(){
            console.log('Dados da conta:')
            console.log(`Nome: ${this.nome}`)
            console.log(`Telefone: ${this.telefone}`)
            console.log(`E-mail: ${this.email}`)
            console.log(`CPF: ${this.cpf}`)
            console.log(`CNPJ: ${this.cnpj}`)
            console.log(`Tipo de conta: ${this.tipo_conta}`)
           }
}

class CadastroConta extends Dono {
    constructor(
        nome: string,
        cpf: string,
        email: string,
        rg: string,
        telefone: string,
        public titularidade: string,
        public tipo: string,
        public saldo: string)
         {
        super(nome, cpf, email, rg, telefone)
    }
    mostrarDados1() {
        super.mostrarDados()
        console.log('Dados do cadastro:')
        console.log(`Saldo: ${this.saldo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Titularidade: ${this.titularidade}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`CPF: ${this.cpf}`)
    }
}
const cadastroconta1 = new CadastroConta('Cris', '1957846321', 'cris@gmail.com', '987654', '123456789', 'Cris', 'salário', '+50')
console.log(cadastroconta1.mostrarDados())

///

class Controle extends Conta{
    constructor(
        public receitas: string,
        public transacao: string,
        public categoria: string,
        public despesas: string,
        public relatorios: string,
        public progresso: string,
        public historico: string,
        nome: string,
        cnpj: string,
        cpf: string,
        email: string,
        telefone: string,
        tipo_conta: string) {
            super(nome, cnpj, cpf, email, telefone, tipo_conta)
    }
    mostrarDados2() {
        super.mostrarDados0()
        console.log('Dados de controle:')
        console.log(`Receitas: ${this.receitas}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Despesas: ${this.despesas}`)
        console.log(`Relatórios: ${this.relatorios}`)
        console.log(`Transações: ${this.transacao}`)
        console.log(`Progresso: ${this.progresso}`)
        console.log(`Histórico: ${this.historico}`)

    }   
}
const controle1 = new Controle('5000', 'compras no mercado', 'alimentação', '-2000', 'fluxo de caixa', '500', '15 compras no dia 01/02', 'Cris', '123456789', '987654321', 'cris@gmail.com', '1235489', 'poupança')
console.log(controle1.mostrarDados2())

///

class Planejamento{
    constructor(
        public metas: string,
        public economia: string,
        public dividas: string,
        public progresso: string) {
            }
    mostrarDados3() {
        console.log('Dados de planejamento:')
        console.log(`Metas: ${this.metas}`)
        console.log(`Economia: ${this.economia}`)
        console.log(`Dívidas: ${this.dividas}`)
        console.log(`Progresso: ${this.progresso}`)
    }
}
const planejamento1 = new Planejamento('10000', '500', '200', '3500')
console.log(planejamento1.mostrarDados3())