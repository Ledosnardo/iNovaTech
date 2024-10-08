function carrinho (){
    const listaHTML = document.getElementById("listas");
    const carrinho = JSON.parse(localStorage.getItem("Carrinho"));

    const totalAPagar = document.getElementById("precoTotalAPagar");    
    const totaPagarStore = JSON.parse(localStorage.getItem("Preço Total"))

    for(var i = 1; 5 >= i; i++){
        const arrayCarrinho = carrinho.filter(item => item.id == i)
        
        const card = document.createElement('li')
        card.classList.add('liCompras')
        
        if(arrayCarrinho.length > 0){
            const precoTotal = precoTotalItem(arrayCarrinho);
            card.innerHTML = `  
                <div class="content">
                    <img src="${arrayCarrinho[0].Imagem}"/>
                    <h2>${arrayCarrinho[0].Nome}</h2>
                </div>
                <div class="price">
                    <h3>${arrayCarrinho.length}</h3>
                    <span>R$${precoTotal}</span>
                </div>
            `
            listaHTML.append(card)
        }

        totalAPagar.innerText = `R$${totaPagarStore}`
    }

}

function precoTotalItem(arrayCarrinho){
    var preco = 0;
    for(var i = 0; arrayCarrinho.length > i; i++){
        preco += parseInt(arrayCarrinho[i].Preco)
    }
    return preco
}

carrinho();