import { initSimulator } from "./simulator.js";
import { contactForm } from "./simulatorController.js"

/** Clase 5 **/

// Considerando un happy path, iniciamos por prompt.
let option = prompt("¿Desea simular por prompt? (Y/n)").toLowerCase()

if (option === 'y') {
    initSimulator()
}