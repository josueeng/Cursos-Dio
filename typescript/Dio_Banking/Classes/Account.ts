import * as readline from 'readline';

export class Account {
    name: string;
    private readonly accountNumber: number;
    status: boolean = true;
    balance: number = 0;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (): void => {
        if (this.validateAccount()) {
            console.log('Você depositou');
        }
    }

    withdraw = (): void => {
        console.log('Você sacou');
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    private validateAccount = (): boolean => {
        if (this.status === true) {
            console.log('Conta válida');
            return true;
        }
        throw new Error("Conta inválida");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome da conta: ', (name) => {
    const accountNumber = Math.floor(Math.random() * 1000000); // Gera um número de conta aleatório
    const account = new Account(name, accountNumber);
    console.log(`Conta criada para ${account.name} com o número ${account.accountNumber}`);
    rl.close();
});
