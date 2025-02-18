var TypeUser = {
    admin: "você é um adm",
    user: "você é um usuário",
    guest: "você é um convidado"
};
function ValidateUser(User) {
    console.log(TypeUser[User]);
}
ValidateUser("admin");
ValidateUser("user");
ValidateUser("guest");
