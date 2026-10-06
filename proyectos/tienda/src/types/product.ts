
// un tipo describe la forma de un dato
export type Category = 'monitors' | 'audio' | 'GPU' | 'peripherals'


// los elementos de una interface van separados por ; o enter
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  stock: number;
}
