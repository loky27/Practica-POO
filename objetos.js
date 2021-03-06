/*
Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL
Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.
*/
let articulo = { 
    nombre: "Rufles azules", 
    descripcion: "Papas fritas", 
    precio: 20, 
    cantidad: 300,
     fotografia: "https://www.chedraui.com.mx/medias/7500478007998-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTEyNjM0fGltYWdlL2pwZWd8aGFkL2g1OC8xMTMyMTYzMzkzMTI5NC5qcGd8YzQ2YzNmNjlmMDdlMTZhMDU0YTVhMTY1ZjJlYzk1OWYzMGI5MDExNjA5YTlkNGM0M2QwYWQzOGNlYTAxODE0ZA"
     },
    venta = { 
      articulos: [
              "Zucaritas",
              "Rufles azules",
              "Chokies",
              "Pastel de chocolate"],
      total: 150,
      idCliente: 1470,
      correo: "fulanito@gmail.com" };
console.log(articulo); 
console.log(venta); 
console.log("El total de la compra es: ", venta.total); 