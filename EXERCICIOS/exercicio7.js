/*
  01
  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
const car = {
    name: 'Paula',
    brand: 'Honda',
    colors: ['azul', 'preto', 'rosa'],
    isRunning: false,
    run: ()=>{
        car.isRunning = true
        return `${car.name} está em movimento`
    },
    stop: ()=>{
        car.isRunning = false
        return `${car.name} está parada`
    },
    getColorsMessage: ()=>{
        return `${car.name} está disponível nas cores ${car.colors[0]} ${car.colors[1]} e ${car.colors[2]}`
    }
}
/*
  02
  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/

console.log(car.isRunning)
console.log(car.run())
console.log(car.isRunning)
/*
  03
  - Faça o carro parar e exiba no console se ele realmente está parado.
*/

console.log(car.stop())
console.log(car.isRunning)
/*
  04
  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(car.getColorsMessage())
/*
  05
  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
console.log('O Carro é um ' + car['brand'] + ' ' + car['name'])