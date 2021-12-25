import { simulatePCredit, validateLoanInput } from "./loanUtils.js"
import { changeFormStatus } from "./utils.js"

export const loanButton = document.querySelector('#loan-button')
let simulatorContainer = document.querySelector('#form-simulator-container')

loanButton.onclick = () => {
    
    let loanStatus =  (localStorage.getItem('loanStatus') === 'true')
    let investmentStatus = (localStorage.getItem('investmentStatus') === 'true')

    if ( investmentStatus ) {
        document.getElementById('investment-form').remove()
        changeFormStatus('investmentStatus', 'false')
    }

    if ( !loanStatus ) {
        changeFormStatus('loanStatus', 'true')
        setLoanForm()
        
    }

}

const setLoanForm = () => {
    let loanForm = document.createElement('div')
    loanForm.id = 'loan-form'
    loanForm.classList.add('hero__form')
    loanForm.innerHTML = `            
                            <h3>How much do you need?</h3>
                            <form id="simulator-loan-form">
                                <div class="input-list">
                                    <div class="input-list-item">
                                        <p>Amount of money ($):</p>
                                        <input id="simulator-amount" name="amount" type="text" placeholder="1000" required>
                                        <small>Min. $1000MXN</small>
                                    </div>
                                    <div class="input-list-item">
                                        <p>How long for (month):</p>
                                        <input id="simulator-period" name="period" type="text" placeholder="24" required>
                                        <small>Months: 12 - 24 - 36</small>
                                    </div>
                                </div>
                                <div class="input-list last">
                                    <div class="input-list-item">
                                        <p>First Name:</p>
                                        <input id="simulator-name" name="firstName" type="text" placeholder="Jonh" required>
                                    </div>
                                    <div class="input-list-item">
                                        <p>Last Name:</p>
                                        <input id="simulator-last-name" name="lastName" type="text" placeholder="Doe" required>
                                    </div>
                                </div>
                                <div class="input-full-width">
                                    <p>Email:</p>
                                    <input id="simulator-email" name="email" type="text" placeholder="john.doe@gmail.com" required>
                                    <input id="simulator" type="text" placeholder="john.doe@gmail.com" hidden required>
                                </div>
                                <button id="simulate-loan-button" class="site-btn">Simulate Your Loan Now!</button>
                            </form>
                            `
    simulatorContainer.append(loanForm)
    executeLoan()
}

const executeLoan = () => {

    const loanForm = document.querySelector('#simulator-loan-form')
    
    loanForm['simulate-loan-button'].onclick =  () => {

        let firstName = loanForm.firstName.value
        let lastName = loanForm.lastName.value
        let email = loanForm.email.value
        let moneyAmount = +loanForm.amount.value
        let monthlyPeriod = +loanForm.period.value
    
        const validationArr = validateLoanInput( moneyAmount, monthlyPeriod )
    
        if ( !validationArr.length ) {
    
            let outputMsg = `Estimado ${firstName} ${lastName},\n\n${simulatePCredit( moneyAmount, monthlyPeriod )}.\n\nLa información será enviada en breve a la dirección: ${email}`
            let simulatorOutput = document.createElement("div")
    
            simulatorOutput.innerHTML = `<p>Loan Temporal output:</p>
                                         <textarea style="width: 100%;" id="simulatorOutput" name="output" cols="30" rows="5" disabled>${outputMsg}
                                         </textarea>`
            loanForm.append(simulatorOutput)
        } else {
            let outputMsg = ''
            validationArr.forEach( element => {
                outputMsg += `\n${element}\n`
            });
            let simulatorOutput = document.createElement("div")
            simulatorOutput.innerHTML = `<p>Loan Temporal output:</p>
                                         <textarea style="width: 100%;" id="simulatorOutput" name="output" cols="30" rows="5">
                                         ${outputMsg}
                                         </textarea>`
            loanForm.append(simulatorOutput)
        }
    
    }
}