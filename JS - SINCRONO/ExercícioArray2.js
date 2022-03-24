// Exercício:
// Neste exercício, criaremos uma função que rotaciona o nosso vetor. Levaremos em consideração as letras do alfabeto, de A a E.


// O que queremos que aconteça é: rotacionar o vetor a quantidade de vezes indicada. Essa quantidade será representada pela letra Q.

// Caso o valor apresentado por Q for 1, o array deverá rotacionar um elemento:

// ["E", "A", "B", "C", "D"]
// Para realizar esse exercício, você precisará:
// Criar uma função rotacao(), que receberá dois parâmetros. O vetor e a quantidade
// Adicione um índice para percorrer o vetor;
// Caso o vetor passado por parâmetro for um vetor vazio, retorne um vetor vazio.

let vetorAlfabeto = ["A", "B", "C", "D", "E", "F", "G"];

function rotacao(vetor, quantidade){
    for(let i = 0; i < quantidade; i++){
        vetor.unshift(vetor[vetor.length - 1])
        vetor.pop()
    }
    console.log(vetor)
}
rotacao(vetorAlfabeto, 6)


