class CadastroConta {
    constructor(
       public saldo: string, 
       public tipo: string, 
       public titularidade: string, 
       public email: string, 
       public cpf: string, 
       public historico: string) {
    }
    mostrarDados() {
        console.log('Dados do cadastro:')
        console.log(`Saldo: ${this.saldo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Titularidade: ${this.titularidade}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Histórico: ${this.historico}`)
    }
}
const cadastroconta1 = new CadastroConta('5000', 'corrente', 'Cristian', 'cris@gmail.com', '7896541230', '3000')
console.log(cadastroconta1.mostrarDados())

///

class Controle {
    constructor(
       public registro: string, 
       public receitas: string, 
       public categoria: string, 
       public gastos: string, 
       public relatorios: string) {
    }
    mostrarDados2() {
        console.log('Dados de controle:')
        console.log(`Registro: ${this.registro}`)
        console.log(`Receitas: ${this.receitas}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Gastos: ${this.gastos}`)
        console.log(`Relatórios: ${this.relatorios}`)
    }
}
const controle1 = new Controle('5000', '6000', 'mercado', '2000', 'compras')
console.log(controle1.mostrarDados2())

///

class Planejamento {
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