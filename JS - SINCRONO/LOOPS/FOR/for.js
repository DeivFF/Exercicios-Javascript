//01. Crie um array que tenha nomes de 7 pessoas e mostre no console o nome de
//cada pessoa, uma de cada vez.
const nomes = ['Rafael', 'Paulo', 'Joao', 'Lucas', 'Artur', 'Pedro']
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// 02. Crie um array que tenha 7 números e mostre no console cada número somado de +1.
const numeros = [1,2,3,4,5,6]
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i] + 1)
}

// 03. Crie uma string e mostre no console ela letra por letra.
const nome = 'Deivide'
for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}


// desafio. Crie um script que pergunte 3 números ao usuário, coloque em um array,
// depois exiba tal array.
// Modifique os elementos do array de modo a sequência de números ficar do
// contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1
const num =  window.prompt('digite 3 numeros')
let arrayNum = num.split("")
arrayNum.reverse()
for(let i = 0; i < arrayNum.length; i++){
    console.log(arrayNum[i])
}

