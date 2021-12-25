export const NO_VALID_INPUT_MSG = "Ingrese un dato válido."
export const MINIMUM_AMOUNT_MSG = "Ingrese la cantidad del préstamo (Monto mínimo $1000MXN)"
export const LOAN_PERIOD_MSG = "Seleccione el plazo en meses: \n* 12. \n* 24. \n* 36."
export const INVALID_AMOUNT_MSG = "Monto no válido, intente nuevamente."

export let changeFormStatus = ( type, status ) => {
    localStorage.removeItem(type)
    localStorage.setItem(type, status)
}