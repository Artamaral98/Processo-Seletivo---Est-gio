// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)...

class Fibo {
    constructor (num) {
        this.num = num
    }

    fibonacci = (numero) => {
        if (numero <= 1) { 
            return numero
        }
        return this.fibonacci(numero - 1) + this.fibonacci(numero - 2)
    }

    quadrado = () => {
        const sub = 5 * this.num * this.num - 4
        const sum = 5 * this.num * this.num + 4
        const raizSub = parseInt(Math.sqrt(sub))
        const raizSum = parseInt(Math.sqrt(sum))
    
        return raizSub * raizSub === sub || raizSum * raizSum === sum
    }

    isFibo = () => {
        const fiboResult = this.fibonacci(this.num)
        const check = this.quadrado(this.num)

        if (!check) {
            return `${this.num} não pertence a sequência de Fibonacci: Valor final: ${fiboResult}`
        } else {
            return `${this.num} pertence a sequência de Fibonacci. Valor final: ${fiboResult}`
        }
    }
}

const x = new Fibo(7)

console.log(x.isFibo())

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
const countLetter = (palavra) => {
    let counter = 0
    const dividida = palavra.split('')
    
    for (let i of dividida){
        if (i === 'a' || i ==='a'.toUpperCase()){
            counter ++
        }
}
    return `a letra "A" aparece ${counter} vezes na palavra ${palavra}`
}

console.log(countLetter('batata'))


//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); 
//RESPOSTA: SOMA TERÁ O VALOR DE 77

const indice = 12 
let soma = 0 
let k = 1

while (k < indice) {
    k = k + 1;
    soma = soma + k
}

console.log(soma)

/*4) Descubra a lógica e complete o próximo elemento:
RESPOSTA:
a) 1, 3, 5, 7, _9__
b) 2, 4, 8, 16, 32, 64, __128__
c) 0, 1, 4, 9, 16, 25, 36, _49___
d) 4, 16, 36, 64, __100__
e) 1, 1, 2, 3, 5, 8, __13__
f) 2,10, 12, 16, 17, 18, 19, _200___
*/

/*5) RESPOSTA: A chave para o problema está em analisar a temperatura dos interruptores.
Ida número 1:

Primeiramente ligo o interruptor 1 por tempo suficiente para esquentar uma lâmpada e depois o desligo, ligo o interruptor 2 e na mesma hora vou até uma das 3 salas. 
Caso a lâmpada esteja acesa, pertence ao interruptor 2, caso esteja desligada e quente pertence ao interruptor 1, caso esteja desligada e fria pertence ao interruptor 3.

Ida número 2: 

Por já ter a informação acerca de qual lâmpada pertence a um certo interruptor, deixo este desligado, ligo um outro interruptor e deixo outro desligado, 
bastando apenas ir até outra sala e descobrir o interruptor referente às duas lâmpadas restantes.
*/