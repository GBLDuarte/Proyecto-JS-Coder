const productos = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const tabla = document.querySelector("#tabla");
const inputId = document.querySelector("#ordenId");
const inputNombre = document.querySelector("#ordenNombre");
const inputPrecio = document.querySelector("#ordenPrecio");
const inputFiltro = document.querySelector("#buscarProd");

inputId.addEventListener("click", ordenId);
inputNombre.addEventListener("click", ordenNombre);
inputPrecio.addEventListener("click", ordenPrecio);
inputFiltro.addEventListener("input", filtroProductos);

// FUNCIONES
// Interaccion HTML

function cargarProductos(arr) {
    let filaTabla = "";
    tabla.innerHTML = "";
    arr.forEach((prod) => {
        filaTabla = `<tr>
                        <td>${prod.id}</td>
                        <td>${prod.nombre}</td>
                        <td>$${prod.precio}</td>
                        <td><button id="btn${prod.id}">+</button></td>
                    </tr>`;
        tabla.innerHTML += filaTabla;
    });
}


// Metodos de orden

function ordenId() {
    productos.sort((a, b) => {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    });
    cargarProductos(productos);
}

function ordenNombre() {
    productos.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
    cargarProductos(productos);
}

function ordenPrecio() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 0;
    });
    cargarProductos(productos);
}

// Filtrado de productos por nombre

function filtroProductos() {
    inputFiltro.value = inputFiltro.value.toUpperCase();
    if (inputFiltro.value !== "") {
        const salida = productos.filter((filtro) =>
            filtro.nombre.includes(inputFiltro.value)
        );
        if (salida.length === 0) {
            console.warn("No se encuentra");
            cargarProductos(productos);
        } else {
            cargarProductos(salida);
        }
    } else {
        cargarProductos(productos);
    }
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

// Agregar al carrito mediante boton
function accionAgregar() {
    productos.forEach((prod) => {
        const btn = document.querySelector(`#btn${prod.id}`);
        btn.addEventListener("click", () => {
            agregarAlCarrito(`${prod.id}`);
            sumaTotal(...carrito);
        });
    });
}