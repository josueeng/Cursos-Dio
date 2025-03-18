async function connectToDatabase(User, Password) {
    if (User === process.env.USERDATABASE && Password === process.env.PASSWORDDATABASE) {
        console.log("Conectado com sucesso");
    } else {
        console.log("Usuário ou senha inválidos");
    }
}

export default connectToDatabase;