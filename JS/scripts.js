//alert ("hola mundo")

var local01 = "ejemplo variable Local 01";
function mifuncion() {
 
 alert("mi local var es: " + local01);

}


/*function mifuncion2() {
  alert("Desde Funcion2:" + local01);
   if(nombre== "" && edad > 24);
}


function sumaloca(var1, var2) {
  alert("El resultado es:" + (var1 + var2));
}
*/


function sumaloca2(A, B) {
    if ( A > B ){
        alert("La suma es" + (A + B));
    }
    if ( A == B){
        alert("La resta es" + (A - B));
    }
    if ( A >= 10){
        alert("Incremento" + ++A);
    }
    
}
