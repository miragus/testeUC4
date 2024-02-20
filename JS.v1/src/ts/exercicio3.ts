class CadastroConta {
    saldo: string
    tipo: string
    titularidade: string
    email: string
    cpf: string
    historico: string
    constructor(saldo: string, tipo: string, titularidade: string, email: string, cpf: string, historico: string) {
        this.saldo = saldo,
            this.tipo = tipo,
            this.titularidade = titularidade,
            this.email = email,
            this.cpf = cpf,
            this.historico = historico
    }
}
const cadastroconta1 = new CadastroConta('5000', 'corrente', 'Cristian', 'cris@gmail.com', '7896541230', '3000')

console.log(cadastroconta1)

class Controle {
    registro: string
    receitas: string
    categoria: string
    gastos: string
    relatorios: string
    constructor(registro: string, receitas: string, categoria: string, gastos: string, relatorios: string) {
        this.registro = registro,
            this.receitas = receitas,
            this.categoria = categoria,
            this.gastos = gastos,
            this.relatorios = relatorios
    }
}
const controle1 = new Controle('5000', '6000', 'mercado', '2000', 'compras')

console.log(controle1)

class Planejamento {
    metas: string
    economia: string
    dividas: string
    progresso: string
    constructor(metas: string, economia: string, dividas: string, progresso: string) {
        this.metas = metas,
            this.economia = economia,
            this.dividas = dividas,
            this.progresso = progresso
    }
}
const planejamento1 = new Planejamento('10000', '500', '200', '3500')

console.log(planejamento1)