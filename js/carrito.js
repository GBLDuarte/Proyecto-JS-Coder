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
                            <td><button id="c${prod.id}">X</button></td>
                     </tr>`
        tablaCarrito.innerHTML += filaCarrito;
    })
}

function accionAgregar() {
    productos.forEach(prod => {
        const btn = document.querySelector(`#btn${prod.id}`)
        btn.addEventListener("click", () => {
            agregarAlCarrito(`${prod.id}`)
            sumaTotal(...carrito)
        });
    })
}

function agregarAlCarrito(id) {
    const productosCarrito = productos.find(prod => prod.id == id);
    carrito.push(productosCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    msjCarrito();
    limpiezaCarrito();
    generarCarrito();
}

function recuperoCarrito() {
    localStorage.getItem("carrito") && carrito;
}

function limpiezaCarrito() {
    while (tablaCarrito.firstChild) {
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}

function comprobarCarrito() {
    localStorage.getItem("carrito") && generarCarrito();
}

function sumaTotal(...arr) {
    let total = arr.reduce((acc, elemento) => acc + elemento.precio, 0)
    precioFinal.innerHTML = `Precio total: $${total}`
}

// Vaciar carrito mediante boton
const vaciarCarrito = document.querySelector("#btnVaciar")
vaciarCarrito.addEventListener("click", ()=>{
    localStorage.clear()
    
})

// Librerias
function msjCarrito() {
    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(90deg, rgba(31,182,53,1) 0%, rgba(2,195,5,1) 55%)", 
            color: "white",
        },
    }).showToast();
}

comprobarCarrito();
recuperoCarrito();
sumaTotal(...carrito);
accionAgregar();
