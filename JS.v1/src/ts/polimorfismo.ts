import { Funcionario } from './exercicio1'
/*
class Desenvolvedor extends Funcionario {
    constructor(
        nome: string,
        email: string,
        telefone: string,
        cargo: string,
        data_nascimento: Date,
        matricula: string,
        cpf: string,
        rg: string,
        endereco: string[],
        public id: string) {
        super(nome, email, telefone, cargo, data_nascimento, matricula, cpf, rg, endereco)
    }
    mostrarDados() {
        super.mostrarDados()
        console.log(`ID: ${this.id}`)
        console.log(`Cargo: ${this.cargo}`)
    }
}
const desenvolvedor = new Desenvolvedor('Walter', 'heisenberg@gmail.com', '987456321', 'Desenvolvedor', new Date('1980-9-28'), '154782', '1548495', '1416546', ['Albuquerque', ' New Mexico'], '8616515')
//console.log(desenvolvedor1.mostrarDados())
desenvolvedor.mostrarDados()*/

class DevFrontEnd extends Funcionario{
    constructor(
        nome: string,
        email: string,
        telefone: string,
        cargo: string,
        data_nascimento: Date,
        matricula: string,
        cpf: string,
        rg: string,
        endereco: string[],
        public area: string,
        public funcao: string) {
        super(nome, email, telefone, cargo, data_nascimento, matricula, cpf, rg, endereco)
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Área: ${this.area}`)
        console.log(`Função: ${this.funcao}`)
      
    }
}
const dev1 = new DevFrontEnd('Sam', 'samuel@gmail.com', '944546', 'desenvolvedor', new Date('1984-6-22'), '0012', '15616', '516313', ['Kansas'], 'Frontend', 'criar interface para interação do usuário')
dev1.mostrarDados()
console.log('===================================================')



class DevBackEnd extends Funcionario{
    constructor(
        nome: string,
        email: string,
        telefone: string,
        cargo: string,
        data_nascimento: Date,
        matricula: string,
        cpf: string,
        rg: string,
        endereco: string[],
        public area: string,
        public linguagem: string) {
        super(nome, email, telefone, cargo, data_nascimento, matricula, cpf, rg, endereco)
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Área: ${this.area}`)
        console.log(`Linguagem trabalhada: ${this.linguagem}`)
      
    }
}
const dev2 = new DevBackEnd('Dean', 'dean@gmail.com', '544546', 'desenvolvedor', new Date('1977-2-14'), '0042', '15616', '516313', ['Kansas'], 'Backend', 'Python')
dev2.mostrarDados()
console.log('===================================================')


///

class DevFullstack extends Funcionario{
    constructor(
        nome: string,
        email: string,
        telefone: string,
        cargo: string,
        data_nascimento: Date,
        matricula: string,
        cpf: string,
        rg: string,
        endereco: string[],
        public area: string,
        public experiencia: string) {
        super(nome, email, telefone, cargo, data_nascimento, matricula, cpf, rg, endereco)
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Área: ${this.area}`)
        console.log(`Capacidade: ${this.experiencia}`)
      
    }
}
const dev3 = new DevFullstack('Castiel', 'cass@gmail.com', '77777', 'desenvolvedor', new Date('1777-7-7'), '0077', '77716', '516777', ['Kansas'], 'Fullstack', 'experiencia para lidar tanto com um frontend quanto de um backend de um projeto')
dev3.mostrarDados()



