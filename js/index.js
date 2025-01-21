const contenedorbox = document.getElementById("container-box")


function crearcontainerbox (productos){
    productos.forEach(producto => {
        const nuevasgifcard = document.createElement("div");
        nuevasgifcard.classList = "box2";
        nuevasgifcard.innerHTML=`
        <img src="${producto.img}" alt="">
        <h2 class="body-box2">${producto.dato}</h2>
        <p class="footer-box2"><span>us</span>$${producto.precio}</p>
        <button class="buy">Comprar</button>`
        contenedorbox.appendChild(nuevasgifcard);
        nuevasgifcard.getElementsByTagName("button")[0].addEventListener("click",() => agregaralcarrito(producto))
    });
}

crearcontainerbox(Giftcards);
