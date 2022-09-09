const tabla = document.querySelector("#tabla");
// debugger

function cargarProductos() {
    let filaTabla = "";
    productos.forEach(producto => {
        filaTabla = `<tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        </tr>`
        tabla.innerHTML += filaTabla;
    })
}
cargarProductos();