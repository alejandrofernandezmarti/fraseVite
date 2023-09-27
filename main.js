import './style.css'
import {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindromo
} from './functions.js'

document.querySelector('#app').innerHTML = `
  <div>
    <header>
    <h1>Ejercicio 1.2: Frase</h1>
    </header>
    <p>Abre la consola para ver el resultado.</p>
    
    <h1>Hello Alejandro!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
let cadena = prompt("Introduce una cadena")

console.log(cadena)
console.log(letters(cadena) + " letras y "+words(cadena) + " palabras")
console.log(upperString(cadena))
console.log(titleString(cadena))
console.log(backwardsLetters(cadena))
console.log(backwardsWords(cadena))
console.log(palindromo(cadena))
