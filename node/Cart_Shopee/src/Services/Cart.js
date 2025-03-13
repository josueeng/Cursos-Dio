// casos de usos

//-> Adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//-> Calcular total dos itens
async function calculateTotal(userCart) {
    let total = 0;
    userCart.forEach(item => {
        total += item.subtotal();
    });
    console.log(total);
    return total;
}

//-> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

//-> Remover 1 item do carrinho
async function remove(userCart, index) {
    if (index >= 0 && index < userCart.length) {
        userCart.splice(index, 1);
    }
}

//-> Calcular total do carrinho
export { addItem, calculateTotal, deleteItem, remove };