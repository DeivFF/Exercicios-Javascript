/*
  01
  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(true, false)
console.log(!true, !false)

/*
  02
  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']
if(!animals.includes('leão')){
    console.log('Leão não existe no array')
}else{
    console.log('Existe um leão no array animals')
}
/*
  03
  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é total."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]

// for(let i = 0; i < randomNumbers.length; i++){
//     total += randomNumbers[i]
//     console.log(i)
//     if(total <= 400){
//         break
//     }
// }

let total = 0
randomNumbers.sort()
for(let i = 0; i < randomNumbers.length; i++){
    total += randomNumbers[i]
    if(total > 400){
        console.log()
        break
    }
}
console.log("A soma ultrapassou 400. Até aqui, o valor atual é " + total)
/*

  04
  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
for(let i= 0; i<sentence.length; i++){
  if(sentence[i] == 'certeza'){
    sentence.splice(1, 1)
  }
}
console.log(sentence.join(' '))


/*
  05
  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:
  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

let stringArr = []
const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
for(let i= 0; i < randomValues.length; i++){
  if(typeof randomValues[i] == 'string'){
    stringArr.push(randomValues[i])
  }
}
stringArr.splice(2,0,'e')
const arr5 = stringArr.slice(0,4).join(' ')
console.log(arr5)

