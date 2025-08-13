"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, accountNumber) {
        var _this = this;
        this.status = false;
        this.balance = 0;
        this.deposit = function () {
            if (_this.validateAccount()) {
                console.log('Você depositou');
            }
        };
        this.withdraw = function () {
            console.log('Você sacou');
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateAccount = function () {
            if (_this.status === true) {
                console.log('Conta válida');
                return true;
            }
            throw new Error("Conta inválida");
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    return Account;
}());
exports.Account = Account;
