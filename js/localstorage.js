const cuentacarritoelementos = document.getElementById("cuentacarrito")

function agregarAlcarrito(producto){

    const memoria = JSON.parse(localStorage.getItem("Giftcards"));
    console.log (memoria);
    if (!memoria){
        const nuevoproducto = producto ; 
        nuevoproducto.cantidad = 1 ;
        localStorage.setItem("Giftcards" , JSON.stringify([nuevoproducto]));
    } else {
        const indiceproducto = memoria.findindex(Giftcards => Giftcards.id)
        console.log(indiceproducto)
    }
}
