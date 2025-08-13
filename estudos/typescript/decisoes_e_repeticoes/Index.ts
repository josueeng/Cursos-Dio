const TypeUser = {
    admin: "você é um adm",
    user: "você é um usuário",
    guest: "você é um convidado"
}
function ValidateUser(User:string) {
    console.log(TypeUser[User as keyof typeof TypeUser])
}
ValidateUser("admin")
ValidateUser("user")
ValidateUser("guest")