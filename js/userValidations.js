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