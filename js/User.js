export class User {
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