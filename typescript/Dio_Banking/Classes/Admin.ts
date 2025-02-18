import { Account } from './Account'

export class Admin extends Account {
    balance: number

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
        this.balance = 20
    }

    getBalance = () => {
        console.log(this.balance)
    }
}