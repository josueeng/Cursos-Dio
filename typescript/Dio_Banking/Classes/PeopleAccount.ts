import { Account } from './Account'

export class PeopleAccount extends Account {
    doc_Id: number

    constructor(name: string, accountNumber: number, doc_Id: number) {
        super(name, accountNumber)
        this.doc_Id = doc_Id
    }
}