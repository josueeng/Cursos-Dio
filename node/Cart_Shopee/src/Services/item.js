export default async function Item(Nome, preco, quantidade) {
    console.log(`O item ${Nome} com a quantidade de ${quantidade} de valor unitario ${preco} foi adicionado ao carrinho com sucesso!`);
    console.log(`Valor total = ${preco * quantidade}`);
    
}