export default function generatePass(){
    let Password: string = '';
    let Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let passwordLength = 16;
    for (let index = 0; index < passwordLength; index++) {
        Password += Characters.charAt(Math.floor(Math.random() * Characters.length));
    }
    return Password;
}