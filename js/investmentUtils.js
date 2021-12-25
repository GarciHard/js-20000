import { INVALID_AMOUNT_MSG, NO_VALID_INPUT_MSG } from "./utils.js"

const INVESTMENT_MINIMUM_AMOUNT = 100

const estimatedYield = [
    { "yield" : 0.05, "monthPeriod" : 1 },
    { "yield" : 0.0537, "monthPeriod" : 3 },
    { "yield" : 0.0575, "monthPeriod" : 6 },
    { "yield" : 0.075, "monthPeriod" : 12 }
]

// Arrow function para determinar el rendimiento de una inversión.
export const investmentEstimate = (invest) => {
    let yieldMsg = `El rendimiento estimado para su inversión de $${invest} en un plazo de: `

    estimatedYield.map( (yieldObj) => {
        yieldMsg += `\n${yieldObj.monthPeriod} mes es: $${(invest * yieldObj.yield).toFixed(2)}, con un rendimiento del ${(yieldObj.yield * 100).toFixed(2)}%`
    })

    return yieldMsg
}

export const validateInvestmentInput = ( investmentAmount ) => {

    let validateMsgArr = []

    if ( isNaN(investmentAmount) )
        validateMsgArr.push(NO_VALID_INPUT_MSG)

    if ( investmentAmount < INVESTMENT_MINIMUM_AMOUNT )
        validateMsgArr.push(INVALID_AMOUNT_MSG)

    return validateMsgArr
}  