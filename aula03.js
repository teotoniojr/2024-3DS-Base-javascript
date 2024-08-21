//Alguns erros comuns

//const numero; 1º Erro: Não declarar uma constante;


const minhaVar ="oi" // 2º Erro: Não declarar uma variável e chamar no código;
console.log(minhaVar); // exemplo, chamar minhavar com V minúsculo;

console.error("Isso está errado") // 3º "Erro": Você pode declarar um erro com o console.error;

// Condicional abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 17;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
} else {
    console.log("Nescau")
}

//Valor ternário
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
// modo ternário, utilizando a estrutura _____ >= ____ ? ____ : ____
// modo ternário, utilizando a estrutura _____ <= ____ ? ____ : ____
// modo ternário, utilizando a estrutura _____ == ____ ? ____ : ____

//Template string

const nome = "Teotonio";
const idade = 32;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;

console.log(apresentacao)

//template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}`
console.log(apresentacao2)