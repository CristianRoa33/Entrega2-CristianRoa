
let bolsaDeCompras = [];

// Función para agregar un producto a la bolsa //
function agregarProducto(producto) {
    bolsaDeCompras.push(producto);
    console.log("ítem agregado al carrito");
}

// Función para quitar un producto de la bolsa //
function quitarProducto(producto) {
    const indice = bolsaDeCompras.indexOf(producto);
    if (indice !== -1) {
        bolsaDeCompras.splice(indice, 1);
        console.log("Los valores de los ítems fueron cambiados");
    } else {
        console.log("ítems que no se encuentran en el carrito");
    }
}

// Función para mostrar todos los productos en la bolsa //
function mostrarBolsa() {
    if (bolsaDeCompras.length > 0) {
        console.log('Los productos en la bolsa son:', bolsaDeCompras);
    } else {
        console.log('La bolsa de compras está vacía.');
    }
}

alert("Gracias por comprar con nosotros. Revisa la consola para ver el contenido de tu bolsa de compras.")


// Productos de ejemplos de uso //
agregarProducto('Jean');
agregarProducto('Camiseta roja');
mostrarBolsa();
quitarProducto('Camiseta Verde');
mostrarBolsa();
quitarProducto('Jogger gris');
mostrarBolsa();
