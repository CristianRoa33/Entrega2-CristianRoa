function agregaralabolsa(producto){
    const memoria = localStorage.getItem("Giftcards") 
    console.log (memoria);
    if (!memoria){
        const nuevoproducto= producto;
        nuevoproducto.cantidad = 1;
        localStorage.setItem ("Giftcards", JSON.stringify ([nuevoproducto]));
}
}