"use strict";
var Usuario = /** @class */ (function () {
    function Usuario(n, s) {
        this.nome = n;
        this.saldo = s;
    }
    Usuario.prototype.addDinheiro = function (deposito) {
        this.saldo += deposito;
    };
    Usuario.prototype.removeDinheiro = function (retirada) {
        this.saldo -= retirada;
    };
    return Usuario;
}());
var user1 = new Usuario('Clenilton', 10);
user1.addDinheiro(100);
var user2 = new Usuario('Larissa', 199);
user2.removeDinheiro(100);
console.log(user1);
console.log(user2);
