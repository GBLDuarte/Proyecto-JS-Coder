// Declarar
const productos = [
    {id: 210, nombre: "LAPIZ", precio: 210},
    {id: 10, nombre: "TIJERA", precio: 320},
    {id: 451, nombre: "BLOC DE HOJAS A4", precio: 510},
    {id: 12, nombre: "BLOC DE HOJAS OFICIO", precio: 600},
    {id: 2, nombre: "CARTUCHERA", precio: 400},
    {id: 333, nombre: "FIBRON", precio: 350},
    {id: 921, nombre: "GOMA", precio: 150},
    {id: 313, nombre: "GOMA SUPER", precio: 250},
    {id: 300, nombre: "CARTULINA", precio: 80},
    {id: 1, nombre: "LAPICERA", precio: 200},
    {id: 2010, nombre: "COMPAS", precio: 450},
    {id: 111, nombre: "LAPICERA PREMIUM", precio: 300},
    {id: 3, nombre: "LIQUID PAPER", precio: 280},
    {id: 2023, nombre: "REGLA", precio: 100},
]

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class Producto {
    constructor (id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

productos.push(new Producto(4, "REGLA DE METAL", 500)); 
productos.push(new Producto(7740, "LAPIZ BIC", 310)); 
productos.push(new Producto(641, "TRANSPORTADOR", 220)); 
productos.push(new Producto(2022, "LAPIZ DE COLOR X5", 700)); 