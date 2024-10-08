const codigoCartao = document.getElementById("codigoCartao");
const CVV = document.getElementById("CVV");
const nomeTitular = document.getElementById("nomeTitular");
const divCartao = document.getElementById("cartao");
const btnAprovar = document.getElementById("btnAprovar");

const codVisa = new RegExp("^4[0-9]{12,15}$")
const codMastercard = new RegExp("^5[1-5]{1}[0-9]{14}")
const codAmericanExpress = new RegExp("^3(4|7){1}[0-9]{13}$")


btnAprovar.addEventListener("click", (e) => {
    e.preventDefault();
    if(!nomeTitular.value == "" && !codigoCartao.value == "" && !CVV.value == ""){
        alert("Compra aprovada");
        window.location.href = "../loja/loja.html"
    } else{
        alert("Preencha todos valores pedidos")
    }
})

CVV.addEventListener("blur", (e) => {
    if(!verificaCVV(e.target.value)){
        e.target.value = ""
    }
} )

codigoCartao.addEventListener("blur", (e) => {
    if(!verificaCodigo(e.target.value)){
        e.target.value = ""
    }
})

function verificaCodigo(cod) {

    if(codVisa.test(cod)){
        const card = document.createElement('img')
        card.src = "../../images/visa.webp"
        card.classList.add('cartaoImg')
        divCartao.append(card)

        return true
    } else if(codMastercard.test(cod)){
        const card = document.createElement('img')
        card.src = "../../images/mastercard.webp"
        card.classList.add('cartaoImg')
        divCartao.append(card)

        return true
    }else if(codAmericanExpress.test(cod)){
        const card = document.createElement('img')
        card.src = "../../images/americanExpress.png"
        card.classList.add('cartaoImg')
        divCartao.append(card)

        return true
    }
    else{
        alert("Digite um código de cartão valido")
    }
}

function verificaCVV(cvv){
    const codCVV = new RegExp("^[0-9]{3,4}$")

    if(codCVV.test(cvv)){
        return true
    } else{
        cvv == ""
        alert("Digite um CVV valido")
    }
}

function converterMaiscula(input){
    input.value = input.value.toUpperCase()
}