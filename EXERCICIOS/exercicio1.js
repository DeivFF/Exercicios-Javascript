//- Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
   for(let i= 1; i<= 5; i++){
        console.log(i)
}

/*
  02 -
  - Escreva um loop (for ou while) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x no console.
  "Esta é a Xª vez que esta frase é exibida no console."
*/
        for(let i = 1; i <=10; i++){
            console.log(`Está é a ${i}ª vez que está frase é exibida no console`)
        }
    
/*
  03 - 
  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = []
for(let i = 0; i < cities.length; i++){
    upperCaseCities.push(cities[i].toUpperCase())
}
console.log(upperCaseCities)

/*
  04 - Comente o console.log acima e:
  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha']
let names2 = []
for(let i= 0; i < names.length; i++){
    names2.push(`<li>${names[i]}</li>`)
}
console.log(names2.join(""))

/*
  05 -
  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/

const numbers = ['91', '5', '30', '97', '83', '31']
let total = 0
for(let i = 0; i < numbers.length; i++){
    total += parseInt(numbers[i])
}
console.log(total == 337)

/*
  06 - 
  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.
  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.
  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

const arrays = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
]

let total1 = 0
for(let i = 0; i < arrays.length; i++){
    for(let z = 0; z < arrays[i].length; z++){
        total1 += arrays[i][z]
    }
}
console.log(total1)