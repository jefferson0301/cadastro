const mensagemErroSenha = document.querySelector("#mensagem-erro-senha")
const mensagemErroSenhaConfirmar = document.querySelector("#mensagem-erro-senha-confirmar")

export default function verificarSenha(senha, confirmarSenha){

    let senhaQuebrada = senha.split("") 

    //regras de negócio da senha

    //tamanho pequeno
    if(senha.length <6){
        mensagemErroSenha.innerHTML = "Senha possui tamanho pequeno digite pelo menos 6 caracteres"
        return false 
    }

    //conter pelo menos uma letra
    let listaLetras = ["a","b","c","ç","d","e","f","g","h","i","j","l","m","n","o","p",
    "q","r","s","t","u","v","x","z","y","w","A","B","C","D","E","F","G","H","I","J","L","M",
    "N","O","P","Q","R","S","T","U","V","X","Z","W","Y"]
    let temLetra = false
    for(let i = 0; i < senhaQuebrada.length; i++){
        if(listaLetras.includes(senhaQuebrada[i])){
            temLetra = true
            break
        }
    }

    if(!temLetra){
        mensagemErroSenha.innerHTML = "A senha precisa ter pelo menos uma letra"
        return false
    }


    //verfica se senha = confirmarSenha
    if(senha === confirmarSenha){
        return true
    }else{
        mensagemErroSenhaConfirmar.innerHTML = "A senha precisa ser igual ao confirmar senha"
        return false
    }

}