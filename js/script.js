import verificarNome from "./verificarNome.js"
import verificarEmail from "./verificarEmail.js"
import verificarRg from "./verificarRg.js"
import verificarCpf from "./verificarCpf.js"
import verificarSenha from "./verificarSenha.js"
import verificarTermosUso from "./verificarTermosUso.js"
const form = document.querySelector("[data-formulario]")
const listaImputs = document.querySelectorAll(".campo__input")
const btnEnviar = document.querySelector(".btn-enviar")
const mensagemErroNome = document.querySelector("#mensagem-erro-nome")
const mensagemErroEmail = document.querySelector("#mensagem-erro-email")
const mensagemErroRg = document.querySelector("#mensagem-erro-rg")
const mensagemErroCpf = document.querySelector("#mensagem-erro-cpf")
const mensagemErroSenha = document.querySelector("#mensagem-erro-senha")
const mensagemErroSenhaConfirmar = document.querySelector("#mensagem-erro-senha-confirmar")
const mensagemErroTermosLidos = document.querySelector("#mensagem-erro-termos-lidos")

console.log(listaImputs)

btnEnviar.addEventListener("click", () => {
    let nomeValido = false
    let emailValido = false
    let rgValido = false
    let cpfValido = false
    let senhaValida = false
    let termoUsoValido = false
    if(verificarNome(listaImputs[0].value)){
        mensagemErroNome.innerHTML = ""
        nomeValido = true
    }

    if(verificarEmail(listaImputs[1].value)){
        mensagemErroEmail.innerHTML = ""
        emailValido = true
    }

    if(verificarRg(listaImputs[2].value)){
        mensagemErroRg.innerHTML = ""
        rgValido = true
    }

    if(verificarCpf(listaImputs[3])){
        mensagemErroCpf.innerHTML = ""
        cpfValido = true
    } else{
        mensagemErroCpf.innerHTML = "Esse CPF é inválido"
    }

    if(verificarSenha(listaImputs[4].value, listaImputs[5].value)){
        mensagemErroSenha.innerHTML = ""
        mensagemErroSenhaConfirmar.innerHTML = ""
        senhaValida = true
    }

    if(verificarTermosUso()){
        mensagemErroTermosLidos.innerHTML = ""
        termoUsoValido = true
    }

    //se tudo tiver válido pode mandar o formulário
    if(nomeValido == true && emailValido == true && rgValido == true && cpfValido == true && senhaValida == true && termoUsoValido == true){
        
        let usario = {
            "nome": listaImputs[0].value,
            "email": listaImputs[1].value,
            "rg": listaImputs[2].value,
            "cgf": listaImputs[3].value,
            "senha": listaImputs[4].value
        }
        console.log(usario)
        localStorage.setItem("cadastro-usuario", JSON.stringify(usario));
        window.location.href = "./proxima-pagina.html"
    }

})