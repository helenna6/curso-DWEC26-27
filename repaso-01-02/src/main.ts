import { ejercicio01 } from './ejercicio-01'
import { ejercicio02 } from './ejercicio-02'
import { ejercicio03 } from './ejercicio-03'
import { ejercicio04 } from './ejercicio-04'
import { ejercicio05 } from './ejercicio-05'
import { ejercicio06 } from './ejercicio-06'

const ejercicios: Array<() => void> = [
  ejercicio01,
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06
]

for (let i = 0; i < ejercicios.length; i++) {
  console.log(`\n===== Ejercicio ${i + 1} =====`)
  ejercicios[i]()
}
