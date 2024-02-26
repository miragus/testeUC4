abstract class Pessoa {
    constructor(
        private nome: string,
        private endereco: string[],
        private cpf: string,
        private rg: string,
        private data_nascimento: Date,
        private email: string,
        private telefone: string) {
    }
    //Método para mostrar os dados
    mostrarDados() {
      
    }
    
    
    getCpf(): string {
        return this.cpf
    }
   
    getEndereco(): string[] {
        return this.endereco
    }
   
    getTelefone(): string {
        return this.telefone
    }
    
    getRg(): string {
        return this.rg
    }
    getNome(): string{
        return this.nome
    }
    getEmail(): string{
        return this.email
    }
    getData(): Date{
        return this.data_nascimento
    }
} 

///

export class Funcionario extends Pessoa {
    //metodo construtor da classe
    constructor(
        nome: string,
        email: string,
        telefone: string,
        private cargo: string,
        data_nascimento: Date,
        private matricula: string,
        cpf: string,
        rg: string,
        endereco: string[]) {
        super(nome, endereco, cpf, rg, data_nascimento, email, telefone)
    }
    //metodo especifico da classe
    mostrarDados() {
        //super.mostrarDados()
        console.log('Dados do funcionário:')
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matrícula: ${this.matricula}`)
        console.log(`Nome: ${super.getNome()}`)
        console.log(`Endereço: ${super.getEndereco()}`)
        console.log(`CPF: ${super.getCpf()}`)
        console.log(`RG: ${super.getRg()}`)
        console.log(`Data de nascimento: ${super.getData().toLocaleDateString('pt-BR')}`)
        console.log(`E-mail: ${super.getEmail()}`)
        console.log(`Telefone: ${super.getTelefone()}`)
    }
}

//instanciando a classe funcionario e criando o objeto funcionario1
const funcionario1 = new Funcionario('Gustavo', 'gusta@gmail.com', '1234567890', 'Médico', new Date('1990-5-13'), '123456789', '45678931', '154899532', ['rua verde'])
//funcionario1.setEmail('gustavo@gmail.com')
//console.log(funcionario1.getEmail())
funcionario1.mostrarDados()


console.log('==================================================')

class Consulta {
    constructor(
        private data: Date,
        private local: string,
        private medico: Funcionario) {
    }
    mostrarDados2() {
        console.log('Dados da consulta:')
        console.log(`Data: ${this.data.toLocaleDateString('pt-BR')}`)
        console.log(`Local da consulta: ${this.local}`)
        console.log(`Médico: ${this.medico}`)
    }
}
const consulta1 = new Consulta(new Date('2024-2-19'), 'hospital', funcionario1)
consulta1.mostrarDados2()

console.log('==================================================')


class Paciente extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        private convenio: boolean,
        email: string,
        rg: string,
        data_nascimento: Date,
        endereco: string[]) {
        super(nome, endereco, cpf, rg, data_nascimento, email, telefone)
    }
    mostrarDados() {
        //super.mostrarDados()
        console.log('Dados do paciente:')
        console.log(`Convenio: ${this.convenio}`)
        console.log(`Nome: ${super.getNome()}`)
        console.log(`Endereço: ${super.getEndereco()}`)
        console.log(`CPF: ${super.getCpf()}`)
        console.log(`RG: ${super.getRg()}`)
        console.log(`Data de nascimento: ${super.getData().toLocaleDateString('pt-BR')}`)
        console.log(`E-mail: ${super.getEmail()}`)
        console.log(`Telefone: ${super.getTelefone()}`)
    }
}
const paciente1 = new Paciente('Pedro', '1234567890', '0987654321', true, 'pedro@gmail.com', '987456321', new Date('2000-5-12'), ['Rua vermelha'])
paciente1.mostrarDados()