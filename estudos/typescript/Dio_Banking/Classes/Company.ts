import { Account } from './Account'
export class CompanyAccount extends Account {
    cnpj: number

    constructor(name: string, accountNumber: number, cnpj: number) {
        super(name, accountNumber)
        this.cnpj = cnpj
    }
    Emprestimo = ():void => {
        console.log('Você pegou um empréstimo')
    }
    deposit = () :void =>{
        console.log('a empresa depositou')
}}