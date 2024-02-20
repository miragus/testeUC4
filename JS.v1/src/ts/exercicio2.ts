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
}

const livro1 = new Livro('Cabeça Fria, Coração Quente', 'Abel Ferreira', 'Garoa Livros', 'Biografia', 'Caim e Abel', new Date('2022-11-13'), '7000 de 20000')

console.log(livro1)
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
}

const usuario1 = new Usuario('George', '31', '0321654987', '0123456789', ['Rua Branco e Verde, ' + 'Bairro: Potengi, ' + 'Numero: 2121'], 'jojikusunoki@gmail.com', new Date('2023-1-20'), new Date('2023-2-13'))

console.log(usuario1)

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
}
const emprestimo1 = new EmprestimoLivros(new Date('2023-1-12'), new Date('2023-2-15'), usuario1, 'Berserk')

console.log(emprestimo1)