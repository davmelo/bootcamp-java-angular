const operacao = Number(prompt('Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Potenciação'));

var num1 = Number(prompt('Insira o primeiro valor: '));
var num2 = Number(prompt('Insira o segundo valor: '));
var resultado;

function soma(){
    resultado = num1+num2;
    alert(`${num1} + ${num2} = ${resultado}`);
}

function sub(){
    resultado = num1-num2;
    alert(`${num1} - ${num2} = ${resultado}`);
}

function multi(){
    resultado = num1*num2;
    alert(`${num1} * ${num2} = ${resultado}`);
}

function div(){
    resultado = num1/num2;
    alert(`${num1} / ${num2} = ${resultado}`);
}

function poten(){
    resultado = num1**num2;
    alert(`${num1} ** ${num2} = ${resultado}`);
}

switch(operacao){
    case 1:
        soma();
        break;
    case 2:
        sub();
        break;
    case 3:
        multi();
        break;
    case 4:
        div();
        break;
    case 5:
        poten();
        break;
    default:
        console.log('Número inválido')
}