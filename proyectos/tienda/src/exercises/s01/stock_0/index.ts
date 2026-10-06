// Enunciado: ejercicio 2
// Autor: Helena GM
// Investigación: Fuentes consultadas
//
import type { Product } from "../../../types/product";

// array que muestre todos los productos con stock a 0
export function sinStock(myProducts: Product[]): string[] {
  return myProducts.filter((product) => product.stock === 0).map((product) => product.name)
}
