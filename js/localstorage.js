function agregarAlcarrito(producto){
    const memoria = JSON.parse (localStorage.getItem("Giftcards"));
    console.log (memoria);
    if (!memoria){
        const nuevoproducto= nuevoproductomemoria (producto);
        localStorage.setItem ("Giftcards", JSON.stringify ([nuevoproducto]));
    } 
    else {
    const indiceproducto = memoria.findIndex(giftcard => giftcard.id === producto.id);
    const nuevamemoria = memoria;
    if (indiceproducto === -1){
        nuevamemoria.push(nuevoproductomemoria(producto))
    } else {
        nuevamemoria[indiceproducto].cantidad ++;
    }
    localStorage.setItem("Giftcards",JSON.stringify(nuevamemoria));
    }
    actualizarnumerocarrito();
}

function nuevoproductomemoria (producto) {
    const nuevoproducto = producto;
    nuevoproducto.cantidad= 1;
    return nuevoproducto;
}

const cuentacarritoelement = document.getElementById("cuenta-carrito");
function actualizarnumerocarrito(){
    const memoria = JSON.parse (localStorage.getItem("Giftcards")); 
    const cuenta = memoria.reduce ((acum,current) => acum+current.cantidad,0);
    cuentacarritoelement.innerText= cuenta;
}
function reiniciarcarrito ( ){
    localStorage.removeItem("Giftcards");
    actualizarnumerocarrito();
}

actualizarnumerocarrito();
