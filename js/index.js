const productos = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenido = document.querySelector("#contenido");

// FUNCIONES
// Interaccion HTML

function cargarProductos(arr) {
    let cargaProds = "";
    contenido.innerHTML = "";
    arr.forEach((prod) => {
        cargaProds =
            `<div class="card" style="width: 18rem;">
                <img src="${prod.img}"
                class="card-img" style="height: 260px" alt="producto${prod.id}">
                    <div class="card-body">
                         <h3 class="card-name">${prod.nombre}</h3>
                         <h4 class="card-price">Precio: $${prod.precio}</h4>
                         <div class="btn-center">
                         <a id="p${prod.id}" class="btn btn-primary">Agregar al Carrito</a>
                     </div>
            </div>`;
        contenido.innerHTML += cargaProds;
    });
}

// FETCH

const tomarData = async () => {
    try {
        const response = await fetch("../data/productos.json");
        const datos = await response.json();
        productos.push(...datos);
        cargarProductos(productos);
        accionAgregar();
    } catch (error) {
        console.log(error);
    }
};
tomarData();

// Agregar al carrito mediante boton, las funciones que integran este evento se encuentra en carrito.js
function accionAgregar() {
    productos.forEach((prod) => {
        const btn = document.querySelector(`#p${prod.id}`);
        btn.addEventListener("click", () => {
            agregarAlCarrito(`${prod.id}`);
            sumaTotal(...carrito);
            btn.classList.add("ocultar");
        });
    });
}