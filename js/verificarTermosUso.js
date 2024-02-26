const checkTerms = document.querySelector("#check-terms")
const mensagemErroTermosLidos = document.querySelector("#mensagem-erro-termos-lidos")

let termosUsoLidos = false

export default function verificarTermosUso(){

    if(termosUsoLidos){
        return true
    }
    else{
        mensagemErroTermosLidos.innerHTML = "Leia os termos de uso após isso marque a caixa confirmando a leitura"
        return false
    }

}

checkTerms.addEventListener("click", () =>{
    termosUsoLidos = !termosUsoLidos  
} )