const btnContinua = document.getElementById("btnContinuar")

btnContinua.addEventListener("click", (e)=> {
    e.preventDefault()

    const listaUl = document.getElementsByName("pagamento")
    const metodoSelecionado = filtro(listaUl)

    window.location.href = `../pagamento/${metodoSelecionado}.html`;
})

function filtro(lista){
    var selecionado 
    for(var i = 0; lista.length > i; i++){
        if(lista[i].checked){
            selecionado = lista[i].value
        }
    }
    return selecionado
}