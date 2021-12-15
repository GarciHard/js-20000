import { NO_VALID_INPUT_MSG } from "./utils.js"

const INVESTMENT_MSG = "¿Cuánto desea invertir? (Monto mínimo $100MXN)"
const MINIMUM_AMOUNT_MSG = "El monto mínimo es de $100MXN, intente nuevamente, saliendo..."

// Arrow function para determinar el rendimiento de una inversión.
const investmentEstimate = (invest) => {
    let yieldMsg = `El rendimiento estimado para su inversión de $${invest} en un plazo de: `
    let estimatedYield = [ 
        { 
            "yield" : 0.05,
            "monthPeriod" : 1
        },
        { 
            "yield" : 0.0537,
            "monthPeriod" : 3
        },
        { 
            "yield" : 0.0575,
            "monthPeriod" : 6
        },
        { 
            "yield" : 0.075,
            "monthPeriod" : 12
        }
    ]

    estimatedYield.map( (yieldObj) => {
        yieldMsg += `\n${yieldObj.monthPeriod} mes es: $${(invest * yieldObj.yield).toFixed(2)}, con un rendimiento del ${(yieldObj.yield * 100).toFixed(2)}%`
    })

    return yieldMsg
}

/* 
 * Simula una inversión simple en plazos mensuales.
 */
export function simulateInvestment() {
    let investmentAmount

    investmentAmount = +prompt(INVESTMENT_MSG)

    if (isNaN(investmentAmount)) {
        alert(NO_VALID_INPUT_MSG)
    } else {
        if ( investmentAmount < 100 ) {
            alert(MINIMUM_AMOUNT_MSG)
        } else {
            let investmentMsg = investmentEstimate(investmentAmount)
    
            alert(investmentMsg)
        }
    }
}