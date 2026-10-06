// Enunciado: ejercicio1
// Autor: Helena GM
// Investigación: Fuentes consultadas
//
import type { Product } from "../../../types/product";

// Recibe una lista de productos y permite devolver una lista de numeros con el precio + IVA
const VAT = 0.21;

export function priceWithVat(list: Product[]): number[] {
  return list.map(product => Math.round(product.price * (1 + VAT)))
}
