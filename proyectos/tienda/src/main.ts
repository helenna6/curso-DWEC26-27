// Enunciado: Proyecto creación de la tienda
// Autor: Helena GM
// Investigación: Fuentes consultadas
//
// --- importar ---
//
import { products } from "./data/products";
import { productoCategoría } from "./exercises/s01/category_product";
import { precioId } from "./exercises/s01/idProduct_price";
import { priceWithVat } from "./exercises/s01/prices_with_vat";
import { sinStock } from "./exercises/s01/stock_0";
// mostrar todos los productos

// mostrar el primer product.log("Primer producto: ",products[0])
// mostrar del primer producto el precio
//
console.log("Ejercicio 2: ", productoCategoría(products, "monitors"));
console.log("Ejercicio 3: ", precioId(products, 1));
console.log("Ejercicio 4: ", priceWithVat(products));
console.log("Ejercicio 5: ", sinStock(products));
