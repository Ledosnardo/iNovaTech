const cep = document.getElementById("cep");
const btnContinuar = document.getElementById("btnContinuar");

cep.addEventListener("blur", (e) => {
    if(verificaCEP(e.target.value)){
        btnContinuar.disabled = false
        totalAPagar();
    }
})

function verificaCEP(cep) {
    const validaCEP = new RegExp("^[0-9]{5}-[0-9]{3}$")

    if(validaCEP.test(cep)){
        return true
    } else{
        alert("Digite um CEP valido")
    }
}

function totalAPagar(){
    const totalAPagar = document.getElementById("precoTotalAPagar");
    totalAPagar.remove();
    
    const totalPagarStore = parseInt(JSON.parse(localStorage.getItem("Preço Total"))) + 100
    localStorage.setItem("Preço Total", JSON.stringify(totalPagarStore))
    
    const novoTextHTML = document.createElement("h3")
    novoTextHTML.classList.add('precoTotalAPagar')
    novoTextHTML.innerText = `R$${totalPagarStore}`
    
    const totalDiv = document.getElementById("total");
    totalDiv.append(novoTextHTML)
}