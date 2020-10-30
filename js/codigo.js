
function mayusNoMayud(cadena){
  var checar = cadena;
  var validar="";

  if(checar== checar.toLowerCase()){
    validar="son minusculas"
  }else if(checar==checar.toUpperCase()){
    validar ="son mayusculas";

  }else{
    validar="es de ambos tipos"
  }
  alert(validar);
}

var cadena = prompt("Dame una cadena");
mayusNoMayud(cadena);


