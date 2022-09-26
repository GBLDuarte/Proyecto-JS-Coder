const tablaCarrito = document.querySelector("#tablaCarrito");
const precioFinal = document.querySelector("#total");

function generarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let filaCarrito = "";
        carrito.forEach(prod => {
            filaCarrito = `<tr>
                            <td>${prod.id}</td>
                            <td>${prod.nombre}</td>
                            <td>$${prod.precio}</td>
                            </tr>`
                            tablaCarrito.innerHTML += filaCarrito;
        })
}

function accionAgregar() {
    productos.forEach(prod => {
        const btn = document.querySelector(`#btn${prod.id}`)
            btn.addEventListener("click", () => {
                agregarAlCarrito(`${prod.id}`)
                sumaTotal()
        });      
        })        
}

function agregarAlCarrito(id) {
    const productosCarrito = productos.find(prod => prod.id == id);
    carrito.push(productosCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    limpiezaCarrito();
    generarCarrito();
}

function recuperoCarrito() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }
}

function limpiezaCarrito() {
    while (tablaCarrito.firstChild) {
      tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}

function comprobarCarrito() {
    if (localStorage.getItem("carrito")) {
        generarCarrito();
    }
}

function sumaTotal() {
    let total = carrito.reduce((acc, elemento) => acc + elemento.precio, 0)
    precioFinal.innerHTML = `Precio total: $${total}`
}

comprobarCarrito();
recuperoCarrito();
accionAgregar();
