// Exercício – Letras repetidas

// Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:

// Aqui, temos:
// let vetor = ["a", "b", "a", "a", "c", "b"]
// vetor[0] = "a";
// vetor[1] = "b";
// vetor[2] = "a";
// vetor[3] = "a";
// vetor[4] = "c";
// vetor[5] = "b";
// Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, precisamos retornar este elemento.

// No nosso exercício, faremos:
// Criaremos uma variável que terá o nosso vetor ordenado de forma crescente;
// Criaremos uma variável chamada odd, que receberá futuramente o valor isolado;
// Percorreremos o vetor ordenado;
// Armazenaremos em variáveis o elemento atual e o próximo elemento;
// Se o elemento atual for igual ao próximo, seguimos a iteração;
// Senão, a variável odd recebe o valor isolado.

let vetor = ["a", "b", "a", "a", "c", "b"]

// Criaremos uma variável que terá o nosso vetor ordenado de forma crescente;
// Criaremos uma variável chamada odd, que receberá futuramente o valor isolado;
let vetorOrdenado, odd
vetorOrdenado = vetor.sort()

let vetorArray = []

// Percorreremos o vetor ordenado;
for(let i = 0; i < vetorOrdenado.length; i++){
    
    // Armazenaremos em variáveis o elemento atual e o próximo elemento;
    vetorArray.push(vetorOrdenado[i] + vetorOrdenado[i + 1])

    if(vetorOrdenado[i] == vetorOrdenado[i + 1]){
        //Se o elemento atual for igual ao próximo, seguimos a iteração;
        continue
    }else{
        //Senão, a variável odd recebe o valor isolado.
        odd = vetorOrdenado[i]
    }
}
console.log(vetorArray)
console.log(odd)


