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

function agregarAlCarrito(id) {
    const productosCarrito = productos.find(prod => prod.id == id);
    carrito.push(productosCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    msjCarrito();
    limpiezaCarrito();
    generarCarrito();
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

// Vacia el carrito completamente por boton + alerta
const vaciarCarrito = document.querySelector("#btnVaciar")

function vaciadoCarrito() {
    Swal.fire({
        title: 'Desea vaciar el carrito completamente?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: "red",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Realizado con exito",
                icon: "success",
                showConfirmButton: false
            })
            setTimeout(() => {
                localStorage.clear();
                location.reload();
            }, "730")
        }
    })
}

vaciarCarrito.addEventListener("click", vaciadoCarrito);

// Librerias para alertas
function msjCarrito() {
    Toastify({
        text: "Agregado al carrito",
        duration: 1000,
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
sumaTotal(...carrito);
