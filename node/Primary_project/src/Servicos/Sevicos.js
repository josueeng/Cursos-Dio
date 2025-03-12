async function getFullName(codeId, productName){
    console.log ("Codigo do produto : " + codeId + "\nNome do Produto : "+ productName);
}
async function getLabel(Name){
    console.log("Nome do produto :" + Name)
}
module.exports ={
    getFullName,
    getLabel
};