const Cuentacarritoelementos = document.getElementById("Cuentacarrito")

function agregaralcarrito(producto){

    let memoria = JSON.parse (localStorage.getItem("Giftcards")); 
    let cantidadproductofinal;
    console.log (memoria);
    if (!memoria || memoria.length === 0 ){
        const nuevoproducto= nuevoproductomemoria (producto);
        localStorage.setItem ("Giftcards", JSON.stringify ([nuevoproducto]));
        actualizarnumerocarrito()
        cantidadproductofinal = 1;
    } 
    else {
    const indiceproducto = memoria.findIndex(giftcard => giftcard.id === producto.id);
    const nuevamemoria = memoria;
    if (indiceproducto === -1){
        const nuevoproducto=nuevoproductomemoria(producto);
        nuevamemoria.push(nuevoproducto)
        cantidadproductofinal = 1 ;
    } else {
        nuevamemoria[indiceproducto].cantidad ++;
        cantidadproductofinal=nuevamemoria[indiceproducto].cantidad;
    }
    localStorage.setItem("Giftcards",JSON.stringify(nuevamemoria));
    actualizarnumerocarrito();
    return cantidadproductofinal;
    }
}

function nuevoproductomemoria (producto) {
    const nuevoproducto = producto;
    nuevoproducto.cantidad= 1;
    return nuevoproducto;
}

function actualizarnumerocarrito(){
    let carrito = 0 ;
    const memoria = JSON.parse (localStorage.getItem("Giftcards")); 
    if (memoria && memoria.length > 0){
        carrito = memoria.reduce ((acum,current) => acum+current.cantidad,0)
    return Cuentacarritoelementos.innerText= Cuentacarrito;
    }
    Cuentacarritoelementos.innerText=0;
}
function reiniciarcarrito ( ){
    localStorage.removeItem("Giftcards");
    actualizarnumerocarrito();
}

actualizarnumerocarrito();

