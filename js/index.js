// Declarar
const productos = [
    {id: 210, nombre: "LAPIZ", precio: 210},
    {id: 10, nombre: "TIJERA", precio: 320},
    {id: 451, nombre: "BLOC DE HOJAS A4", precio: 510},
    {id: 12, nombre: "BLOC DE HOJAS OFICIO", precio: 600},
    {id: 2, nombre: "CARTUCHERA", precio: 400},
    {id: 333, nombre: "FIBRON", precio: 300},
    {id: 921, nombre: "GOMA", precio: 150},
    {id: 313, nombre: "GOMA SUPER", precio: 250},
    {id: 300, nombre: "CARTULINA", precio: 80},
    {id: 1, nombre: "LAPICERA", precio: 200},
    {id: 2010, nombre: "FIBRA", precio: 90},
]

// Ejecucion
// mainProductos();


// Funciones
function mainProductos() {
    if (confirm("Desea ver la lista de productos?")) {
        console.table(productos);
        if (confirm("Desea aplicar algun filtro u orden de productos?")) {
            ordenarProductos();
        }
        else {
         alert("Bueno, no queres nada. Andate.");
        }
    } else {
        alert("Adios");
    }
}

function filtrarProductos() {
    let intr = prompt("Introduzca el nombre a filtrar:");
    const filtro = productos.filter((fil) => fil.nombre.includes(intr));
    console.log(filtro);
}

function ordenarProductos() {
    let entrada = parseInt(prompt("Digite con el numero correspondiente, el metodo que quiera utilizar: \n1. Ordenar por ID \n2. Ordenar por Nombre \n3. Ordenar por Precio \n4. Filtrar por nombre"))
    
    if (entrada === 1) {
        productos.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            return 0;
        })
        console.table(productos);
    } 
    else if (entrada === 2) {
        productos.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        })
        console.table(productos);
    }
    else if (entrada === 3) {
        productos.sort((a, b) => {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            return 0;
        })
        console.table(productos);
    }
    else if (entrada === 4) {
        filtrarProductos();
    }
    else {
        alert("Entonces para que confirmaste antes?");
    }
}
