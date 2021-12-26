function calculadora(){
    const operacao = Number(prompt('Escolha sua operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Ponteciação (**)'));

    if(!operacao || operacao >= 7){
        alert('Erro - Operação inválida"!');
        calculadora();
    }
    else{
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if(!n1 || !n2){
            alert("Erro - Parâmetros inválidos");
            calculadora();
        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado} `);
                novaOperacao()
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao()
            }
            function ponteciacao(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao()
            }
    
            function novaOperacao(){
                let opcao = prompt("Deseja fazer outra operação matemática?\n 1 - Sim \n 2 - Não");
    
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até Mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }

        

        /*if(operacao == 1){
            soma();
        } else if(operacao == 2){
            subtracao();
        } else if(operacao == 3){
            multiplicacao();
        } else if(operacao == 4){
            divisaoReal();
        } else if(operacao == 5){
            divisaoInteira();
        } else if(operacao == 6){
            ponteciacao();
        }*/

        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                ponteciacao();
                break;
        }
    }

    
}




calculadora();