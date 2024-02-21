class Pessoa {
    nome: string;
    endereco: string[];
    cpf: string;
    rg: string;
    data_nascimento: Date;
    email: string;
    telefone: string;
    constructor(nome: string, endereco: string[], cpf: string, rg: string, data_nascimento: Date, email: string, telefone: string) {
        this.nome = nome,
            this.endereco = endereco,
            this.cpf = cpf,
            this.rg = rg,
            this.data_nascimento = data_nascimento,
            this.email = email,
            this.telefone = telefone
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

class Funcionario extends Pessoa {
    //atributos próprios da classe funcionário
    cargo: string;
    matricula: string;


    //método construtor da classe
    constructor(nome: string, email: string, telefone: string, cargo: string, data_nascimento: Date, matricula: string, cpf: string, rg: string, endereco: string[]) {
        super(nome, endereco, cpf, rg, data_nascimento, email, telefone)
        this.cargo = cargo;
        this.matricula = matricula;
    }

    mostrarDados1() {
        super.mostrarDados()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matrícula: ${this.matricula}`)

    }
}


const funcionario1 = new Funcionario('Gustavo', 'gusta@gmail.com', '1234567890', 'Médico', new Date('1990-5-13'), '123456789', '123456789', '154899532', ['rua verde'])

console.log(funcionario1.mostrarDados1())



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

class Paciente extends Pessoa {
    convenio: boolean;
    constructor(nome: string, cpf: string, telefone: string, convenio: boolean, email: string, rg: string, data_nascimento: Date, endereco: string[]) {
        super(nome, endereco, cpf, rg, data_nascimento, email, telefone)
        this.convenio = convenio
    }
    mostrarDados3() {
        super.mostrarDados()
        console.log('Dados do paciente:')
        console.log(`Convenio: ${this.convenio}`)
    }
}
const paciente1 = new Paciente('Pedro', '1234567890', '0987654321', true, 'pedro@gmail.com', '987456321', new Date('2000-5-12'), ['Rua vermelha'])

console.log(paciente1.mostrarDados3())