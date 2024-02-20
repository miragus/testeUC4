class Funcionario {
    nome: string;
    email: string;
    telefone: string;
    cargo: string;
    constructor(nome: string, email: string, telefone: string, cargo: string) {
        this.cargo = cargo,
            this.email = email,
            this.telefone = telefone,
            this.nome = nome
    }
}

const funcionario1 = new Funcionario('Gustavo', 'gusta@gmail.com', '1234567890', 'Médico')

console.log(funcionario1)

//

class Consulta {
    data: Date;
    local: string;
    medico: Funcionario;

    constructor(data: Date, local: string, medico: Funcionario) {
        this.data = data,
            this.local = local,
            this.medico = medico

    }
}

const consulta1 = new Consulta(new Date('2024-2-19'), 'hospital', funcionario1)

console.log(consulta1)

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
}
const paciente1 = new Paciente('Pedro', '18', '1234567890', '0987654321', true)

console.log(paciente1)