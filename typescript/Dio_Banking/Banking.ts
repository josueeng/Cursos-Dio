import { Account } from "./Classes/Account"
import { Admin } from "./Classes/Admin"
import { CompanyAccount } from "./Classes/Company"
import { PeopleAccount } from "./Classes/PeopleAccount"






const peopleAccount: PeopleAccount = new PeopleAccount('pessoa conta', 1, 123456789)
console.log(peopleAccount)
peopleAccount.deposit()

const adm: Admin = new Admin('admin conta', 1)
console.log(adm)

const user: Account = new Account('Dio conta', 2)
console.log(user)

const Company: CompanyAccount = new CompanyAccount('Empresa conta', 3, 123456789)
console.log(Company)
