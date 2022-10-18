let total  //se utiliza para el precio total del carrito y tambien para la class
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

comprobarCarrito();

function sumaTotal(...arr) {
    total = arr.reduce((acc, elemento) => acc + elemento.precio, 0)
    precioFinal.innerHTML = `TOTAL: $${total}`
}

sumaTotal(...carrito);

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
        duration: 1500,
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

// Finalizando compra (guarda en storage los datos de compra y reload)
const btnCompra = document.querySelector("#btnCompra");
btnCompra.classList.remove("ocultar");

class CompraRealizada {
    constructor(arr) {
        this.momento = new Date().toLocaleString();
        this.productos = arr.length;
        this.total = total;
    }
}

function guardarCompra() {
    let prodsDeCompra = [];
    prodsDeCompra.push(new CompraRealizada(carrito));
    localStorage.setItem("compra", JSON.stringify(prodsDeCompra));
    console.table(prodsDeCompra);
}

btnCompra.addEventListener("click", ()=> {
    guardarCompra();
        Swal.fire({
        title: "Gracias por realizar la compra!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    })
    setTimeout(() => {
        localStorage.removeItem("carrito");
        location.reload();
    }, "1500")
})
