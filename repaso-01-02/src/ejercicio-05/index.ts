// Ejercicio 5
// @autor:Helena GM
//
function precioFinal(precio:number,descuento:number):number | null{
  if(!Number.isFinite(precio) || !Number.isFinite(descuento)){
      return null
  }
  if(precio<0){
    return null
  }
  if(descuento<0 || descuento>100){
    return null
  }
  return precio * (1-descuento/100)
}

const casos: Array<[number,number]> = [
  [80,25],
  [0,20],
  [80,100],
  [-1,10],
  [80,120],
  [NaN,10],
  [50,0]
]

export function ejercicio05(): void{
  for(const caso of casos){
    const resultado = precioFinal(caso[0],caso[1])
    console.log(resultado === null ? 'Datos incorrectos':'Precio: ${resultado}')
  }
}
