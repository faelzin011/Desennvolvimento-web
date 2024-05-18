# Javascript dentro do navegador (BROWSER)
    No navegador o javascript é INTERPRETADO pelo V8 
    V8 é o interpretador JavaScript, também chamado de máquina virtual JavaScript (ou enigme),
    desenvolvida pela Google, e utilizado em seu navegador Google Chrome, V8 é um ferramenta
    desenvolvida na linguagem C++ e distribuída no regime do código aberto.


# Javascript fora do navegador (TERMINAL/Node)
    Node é o interpretador Javacript fora do navegador
    Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.



# Referencias

    V8 -   https://pt.wikipedia.org/wiki/v8_(JavaScript)
    Node - https://pt.wikipedia.org/wiki/Node.js
    Template



 var numero1 = 5
    var numero2 = 10
    var numero3 = "10"

    var ehMaior = numero1 > numero2 // false
    var ehMenor = numero1 < numero2 // true
    var ehIgual = numero1 == numero2 // false 
    var ehMaiorouIgual = numero1 >= numero2 // false
    var ehMneorouIgual = numero1 <= numero2 // true
    var ehDiferente = numero1 != numero2 // true

    var saoIguais = 10 == "10" // true (verifica valor) 
    var saoIdenticos = 10 === "10" // false (verifica tipo e valor)

    alert(saoIguais)
    alert(saoIdenticos)