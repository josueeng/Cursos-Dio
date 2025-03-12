const servicos = require ('./Servicos/Sevicos.js');
const Produtos = require ('./Produtos/Produtos.js')
servicos.getFullName(200, " Troca de oleos");
servicos.getFullName(201, " Troca de pneus");
servicos.getFullName(202, " Troca de freios");
servicos.getLabel("Troca de oleos");
servicos.getLabel("Troca de pneus");
servicos.getLabel("Troca de freios");

Produtos.Product(30, " oleo");
