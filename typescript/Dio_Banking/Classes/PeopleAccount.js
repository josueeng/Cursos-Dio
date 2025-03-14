"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleAccount = void 0;
var Account_1 = require("./Account");
var PeopleAccount = /** @class */ (function (_super) {
    __extends(PeopleAccount, _super);
    function PeopleAccount(name, accountNumber, doc_Id) {
        var _this = _super.call(this, name, accountNumber) || this;
        _this.doc_Id = doc_Id;
        return _this;
    }
    return PeopleAccount;
}(Account_1.Account));
exports.PeopleAccount = PeopleAccount;
