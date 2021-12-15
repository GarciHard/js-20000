import { contactForm } from "./contactForm.js"
import { simulatePCredit, validateLoanInput } from "./loanUtils.js"
import { simulateInvestment } from "./investmentUtils.js"
import { MINIMUM_AMOUNT_MSG, LOAN_PERIOD_MSG } from "./utils.js"

const SIMULATOR_OPTIONS_MSG = "Seleccione una opción: \n\n1. Simular Préstamo. \n2. Simular Inversión. \n0. Salir."
const SIMULATOR_INVALID_OPTION_MSG = "Opción no válida, verifique..."

export const initSimulator = () => {

    let option
    do {
        option = +prompt(SIMULATOR_OPTIONS_MSG)

        switch(option) {
            case 1:
                console.log("Simulador de préstamo simple")
                let amount = +prompt(MINIMUM_AMOUNT_MSG)
                let period = +prompt(LOAN_PERIOD_MSG)

                const validationArr = validateLoanInput( amount, period )

                if ( !validationArr.length ) {
                    alert(simulatePCredit( amount, period ))
                    alert(contactForm())
                } else {
                    let validationArrMsg = ''
                    validationArr.forEach( element => {
                        validationArrMsg += `\n${element}\n`
                    });
                    alert( validationArrMsg )
                }

                break
            case 2:
                console.log("Simulador de inversión simple")
                simulateInvestment()
                alert(contactForm())
                break
            case 0:
                document.write(`¡Hasta Luego ${response.msg}!`)
                break
            default:
                alert(SIMULATOR_INVALID_OPTION_MSG)
                break
        }
    } while( option !== 0)
}

