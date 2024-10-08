const email = document.getElementById("email");
const nome = document.getElementById("name");
const password = document.getElementById("password");

const btnCadastrar = document.getElementById("btnCadastrar");


btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();

    if(verificaEmail(email.value) && verificaNome(nome.value) && verificaPass(password.value)){
        const usuario = {
            "Email": email.value,
            "Nome": nome.value,
            "Senha": password.value
        }

        localStorage.setItem("Usuario", JSON.stringify(usuario))
        window.location.href = "pages/login/login.html"
    } 
})

function verificaEmail(email) {
    const validaEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")

    if(validaEmail.test(email)){
        return true
    } else{
        alert("Digite um email valido")
    }
}

function verificaNome(nome) {
    const nomeComoArray = nome.split(' ');
    if(nomeComoArray.length >= 2){
        return true
    } else{
        alert("Digite um nome valido")
    }
}

function verificaPass(pass) {
    validaPass = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$")
    if(validaPass.test(pass)){
        return true
    } else{
        alert("Digite uma senha valida")
    }
}
