/*
1. Relaciona cada tarea con JavaScript, TypeScript, Node.js, npm o Vite. Alguna herramienta puede
aparecer más de una vez.
  1. Ejecuta el código de la página en el navegador.
    JavaScript
  2. Avisa de que se intenta asignar un texto a una variable numérica.
    TypeScript
  3. Instala las dependencias indicadas en package.json.
    npm
  4. Sirve el proyecto durante el desarrollo y transforma un archivo .ts.
    vite
  5. Permite ejecutar herramientas de desarrollo fuera del navegador.
    node.js
Explica después por qué ver la página con npm run dev no demuestra que los tipos estén bien
comprobados.
*/

// 2.Escribe el resultado exacto de cada línea. Compruébalo en la consola y explica las que te hayan
//sorprendido:
console.log(typeof 7)
  //number
console.log(typeof '7')
  //string
console.log(typeof null)
  //object
console.log('7' + 2)
  //72
console.log('7' - 2)
  //5
console.log(10 % 3)

console.log(Number(''))
  //0
console.log(Number('14px'))

// 3. Declara con const tu nombre, edad, grupo y si has programado antes. Muestra una frase con una
// plantilla de texto. Usa typeof para observar los cuatro valores. Cambia la edad por el texto '18' :
// ¿qué tipo observa ahora JavaScript? Para probarlo, cambia el valor inicial en la declaración y vuelve a
// ejecutar; no intentes reasignar una variable declarada con const
const nombre = 'Helena'
const edad = 20
const grupo = 'DAW'
const programar = true

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof grupo)
console.log(typeof haProgramado)

// 4. Guarda una duración en minutos y calcula su equivalente en segundos. Prueba con 60 , 90 y 0 ;
// indica los tres resultados esperados. Después añade otra variable con los segundos de pausa y
// calcula cuánto tiempo queda. Decide si necesitas let o basta con const para cada dato.
const minutos = 60
const segundos = minutos * 60
console.log(segundos)

const segundosPausados = 40
const tiempoQueQueda = segundos - segundosPausados
console.log(tiempoQueQueda)

// 5. Copia este fragmento. Describe el aviso del editor y corrige el dato sin usar any ni cambiar el
// significado de la variable.
let numeroDeAlumnos = 24
numeroDeAlumnos = 'veinticinco'
console.log(numeroDeAlumnos)

// 6. Este código intenta registrar un nuevo intento. Corrige solo lo necesario y explica la diferencia entre
// el primer error y un resultado numérico equivocado:
const intentos = 1
intentos = intentos + 1
console.log(`Intentos: ${intentos}`)

// 7. ¿Por qué este programa muestra Total: 52 ? Modifícalo para que muestre Total: 7 y explica
// qué operación convierte un texto en número.
const cantidadTexto = '5'
const extra = 2
console.log(`Total: ${Number(cantidadTexto) + extra}`)

// 8. Prueba Number('hola') , Number('Infinity') y 0 / 0 . Para cada resultado, consulta typeof
// y Number.isFinite . Explica por qué comprobar solo que un valor sea de tipo number no basta
// para usarlo como cantidad.
const primero = Number('hola')
const segundo = Number('Infinity')
const tercero = 0 / 0

console.log(typeof resultado1, Number.isFinite(resultado1))
console.log(typeof resultado2, Number.isFinite(resultado2))
console.log(typeof resultado3, Number.isFinite(resultado3))
