import { INVALID_AMOUNT_MSG, NO_VALID_INPUT_MSG } from "./utils.js"

const INVALID_LOAN_PERIOD_MSG = "Plazo no válido, intente nuevamente."

const LOAN_VARIABLE_IVA = .16
const LOAN_VARIABLE_TAX = 76
const LOAN_MINIMUM_AMOUNT = 1000
const LOAN_PERIOD_ARR = [12, 24, 36]


/* 
 * Simula un préstamo personal simple con una tasa
 * de interés anual fija.
 */
export function simulatePCredit( creditAmount, creditTerm ) {
    let totalCredit = creditWithTax(creditAmount, creditTerm)

    return loanSimulatorMsg(creditAmount, creditTerm, totalCredit)
}

// Arrow function para calcular el préstamo con interés.
const creditWithTax = 
    (creditAmount, creditTerm) => {
        let anualTax = (LOAN_VARIABLE_TAX / 100) * LOAN_VARIABLE_IVA
        return creditAmount * anualTax * creditTerm
    }

// Arrow para devolver msg con la información del crédito.
const loanSimulatorMsg = (creditAmount, creditTerm, totalCredit) => {
    return `Para un préstamo por $${creditAmount}MXN, en un plazo de ${creditTerm} meses, con una tasa de interés del ${LOAN_VARIABLE_TAX}% se pagará una cantidad de: $${totalCredit.toFixed(2)}MXN`
}

// Validamos las entradas.
export const validateLoanInput = ( creditAmount, creditTerm ) => {

    let validateMsgArr = []

    if ( isNaN(creditAmount) || isNaN(creditTerm) )
        validateMsgArr.push(NO_VALID_INPUT_MSG)

    if ( creditAmount < LOAN_MINIMUM_AMOUNT )
        validateMsgArr.push(INVALID_AMOUNT_MSG)

    if ( !LOAN_PERIOD_ARR.includes(creditTerm) )
        validateMsgArr.push(INVALID_LOAN_PERIOD_MSG)

    return validateMsgArr
}

