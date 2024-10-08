const carrinhoLoja = []
var primeiraCompra = true

function comprar(id,nome, preco, imagem){
    const itemNovo = {
        "id": id,
        "Nome": nome,
        "Preco": preco,
        "Imagem": imagem
    }
    const storage = JSON.parse(localStorage.getItem("Carrinho"))

    if(storage == null){
        carrinhoArray(itemNovo)
    }else{
        if(primeiraCompra){
            primeiraCompra = false;

            carrinhoStore(storage);
            carrinhoArray(itemNovo);
        } else{
            carrinhoArray(itemNovo);
        }
    }
}

function carrinhoArray (item) {

    if(item != undefined){
        carrinhoLoja.push(item)
    }

    return carrinhoLoja
}

function carrinho(){
    localStorage.setItem("Preço Total", JSON.stringify(precoTotal(carrinhoArray())))
    localStorage.setItem("Carrinho", JSON.stringify(carrinhoArray()))
    window.location.href = "../carrinho/carrinho.html";
}

function carrinhoStore(storage){
    const array = []

    for(var i = 0; storage.length > i; i++){
        carrinhoArray(storage[i])
    }

    return array
}

function precoTotal(array){
    var preco = 0;
    for(var i = 0; array.length > i; i++){
        preco += parseInt(array[i].Preco)
    }
    return preco
}   