/** Clase 4 **/

class User {
    constructor(usr, pwd) {
        this.usr = usr
        this.pwd = btoa(pwd)
    }

    getUsr() {
        return this.usr
    }

    getPwd() {
        return this.pwd
    }
}

class Client {
    constructor(firstName, lastName, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }

    getClientName() {
        return `${this.firstName.to} ${this.lastName}`
    }

    getClientMail() {
        return this.email
    }
}

// Se simula una persistencia básica de usuarios utilizando json.
const jsonUsr = [
    {
        "employeeId" :  45046907,
        "usr" : "garcihard",
        "pwd" : "cDR6encwcmQxMw=="
    }
    ,
    {
        "employeeId" :  45046908,
        "usr" : "freckles",
        "pwd" : "cDQ1NXcwcmQxMQ=="
    }
]

const jsonEmployee = [
    {
        "employeeId" :  45046907,
        "name" : "Alexis",
        "lastName" : "Garcia"
    },
    {
        "employeeId" :  45046908,
        "name" : "Daniela",
        "lastName" : "Herrera"
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

    estimatedYield.map( (yieldObj) => {
        yieldMsg += `\n${yieldObj.monthPeriod} mes es: $${(invest * yieldObj.yield).toFixed(2)}, con un rendimiento del ${(yieldObj.yield * 100).toFixed(2)}%`
    })

    return yieldMsg
}

// Msg genérico.
const noValidInput = function () {
    alert("Ingrese un dato válido, saliendo...")
}

let usr = ""
let pwd = ""
let option

usr = prompt("Ingresa tu usuario: ").toLowerCase()
pwd = prompt("Ingresa tu contraseña: ").toLowerCase()

const userLogin =  new User(usr, pwd)

const response = validateLogin(userLogin)

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
                alert(contactForm())
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
                alert("Opción no válida, verifique...")
                break
        }
    } while( option !== 0)
}

/* 
 * Valida que exista el usuario, devuelve true
 * cuando los datos coinciden.
 */
function validateLogin(userObj) {
    let isValidUsr = { "valid" : false, "msg" : "¡Credenciales inválidas!" }

    const usrObj = jsonUsr.find( user => (user.usr === userObj.getUsr() && user.pwd === userObj.getPwd()) )

    if (usrObj !== undefined) {
        const empObj = jsonEmployee.find( employee => usrObj.employeeId )

        if (empObj !== undefined) {
            isValidUsr = { "valid" : true, "msg" : `${empObj.name} ${empObj.lastName}` }
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

function contactForm() {
    const OK = 'y'
    const NOK = 'n'
    let contactMsg = `Gracias por utilizar el simulador de Xchel, Financial Services`

    let contactOption = prompt("¿Desea iniciar un trámite con nosotros? (Y/n)").toLowerCase()

    switch(contactOption) {
        case OK:
            let firstName =  prompt("Ingrese su nombre")
            let lastName = prompt("Ingrese su apellido")
            let email = prompt("Ingrese su correo electrónico")

            const clientObj = new Client(firstName, lastName, email)

            contactMsg = `Estimado ${clientObj.getClientName()}\n\nEn breve recibirá un correo en la dirección: ${clientObj.getClientMail()} con toda la información necesaria.\n\nGracias por utilizar Xchel, Financial Services`
            break
        case NOK:
            return contactMsg
            break
            default:
                noValidInput()
                break
    }

    return contactMsg
}