import { Client } from "./Client.js"
import { NO_VALID_INPUT_MSG } from "./utils.js"

const CONTACT_FORM_INITIAL_MSG = "¿Desea iniciar un trámite con nosotros? (Y/n)"
const CONTACT_FORM_NAME_MSG = "Ingrese su nombre"
const CONTACT_FORM_LAST_NAME_MSG = "Ingrese su apellido"
const CONTACT_FORM_EMAIL_MSG = "Ingrese su correo electrónico"
const CONTACT_FORM_DEFAULT_MSG = "Gracias por utilizar el simulador de Xchel, Financial Services"
const CONTACT_FORM_OK_OPTION = 'y'
const CONTACT_FORM_NOK_OPTION = 'n'


export function contactForm() {
        
    let contactMsg = CONTACT_FORM_DEFAULT_MSG

    let contactOption = prompt(CONTACT_FORM_INITIAL_MSG).toLowerCase()

    switch(contactOption) {
        case CONTACT_FORM_OK_OPTION:
            let firstName =  prompt(CONTACT_FORM_NAME_MSG)
            let lastName = prompt(CONTACT_FORM_LAST_NAME_MSG)
            let email = prompt(CONTACT_FORM_EMAIL_MSG)

            const clientObj = new Client(firstName, lastName, email)

            contactMsg = `Estimado ${clientObj.getClientName()}\n\nEn breve recibirá un correo en la dirección: ${clientObj.getClientMail()} con toda la información necesaria.\n\nGracias por utilizar Xchel, Financial Services`
            break
        case CONTACT_FORM_NOK_OPTION:
            return contactMsg
            default:
                alert(NO_VALID_INPUT_MSG)
                break
    }

    return contactMsg
}