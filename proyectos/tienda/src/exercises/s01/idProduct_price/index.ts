// Enunciado: ejercicio 4
// Autor: Helena GM
// Investigación: Fuentes consultadas
//
import type { Product } from "../../../types/product";

export function precioId(list: Product[], id: number): number | null {
  const product = list.find((product) => product.id === id);
  if (product === undefined) {
    return null;
  }
  return product.price;
}

// Pregunta ¿Por qué no es buena idea devolver 0 cuando el producto no existe?
// Respuesta: porque el precio puede ser válido si sale 0
