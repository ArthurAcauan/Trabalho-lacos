//atividade for-while
//exercicio interpretação de codigo
//1-
//let valor = 0
//for (let i = 0; i < 5; i++) {
   // valor += i
//}
//console.log(valor);
//o resultado impresso no console sera 10, isso acontece porque o codigo adiciona os valores de 0+1+2+3+4, resultando em 10

//2-
//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 23, 25, 27, 30];
//for (let numero of lista) {
    //if (numero > 18) {
       // console.log(numero)
   // }
//}
//vai ser impresso todos os numeros maiores que 18
//o for-of é util para interar através dos elementos de uma lista ou array, mas não fornece os indices,para verificar os indices poderiamos usar o for each.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 23, 25, 27, 30];
lista.forEach((numero, indice) => {
    console.log(`indice ${indice}: ${numero}`);
});

//3-
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for(let asteriscos = 0: asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha);
    quantidadeAtual++
}*/
//resultado sera:
//*
//**
//*** 
//****

//exercicios de escrita de codigo
//1-
let quantidadeAnimais = Number(prompt("Quantos bichinhos de estimação voce tem?"));
let nomeAnimais = [];
if (quantidadeAnimais === 0) {
    console.log("Que pena! Voce pode adotar um pet!");
} else {
    for (let i = 0; i < quantidadeAnimais; i++) {
        let nome = prompt("digite o nome do bichinho" + (i + 1) + ":");
        nomeAnimais.push(nome);
    }
    console.log("Nomes dos animais de estimação:");
    for (let i = 0; i < nomeAnimais.length; i++) {
        console.log(nomeAnimais[i]);
    }
}

//2-
let arrayOriginal = [5, 10, 3, 20, 8 ,15];
//a)
function imprimirValores(arrayOriginal) {
    for(let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]);
    }
}
//b)
function imprimirValoresDivididos(arrayOriginal) {
    for(let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i] / 10);
    }
}
//c)
function numerosPares(arrayOriginal) {
    let pares = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 === 0) {
            pares.push(arrayOriginal[i]);
        }
    }
    console.log(pares);
}
//d)
function criarArrayStrings(arrayOriginal) {
    let novoArray = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
        novoArray.push("o elemento do indice " + i + "é: " + arrayOriginal[i]);
    }
    console.log(novoArray);    
}
//e)e
function encontrarMaiorMenor(arrayOriginal) {
    let maior = arrayOriginal[0];
    let menor = arrayOriginal[0];
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] > maior) {
            maior = arrayOriginal[i];
        }
        if (arrayOriginal[i] < menor) {
            menor = arrayOriginal[i];
        }
    }
    console.log("Maior Numero: " + maior);
    console.log("Menor Numero: " + menor);
}

imprimirValores(arrayOriginal);
imprimirValoresDivididos(arrayOriginal);
numerosPares(arrayOriginal);
criarArrayStrings(arrayOriginal);
encontrarMaiorMenor(arrayOriginal);
