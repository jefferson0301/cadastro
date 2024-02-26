const mensagemErroRg = document.querySelector("#mensagem-erro-rg")
export default function verificarRg(rg){
    const arrayRgInvalidos = ["00000000","11111111","22222222","33333333","44444444","55555555","66666666",
    "77777777","88888888","99999999","000000000","111111111","222222222","333333333","444444444","555555555",
    "666666666","777777777","888888888","999999999"]

    if(arrayRgInvalidos.includes(rg)){
        console.log("Coloque um valor válido para o RG")
        mensagemErroRg.innerHTML = "Coloque um valor válido para o RG"
        return false
    }

    return true
}