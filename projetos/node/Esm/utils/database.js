async function connectToDatabase(dataname) {
    console.log(`conectado ao banco de dados ${dataname}`)
    
}
async function disconnectFromDatabase(dataname) {
    console.log(`desconectado do banco de dados ${dataname}`)
    
}
export { connectToDatabase, disconnectFromDatabase };