/** Clase 3 **/

// Se simula una persistencia básica de usuarios utilizando json.
const jsonUsr = [
    {
        "name" : "Alexis G.",
        "usr" : "garcihard",
        "pwd" : "xy!z13#"
    }
    ,
    {
        "name" : "Daniela H.",
        "usr" : "freckles",
        "pwd" : "x!yz11$"
    }
]

// Arrow function para calcular el préstamo con interés.
const creditWithTax = 
    (creditTax, iva, creditAmount, creditTerm) => {
        let anualTax = (creditTax / 100) * iva
        return creditAmount * anualTax * creditTerm
    }

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
    
    for (let i = 0; i < estimatedYield.length; i++) {
        yieldMsg += `\n${estimatedYield[i].monthPeriod} mes es: $${(invest * estimatedYield[i].yield).toFixed(2)}, con un rendimiento del ${(estimatedYield[i].yield * 100).toFixed(2)}%`
    }

    return yieldMsg
}

// Msg genérico.
const noValidInput = function () {
    alert("Ingrese un dato válido, saliendo...")
}

let usr = ""
let pwd = ""
let option

usr = prompt("Ingresa tu usuario: ")
pwd = prompt("Ingresa tu contraseña: ")

const response = validateLogin(usr, pwd)

if (!response.valid) {
    alert(response.msg)
    document.write(`Acceso no autorizado a Xchel, Financial Services`)
} else {
    document.write(`Bienvenid@ ${response.msg} a Xchel, Financial Services`)

    do {
        option = +prompt("Seleccione una opción: \n\n1. Simular Préstamo. \n2. Simular Inversión. \n0. Salir.")

        switch(option) {
            case 1:
                console.log("Simulador de préstamo simple")
                simulatePCredit()
                break
            case 2:
                console.log("Simulador de inversión simple")
                simulateInvestment()
                break
            case 0:
                document.write(`¡Hasta Luego ${response.msg}!`)
                break
            default:
                alert("Opción no válida, verifique...")
                break
        }
    } while( option !== 0)
}

/* 
 * Valida que exista el usuario, devuelve true
 * cuando los datos coinciden.
 */
function validateLogin(usr, pwd) {
    let isValidUsr = { "valid" : false, "msg" : "¡Credenciales inválidas!" }

    // Iteramos el json...
    for (let k in jsonUsr) {
        
        // Validamos que sean iguales...
        if ( jsonUsr[k].usr.toUpperCase() === usr.toUpperCase() 
            && jsonUsr[k].pwd.toLowerCase() === pwd.toLowerCase() ) {
            isValidUsr = { "valid" : true, "msg" : jsonUsr[k].name }
        }
    }

    return isValidUsr
}

/* 
 * Simula un préstamo personal simple con una tasa
 * de interés anual fija.
 */
function simulatePCredit() {
    const iva = .16
    const creditTax = 76
    let creditAmount
    let creditTerm

    creditAmount = +prompt("Ingrese la cantidad del préstamo (Monto mínimo $1000MXN)")

    if (isNaN(creditAmount)) {
        noValidInput()
    } else {
        if ( creditAmount < 1000 ) {
            alert("Monto no válido, intente nuevamente, saliendo...")
        } else {
            creditTerm = +prompt("Seleccione el plazo en meses: \n* 12. \n* 24. \n* 36.")

            if (isNaN(creditTerm)) {
                noValidInput()
            } else {
                switch(creditTerm) {
                    case 12:
                    case 24:
                    case 36:
                        let totalCredit = creditWithTax(creditTax, iva, creditAmount, creditTerm)
                        alert(`Para un préstamo por $${creditAmount}MXN, en un plazo de ${creditTerm} meses, con una tasa de interés del ${creditTax}% se pagará una cantidad de: $${totalCredit.toFixed(2)}MXN`)
                        break
                    default:
                        alert("Plazo no válido, intente nuevamente, saliendo...")
                        break
                }
            }
        }
    }
}

/* 
 * Simula una inversión simple en plazos mensuales.
 */
function simulateInvestment() {
    let investmentAmount

    investmentAmount = +prompt("¿Cuánto desea invertir? (Monto mínimo $100MXN)")

    if (isNaN(investmentAmount)) {
        noValidInput()
    } else {
        if ( investmentAmount < 100 ) {
            alert("El monto mínimo es de $100MXN, intente nuevamente, saliendo...")
        } else {
            let investmentMsg = investmentEstimate(investmentAmount)
    
            alert(investmentMsg)
        }
    }
}
