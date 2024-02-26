const mensagemErroEmail = document.querySelector("#mensagem-erro-email")


export default function verificarEmail(email){
    const bancoFicticio = ["teste@gmail.com","teste@hotmail.com"]
    let emailQuebrado = email.split("")
    //console.log(emailQuebrado)
    if(emailQuebrado[0].includes("@") || emailQuebrado[emailQuebrado.length -1].includes("@")){
        //console.log("@ não pode ta no começo ou final do email")
        mensagemErroEmail.innerHTML = "@ não pode ta no começo ou final do email"
        return false
    }

    if(bancoFicticio.includes(email)){
        //console.log("Esse email já está cadastrado no banco de dados coloque outro email")
        mensagemErroEmail.innerHTML = "Esse email já está cadastrado no banco de dados coloque outro email"
        return false
    }

    return true

}