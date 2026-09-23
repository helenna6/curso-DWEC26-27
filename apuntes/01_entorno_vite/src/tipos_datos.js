// Funcion que le pase como parametro un numero como grados celsios y lo transforma a grados kelvin


// v1 (casi nunca usaremos algo tan verboso)
function celsiosToKelvin(celsius){
  let kelvin = celsius + 273.15
  return kelvin
}


// v2 (version donde priorizamos el menor numero de lineas)
function celsiosToKelvin2(celsius){
  return celsius + 273.15
}

// v3 (modo pro usando arrow function)
const celsiusToKel = (celsius) => {
  return celsius + 273.15
}

// v4 (modo dios)
const cToK = (c) => c + 273.15

// Funcion que le pase como parametro 2 numeros y me los ordene
function ordenarNumeros(numero,numero2){
  if(numero<numero2){
    return numero,numero2
  }
  return numero2, numero
}

// Funcion que pase de celsius a kelvin pero comprobando celsius es un numero, que la temperatura
// no puede estar por debajo del 0 absoluto (-273ºK) y el resultado me lo das solo con dos cifras decimales
function celisusKK(celsius){
  if(isNaN(celsius)){
    return "no es un numero valido"
  }
  if(celsius < -273.15){
    return "la temperatura no puede estar por debajo del 0 absoluto"
  }
  const gradosKelvinK = celsius + 273.15;
  const gradosTruncar = Math.trunc(gradosKelvinK*100)/100;
  console.log(gradosTruncar);
}

// isNaN --- buscar lo que significa
  // comprueba si un valor no es un numero. is not a number
// ¿cómo truncamos un numero a 2 cifras decimales?
  // multiplicando el numero por 100
