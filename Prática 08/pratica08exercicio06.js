function loteria() {
    var i, j, cont=0, apostas = new Array (5), sorteio = new Array (5);
    alert("Na tela seguinte escolha 5 números inteiros no intervalo de 1 a 100. Não deve repetir número");
    for (i = 0; i < 5 ; i++) {
        apostas[i] = prompt("Digite um número:");
        while (apostas[i] == apostas[i-1] || apostas[i] == apostas[i-2] || apostas[i] == apostas[i-3] || apostas[i] == apostas[i-4]) {
            alert ("Número já informado. Digite novamente.");
            apostas[i] = prompt("Digite um número:");
        }
    }
    for (i = 0; i < 5; i++) 
        document.getElementById("escolhidos").innerHTML += apostas[i] + " " + "<style> #divmae {visibility: visible} </style>";
    
    for (j = 0; j < 5; j++){
        sorteio[j] = Math.floor ((Math.random () * 10) + 0.1);
        while (sorteio[j] == sorteio[j-1] || sorteio[j] == sorteio[j-2] || sorteio[j] == sorteio[j-3] || sorteio[j] == sorteio[j-4]) {
            sorteio[j] = Math.floor ((Math.random () * 10) + 0.1);
        }
    }
    for (j = 0; j < 5; j++)
        document.getElementById("sorteio").innerHTML += sorteio[j] + " ";
    
    for (i = 0; i < 5 ; i++)
        for (j = 0; j < 5; j++)
            if (apostas[i] == sorteio[j]) {
                document.getElementById("resultado").innerHTML += apostas[i] + " ";
                cont++;
            }
    if (parseFloat(cont/5) <= 0.4)
            document.getElementById("premio").innerHTML = "Infelizmente não foi dessa vez. Tente novamente.";
            else if (parseFloat(cont/5) == 0.6)
                document.getElementById("premio").innerHTML = "Parabéns! Você ganhou 50% do prêmio.";
                else if (parseFloat(cont/5) == 0.8)
                    document.getElementById("premio").innerHTML = "Parabéns! Você ganhou 75% do prêmio.";
                    else
                        document.getElementById("premio").innerHTML = "Parabéns! Hoje é seu dia de sorte, ganhou o prêmio total.";
    }
