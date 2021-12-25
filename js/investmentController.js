import { investmentEstimate, validateInvestmentInput } from "./investmentUtils.js"
import { changeFormStatus } from "./utils.js"

export const investmentButton = document.getElementById('investment-button')
let simulatorContainer = document.getElementById('form-simulator-container')

investmentButton.addEventListener( 'click', () => {
    
    let loanStatus =  (localStorage.getItem('loanStatus') === 'true')
    let investmentStatus =  (localStorage.getItem('investmentStatus') === 'true')

    if ( loanStatus ) {
        document.getElementById('loan-form').remove()
        changeFormStatus('loanStatus', 'false')
    }

    if ( !investmentStatus ) {
        changeFormStatus('investmentStatus', 'true')
        setInvestmentForm()
    }

})

const setInvestmentForm = () => {
    let investmentForm = document.createElement('div')
    investmentForm.id = 'investment-form'
    investmentForm.classList.add('hero__form')
    investmentForm.innerHTML = `            
                            <h3>How much do you want to invest?</h3>
                            <form id="simulator-investment-form">
                                <div class="input-full-width">
                                        <p>Amount of money ($):</p>
                                        <input id="simulator-amount" name="amount" type="text" placeholder="100" required>
                                        <small>Min. $100MXN</small>
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
                                </div>
                                <button id="simulate-invest-button" class="site-btn">Simulate Your Invest Now!</button>
                            </form>
                            `
    simulatorContainer.append(investmentForm)
    executeInvest()
}

const executeInvest = () => {

    const investmentForm = document.querySelector('#simulator-investment-form')
    
    investmentForm['simulate-invest-button'].onclick =  () => {

        let firstName = investmentForm.firstName.value
        let lastName = investmentForm.lastName.value
        let email = investmentForm.email.value
        let moneyAmount = +investmentForm.amount.value
    
        const validationArr = validateInvestmentInput( moneyAmount )
    
        if ( !validationArr.length ) {
               
            let outputMsg = `Estimado ${firstName} ${lastName},\n\n${investmentEstimate( moneyAmount )}.\n\nLa información será enviada en breve a la dirección: ${email}`
            
            let simulatorOutput = document.createElement("div")
    
            simulatorOutput.innerHTML = `<p>Investment Temporal output:</p>
                                         <textarea style="width: 100%;" id="simulatorOutput" name="output" cols="30" rows="5" disabled>${outputMsg}
                                         </textarea>`
            investmentForm.append(simulatorOutput)
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
            investmentForm.append(simulatorOutput)
        }
    
    }
}