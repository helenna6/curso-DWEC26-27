// Ejercicio 1
// @autor: Helena GM
//
const lecturas = ['21,5','19','','23,5','error','20']

function analizarLecturas(lecturas:string[]):{
  validas:number
  descartadas:number
  media:string
}{
  let validas = 0
  let descartadas = 0
  let suma = 0

  for(const lectura of lecturas){
    if(lectura === ''){
      descartadas++
      continue
    }
    const numero = Number(lectura)
    if(!Number.isFinite(numero)){
      descartadas++
      continue
    }
    validas++
    suma+=numero
    console.log(lectura)
  }
  const media = validas === 0 ? 'Sin datos':(suma/validas)
  return{
    validas,descartadas,media
  }
}

export function ejercicio01():void{
  console.log(analizarLecturas(lecturas))
}
