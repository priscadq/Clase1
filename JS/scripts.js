//alert ("hola mundo")

var A = prompt("ingresar el primer numero");
var B = 20;
+0
function sumaloca2() {



    if ( A >= 10){
        r = incrementar ();
        document.write("Incremento es " + r);
    }

    
    if ( A > B ){
        alert("La suma es " + (A + B));
    }
    if ( A == B){
        alert("La resta es " + (A - B));
    }
    if ( A < 10){
        alert("Resto es " + --A);
    }
    

}

function incrementar() {
    var resultado = ++A;
    return resultado;
}


