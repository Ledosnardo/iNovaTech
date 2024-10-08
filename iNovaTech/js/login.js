const email = document.getElementById("email");
const password = document.getElementById("password");

const btn = document.getElementById("btnLogin");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(verificaEmail(email.value) && verificaSenha(password.value)){
        window.location.href = "../loja/loja.html"
    }

})


function verificaEmail(email){
    const emailLocalStorage = JSON.parse(localStorage.getItem("Usuario")).Email

    if(emailLocalStorage === email){
        return true
    } else{
        alert("Email invalido")
    }
}

function verificaSenha(pass){
    const passLocalStorage = JSON.parse(localStorage.getItem("Usuario")).Senha

    if(passLocalStorage === pass){
        return true
    } else{
        alert("Senha invalida")
    }
}