// Ejercicio 4
// @autor:Helena GM
//
type Producto = {
  id:number
  nombre:string
  precio:number
  rebajado:boolean
}
const productos:Producto[] = [
  {id:1,nombre:'Teclado',precio:25,rebajado:false},
  {id:2,nombre:'Raton',precio:15,rebajado:true},
  {id:3,nombre:'Monitor',precio:180,rebajado:false},
  {id:4,nombre:'Altavoces',precio:45,rebajado:true},
  {id:5,nombre:'Webcam',precio:60,rebajado:false}
]

function buscarProducto(catalogo:Producto[],id:number):Producto | null{
  const producto = catalogo.find(producto=>producto.id === id)
  if(producto === undefined){
    return null
  }
  return producto
}

export function ejercicio04(): void{
  console.log(buscarProducto(productos,3))
  console.log(buscarProducto(productos,99))
}
