// @autor: Helena GM
// Crear una funcion que se le pase como parametro un texto y lo encripte.
// Añadir una funcion inversa que una cadena de texto encriptada la desencripte.
// Nota: buscar alguna libreria que permita generar cadenas encriptadas de forma segura.
// Investigacion: buscar dos librerias que lo permitan y porque.
//  Crypto.js: es una biblioteca de cifrado de JavaScript que ofrece una amplia variedad de funciones
 //   criptograficas. Puedes cifrar y descifrar mensajes usando diferentes algoritmos de cifrado como
//    AES,DES, etc...
//  libsodium: realiza cifrado simetrico y asimetrico, firmas digitales, intercambio de claves.
import CryptoJS from "crypto-js"

const clave:string = "buenos dias"
// Recibe texto y devuelve texto cifrado
function encriptar(texto:string):string{
  textoEncriptado: string = CryptoJS.AES.encrypt(texto,clave).toString()
  return textoEncriptado
}  

function desencriptar(texto:string):string{
  const textoCasiDesencriptado : string = CryptoJS.AES.decrypt(texto,clave)
  const textoOriginal : string = textoCasiDesencriptado.toString(CryptoJS.enc.Utf8)
  return textoOriginal
}

export function ejecutarEjercicio2(){
  const mensaje: string = "Hola mundo"
  // encriptemos
  const mensajeEncriptado: string = encriptar(mensaje)
  console.log("Mensaje encriptado: ",mensajeEncriptado)
  const mensajeDesencriptado: string = desencriptar(mensaje)
  console.log("Mensaje desencriptado: ",mensajeDesencriptado)
}
