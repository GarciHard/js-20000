export class Client {
    constructor(firstName, lastName, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }

    getClientName() {
        return `${this.firstName} ${this.lastName}`
    }

    getClientMail() {
        return this.email
    }
}