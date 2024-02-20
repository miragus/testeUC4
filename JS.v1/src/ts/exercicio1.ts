class Funcionario {
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    data: Date;
    constructor(nome: string, email: string, telefone: string, cargo: string, data: Date) {
        this.cargo = cargo,
            this.email = email,
            this.telefone = telefone,
            this.nome = nome,
            this.data = data
    }
    mostrarDados() {
        console.log('Dados do funcionário:')
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Data de Nascimento: ${this.data.toLocaleString('pt-BR')}`)
    }
}


const funcionario1 = new Funcionario('Gustavo', 'gusta@gmail.com', '1234567890', 'Médico', new Date('1990-5-13'))

console.log(funcionario1.mostrarDados())



class Consulta {
    data: Date;
    local: string;
    medico: Funcionario;

    constructor(data: Date, local: string, medico: Funcionario) {
        this.data = data,
            this.local = local,
            this.medico = medico
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

//

class Paciente {
    nome: string;
    idade: string;
    cpf: string;
    telefone: string;
    convenio: boolean;
    constructor(nome: string, idade: string, cpf: string, telefone: string, convenio: boolean) {
        this.nome = nome,
            this.idade = idade,
            this.cpf = cpf,
            this.telefone = telefone,
            this.convenio = convenio
    }
    mostrarDados3(){
        console.log('Dados do paciente:')
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Convenio: ${this.convenio}`)
    }
}
const paciente1 = new Paciente('Pedro', '18', '1234567890', '0987654321', true)

console.log(paciente1.mostrarDados3())