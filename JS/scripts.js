//alert ("hola mundo")

/* var A = prompt("ingresar el primer numero");
var B = prompt("ingresar el segundo numero");
+0

function sumaloca2() {
 
    if ( A > B ){
        alert("La suma es " + (A + B));
    }
    if ( A == B){
        alert("La resta es " + (A - B));
    }
    if ( A < 10){
        alert("Resto es " + --A);
    }
    if ( A >= 10){
        r = incrementar ();
        document.write("Incremento es " + r);
    }
}

function incrementar() {
    var resultado = ++A;
    return resultado;
}

var str = prompt("ingresar texto");
var n = str.length;

function longitud() {
switch (n) {
    case 10,11:
    case 15:
    case 20:
        alert("Demasiado");
    break;
    case 5,1:
        alert("Muy poco");
    break; 
    default:
        alert("ni muy muy ni tan tan");
    break;
}}


function longitudIF(){
    if (n == 5 || n == 1) {
        alert("demasiado corto");
        }
        else if (n == 10) {
            alert("demasiado largo");
         }
         else {
             alert("ni 10 ni 5");
         }



}


function verelnumero(){
var cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];
var text = "";

    for (var i = 0; i <cars.length; i++ )
    {
        text += cars[i] + "<br>";
        document.write("<br>Numero" + i + ": " + cars[i] )


    }
}
*/

function sumadenumeros(){
    var PrimerNum = prompt("poner el numero");
    for (var i = 0; i < PrimerNum.length; i++) 
    
       {
        document.write("<br>Numero " +(i));
    }
}