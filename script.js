function somarNumeros(){
   
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultado = numero1 + numero2
    //alert (resultado)
    var teste = document.getElementById("resultadoSoma")
    teste.innerHTML=resultado
}
function subtrairNumeros(){
   
    var numero3 = parseInt(document.getElementById("num3").value);
    var numero4 = parseInt(document.getElementById("num4").value);
    var resultado = numero3 - numero4
    //alert (resultado)
    var teste = document.getElementById("resultadoSubtrair")
    teste.innerHTML=resultado
}
function mutiplicarNumeros(){
   
    var numero5 = parseInt(document.getElementById("num5").value);
    var numero6 = parseInt(document.getElementById("num6").value);
    var resultado = numero5 * numero6
    //alert (resultado)
    var teste = document.getElementById("resultadoMultiplicar")
    teste.innerHTML=resultado
}
function dividirNumeros(){
   
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    if(numero8 == 0){
        alert("não é possivel dividir por 0")
    }
    var resultado = numero7 / numero8
    //alert (resultado)
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultado
}
function convertergraus2(){
    
    var numero10 = parseInt(document.getElementById("num10").value);
    var resultado = numero10 * 1.8 + 32
    //alert(resultado)
    var teste = document.getElementById("resultadoConversao1")
    teste.innerHTML=resultado
}
function area(){
    
    var numero11 = parseInt(document.getElementById("num11").value);
    var numero12 = parseInt(document.getElementById("num12").value);
    var resultado = numero11 / numero12
    //alert(resultado)
    var teste = document.getElementById("areaRe")
    teste.innerHTML=resultado
}
function areaCircu(){
    
    var numero13 = parseInt(document.getElementById("num13").value);
    var resultado = Math.pow(numero13,2) * 3.14
    //alert(resultado)
    var teste = document.getElementById("areaCircu")
    teste.innerHTML=resultado
}

