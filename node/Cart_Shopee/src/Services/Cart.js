// casos de usos

//-> Adicionar item ao carrinho

async function addItem(name, quantidade, preco) {
    console.log(`o item ${name} com a quantidade de ${quantidade} de valor unitario ${preco}foi adicionado ao carrinho com sucesso! c`);
}

//-> Remover item do carrinho
async function removeItem(name) {
    console.log(`o item ${name} foi removido do carrinho com sucesso!`);
}


//-> Calcular total do carrinho

//-> Limpar carrinho
export {
    addItem,
    removeItem,
    
};


