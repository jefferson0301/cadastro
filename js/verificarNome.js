const mensagemErroNome = document.querySelector("#mensagem-erro-nome")

export default function verificarNome(nome){
    const listaCaracteres = ["*","@","#","%","!"]
    let nomeQuebrado = nome.split("")//quebra a string
    console.log(nomeQuebrado)
    //debugger
    if(nome.length < 3){
        console.log("Tamanho de nome inválido")
        mensagemErroNome.innerHTML = "Tamanho de nome inválido"
        return false
    }

    if(!nomeQuebrado.includes(" ")){
        mensagemErroNome.innerHTML = `insira o sobrenome`
        return false
    }

    let temCaracteresEspeciais = false
    for(let i = 0; i< nomeQuebrado.length ;i++){
        if(listaCaracteres.includes(nomeQuebrado[i])){
            console.log(nomeQuebrado[i])
            mensagemErroNome.innerHTML = `insira caracteres válidos ${nomeQuebrado[i]} não é válido`
            temCaracteresEspeciais = true
            break
        }
    }

    if(temCaracteresEspeciais){
        mensagemErroNome.innerHTML = `insira caracteres válidos`
        return false
    }
    
    

   return true
}