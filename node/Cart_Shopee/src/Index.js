import createItem from "./Services/item.js";
import * as cartService from "./Services/Cart.js";

// Casos de uso

//-> Adicionar item ao carrinho
// Função para adicionar um item ao carrinho do usuário
async function addItem(userCart, item) {
    userCart.push(item); // Adiciona o item ao array do carrinho
}

//-> Calcular total dos itens
// Função para calcular o total dos itens no carrinho
async function calculateTotal(userCart) {
    // Reduz o array de itens para o total somando os subtotais de cada item
    const total = userCart.reduce((sum, item) => sum + item.subtotal(), 0);
    console.log(total); // Exibe o total no console
    return total; // Retorna o total
}

//-> Deletar item do carrinho
// Função para deletar um item do carrinho pelo nome
async function deleteItem(userCart, name) {
    // Encontra o índice do item com o nome especificado
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1); // Remove o item do array se encontrado
    }
}

//-> Remover 1 item do carrinho
// Função para remover um item do carrinho pelo índice
async function remove(userCart, index) {
    if (index >= 0 && index < userCart.length) {
        userCart.splice(index, 1); // Remove o item do array se o índice for válido
    }
}

//-> Calcular total do carrinho
// Exporta as funções para uso em outros módulos
export { addItem, calculateTotal, deleteItem, remove };

// Exemplo de uso
(async () => {
    const userCart = []; // Inicializa o carrinho do usuário como um array vazio

    // Cria três itens com nome, preço e quantidade
    const Item1 = await createItem("Camisa", 50, 2);
    const Item2 = await createItem("Calça", 100, 3);
    const Item3 = await createItem("Tênis", 200, 4);

    // Adiciona os itens ao carrinho do usuário
    await addItem(userCart, Item1);
    await addItem(userCart, Item2);
    await addItem(userCart, Item3);

    // Calcula e exibe o total do carrinho
    await calculateTotal(userCart);

    // Deleta o item "Calça" do carrinho e calcula o total novamente
    await deleteItem(userCart, "Calça");
    await calculateTotal(userCart);

    // Remove o primeiro item do carrinho e calcula o total novamente
    await remove(userCart, 0);
    await calculateTotal(userCart);
})();
