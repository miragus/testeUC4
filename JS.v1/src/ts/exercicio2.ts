/*class InfoUsuario {
    constructor(
        public nome: string,
        public idade: string,
        public cpf: string,
        public telefone: string,
        public endereco: Array<string>,
        public email: string,
        public emprestimo: Date,
        public devolucao: Date) {
    }
}

///

class Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public editora: string,
        public categoria: string,
        public creditos: string,
        public dataLancamento: Date,
        public quantidadesDisponiveis: string) {
    }
    mostrarDados() {
        console.log('Dados do livro:')
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Editora: ${this.editora}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Créditos: ${this.creditos}`)
        console.log(`Data de lançamento: ${this.dataLancamento.toLocaleDateString('pt-BR')}`)
        console.log(`Disponíveis: ${this.quantidadesDisponiveis}`)
    }
}
const livro1 = new Livro('Cabeça Fria, Coração Quente', 'Abel Ferreira', 'Garoa Livros', 'Biografia', 'Caim e Abel', new Date('2022-11-13'), '7000 de 20000')
console.log(livro1.mostrarDados())

///

class Usuario extends InfoUsuario {
    constructor(
        nome: string,
        idade: string,
        cpf: string,
        telefone: string,
        endereco: Array<string>,
        email: string,
        emprestimo: Date,
        devolucao: Date) {
        super(nome, idade, cpf, telefone, endereco, email, emprestimo, devolucao)
    }
    mostrarDados2() {
        console.log('Dados do usuário:')
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Telefone ${this.telefone}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Data de empréstimo: ${this.emprestimo.toLocaleDateString('pt-BR')}`)
        console.log(`Data de devolução: ${this.devolucao.toLocaleDateString('pt-BR')}`)
    }
}
const usuario1 = new Usuario('George', '31', '0321654987', '0123456789', ['Rua Branco e Verde, ' + 'Bairro: Potengi, ' + 'Numero: 2121'], 'jojikusunoki@gmail.com', new Date('2023-1-20'), new Date('2023-2-13'))
console.log(usuario1.mostrarDados2())

///

class EmprestimoLivros extends InfoUsuario {
    constructor(
        emprestimo: Date,
        devolucao: Date,
        nome: string,
        idade: string,
        cpf: string,
        telefone: string,
        endereco: Array<string>,
        email: string,
        public livroEmprest: string) {
        super(nome, idade, cpf, telefone, endereco, email, emprestimo, devolucao)
    }
    mostrarDados3() {
        console.log('Dados do empréstimo:')
        console.log(`Data do empréstimo: ${this.emprestimo.toLocaleDateString('pt-BR')}`)
        console.log(`Data da devolução: ${this.devolucao.toLocaleDateString('pt-BR')}`)
        console.log(`Informações do usuário: ${this.}`)
        console.log(`Livro emprestado: ${this.livroEmprest}`)
    }
}
const emprestimo1 = new EmprestimoLivros(new Date('2023-1-12'), new Date('2023-2-15'), usuario1, 'Berserk')
console.log(emprestimo1.mostrarDados3())*/