import { simulatePCredit, validateLoanInput } from "./loanUtils.js"

export const contactForm = document.getElementById('simulator-contact-form')

contactForm['simulator-btn'].addEventListener('click', ()=> {

    let firstName = contactForm.firstName.value
    let lastName = contactForm.lastName.value
    let email = contactForm.email.value
    let moneyAmount = +contactForm.amount.value
    let monthlyPeriod = +contactForm.period.value

    const validationArr = validateLoanInput( moneyAmount, monthlyPeriod )

    if ( !validationArr.length ) {

        let outputMsg = `Estimado ${firstName} ${lastName},\n\n${simulatePCredit( moneyAmount, monthlyPeriod )}.\n\nLa información será enviada en breve a la dirección: ${email}`
        let simulatorOutput = document.createElement("div")

        simulatorOutput.innerHTML = `<p>Simulator output:</p>
                                     <textarea style="width: 100%;" id="simulatorOutput" name="output" cols="30" rows="5">${outputMsg}
                                     </textarea>`
        contactForm.append(simulatorOutput)
    } else {
        let outputMsg = ''
        validationArr.forEach( element => {
            outputMsg += `\n${element}\n`
        });
        let simulatorOutput = document.createElement("div")
        simulatorOutput.innerHTML = `<p>Simulator output:</p>
                                     <textarea style="width: 100%;" id="simulatorOutput" name="output" cols="30" rows="5">
                                     ${outputMsg}
                                     </textarea>`
        contactForm.append(simulatorOutput)
    }
})

