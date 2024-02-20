class Livro {
    titulo: string
    autor: string
    editora: string
    categoria: string
    creditos: string
    dataLancamento: Date
    quantidadesDisponiveis: string
    constructor(titulo: string, autor: string, editora: string, categoria: string, creditos: string, dataLancamento: Date, quantidadesDisponiveis: string) {
        this.titulo = titulo,
            this.autor = autor,
            this.editora = editora,
            this.categoria = categoria,
            this.creditos = creditos,
            this.dataLancamento = dataLancamento,
            this.quantidadesDisponiveis = quantidadesDisponiveis
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
//

class Usuario {
    nome: string;
    idade: string;
    cpf: string;
    telefone: string;
    endereco: Array<string>;
    email: string;
    emprestimo: Date;
    devolucao: Date;

    constructor(nome: string, idade: string, cpf: string, telefone: string, endereco: Array<string>, email: string, emprestimo: Date, devolucao: Date) {
        this.nome = nome,
            this.idade = idade,
            this.cpf = cpf,
            this.telefone = telefone,
            this.endereco = endereco,
            this.email = email,
            this.emprestimo = emprestimo
        this.devolucao = devolucao
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

//

class EmprestimoLivros {
    dataEmprestimo: Date;
    dataDevolucao: Date;
    infoUsuario: Usuario;
    livroEmprest: string;

    constructor(dataEmprestimo: Date, dataDevolucao: Date, infoUsuario: Usuario, livroEmprest: string) {

        this.dataEmprestimo = dataEmprestimo,
            this.dataDevolucao = dataDevolucao,
            this.infoUsuario = infoUsuario,
            this.livroEmprest = livroEmprest
    }
    mostrarDados3() {
        console.log('Dados do empréstimo:')
        console.log(`Data do empréstimo: ${this.dataEmprestimo.toLocaleDateString('pt-BR')}`)
        console.log(`Data da devolução: ${this.dataDevolucao.toLocaleDateString('pt-BR')}`)
        console.log(`Informações do usuário: ${this.infoUsuario}`)
        console.log(`Livro emprestado: ${this.livroEmprest}`)
    }
}
const emprestimo1 = new EmprestimoLivros(new Date('2023-1-12'), new Date('2023-2-15'), usuario1, 'Berserk')

console.log(emprestimo1.mostrarDados3())