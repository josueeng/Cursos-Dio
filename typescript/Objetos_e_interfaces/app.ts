interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string;
}
const pessoa: Pessoa = {
    nome: "João",
    idade: 20,
    profissao: undefined
}

const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 25,
    profissao: "Desenvolvedora"
}
const ArrayPessoa: Array<Pessoa> = [
    pessoa, 
    pessoa2]