class Pessoa {
    constructor(
        public nome: string,
        public endereco: string[],
        public cpf: string,
        public rg: string,
        public data_nascimento: Date,
        public email: string,
        public telefone: string) {
    }
    //Método para mostrar os dados
    mostrarDados() {
        console.log('Dados da pessoa:')
        console.log(`Nome: ${this.nome}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`RG: ${this.rg}`)
        console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
    }
}

///

class Funcionario extends Pessoa {
    //metodo construtor da classe
    constructor(
        nome: string,
        email: string,
        telefone: string,
        public cargo: string,
        data_nascimento: Date,
        public matricula: string,
        cpf: string,
        rg: string,
        endereco: string[]) {
        super(nome, endereco, cpf, rg, data_nascimento, email, telefone)
    }
    //metodo especifico da classe
    mostrarDados1() {
        super.mostrarDados()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matrícula: ${this.matricula}`)
    }
}

//instanciando a classe funcionario e criando o objeto funcionario1
const funcionario1 = new Funcionario('Gustavo', 'gusta@gmail.com', '1234567890', 'Médico', new Date('1990-5-13'), '123456789', '123456789', '154899532', ['rua verde'])

console.log(funcionario1.mostrarDados1())

///

class Consulta {
    constructor(
        public data: Date,
        public local: string,
        public medico: Funcionario) {
    }
    mostrarDados2() {
        console.log('Dados da consulta:')
        console.log(`Data: ${this.data.toLocaleDateString('pt-BR')}`)
        console.log(`Local da consulta: ${this.local}`)
        console.log(`Médico: ${funcionario1.nome}`)
    }
}
const consulta1 = new Consulta(new Date('2024-2-19'), 'hospital', funcionario1)
console.log(consulta1.mostrarDados2())

///

class Paciente extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        public convenio: boolean,
        email: string,
        rg: string,
        data_nascimento: Date,
        endereco: string[]) {
        super(nome, endereco, cpf, rg, data_nascimento, email, telefone)
    }
    mostrarDados3() {
        super.mostrarDados()
        console.log('Dados do paciente:')
        console.log(`Convenio: ${this.convenio}`)
    }
}
const paciente1 = new Paciente('Pedro', '1234567890', '0987654321', true, 'pedro@gmail.com', '987456321', new Date('2000-5-12'), ['Rua vermelha'])
console.log(paciente1.mostrarDados3())