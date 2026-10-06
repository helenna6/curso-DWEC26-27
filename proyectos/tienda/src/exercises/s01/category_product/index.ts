// Enunciado: ejercicio 3
// Autor: Helena GM
// Investigación: Fuentes consultadas
//

import type { Category, Product } from "../../../types/product";

// Muestra los productos de sólo una categoría
export function productoCategoría(list: Product[], category: Category): Product[] {
  return list.filter((product) => product.category === category);
}

// Pregunta: ¿Qué devuelve byCategory([], 'audio')?
// Resultado: devuelve[]
// Da error o devuelve algo con sentido? ¿Por qué?: porque el filter me devulve un array vacío
