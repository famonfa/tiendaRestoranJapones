


class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let productos = [
    {id:'0', nombre:'Tonkatsus', descripcion: 'Tres empanaditas japonesas + Tonkatsu ro-su con Gohan y colchón de vegetales', precio: 2000, img: "./assets/tonkatsu.jpg" },
    {id:'1', nombre:'Katsu Kare', descripcion: 'Apanado de cerdo acompañando con curry y vegetales en Gohan.' ,precio: 2200, img: "./assets/katsukare.jpg" },
    {id:'2', nombre:'Ebi Furai con Gyozas', descripcion:'Apanado de langostinos + empanaditas japonesas.' ,precio: 2500, img: "./assets/ebifurai.jpg" },
    {id:'3', nombre:'Teriyaki de salmón', descripcion: 'Salmón grillado con salsa agridulce en gohan.' ,precio: 2100, img: "./assets/teriyaki.jpg" },
    {id:'4', nombre:'Sushi', descripcion:'Combinado 11 piezas de sushi de Salmón. 2 Roll, 2 Maki, 3 Sashimi y 4 Nigiri' ,precio: 1950, img: "./assets/sushi.jpg" },
    {id:'5', nombre:'Ramen', descripcion:'Sopa de cerdo con fideos caseros + Pollo frito receta japonesa.' ,precio: 2800, img: "./assets/ramen.jpg" },
    {id:'6', nombre:'Pollo Teriyaki', descripcion:'Pollo salteado con salsa agridulce teriyaki acompañado con arroz.' ,precio: 2800, img: "./assets/reriyaki de salmon.jpg" },
    {id:'7', nombre:'Yakisoba', descripcion:'Tres empanaditas japonesas con picante coreano + Fideos salteados con vegetales.' , precio: 3000, img: "./assets/yakisoba.jpg" },
];

let carrito = [];

const contenedorTienda = document.getElementById('contenedorCarrito')


for (const producto of productos) {
    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const descripcionProducto =document.createElement('p')
    const precioProducto = document.createElement('h3');
    const botonComprar = document.createElement('button');

    divProducto.className = 'card';
    imgProducto.className = 'card-img-top';
    nombreProducto.className = 'nombre-producto';
    descripcionProducto.className = 'descrip';
    precioProducto.className = 'card-precio';
    botonComprar.className = 'btn';

    imgProducto.src = producto.img;
    nombreProducto.append(producto.nombre);
    descripcionProducto.append(producto.descripcion)
    precioProducto.append(`$ ${producto.precio} `);
    botonComprar.append('Comprar');
    botonComprar.id = `${producto.id}`;

   
    
        botonComprar.onclick = () => {
            const productoComprado = productos.find(producto => producto.id === botonComprar.id);
            carrito.push({ nombre: productoComprado.nombre, precio: productoComprado.precio });
           
          }

    divProducto.append(imgProducto, nombreProducto, descripcionProducto, precioProducto, botonComprar);

    contenedorTienda.append(divProducto);
    
    }
   

    const mostrarCarrito = () => {
  
        for (const producto of carrito) {
          const nombreProducto = `<h4>Menú:  ${producto.nombre}</h4> `
          const precioProducto = `<h4>Precio:  ${producto.precio}</h4>`
          contenedorCarrito.innerHTML += nombreProducto + "\n"
          contenedorCarrito.innerHTML += precioProducto + "\n"
        }

        const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
        contenedorCarrito.append(`Total Compra :  ${total}`)
  
  }

  let botonCarrito = document.getElementById("btnCarrito")
  botonCarrito.onclick = mostrarCarrito;
  



    
    









  
























//   //     let productoSeleccionado = prompt("¿Que desea comprar? \n1)  \n2)  \n3)  \n4)  \n5)  \n6)  \n7)  \n8)  ");
//     // switch (productoSeleccionado) {

//     //     case "1":
//     //     alert("Seleccionaste " + producto1.nombre + "por $" + producto1.precio);
//     //     totalCompra = totalCompra + producto1.precio
//     //     alert("El total de tu compra es " + totalCompra)
//     //     break;

//     //     case "2":
//     //     alert("Seleccionaste " + producto2.nombre + "por $" + producto2.precio);
//     //     totalCompra = totalCompra + producto2.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     case "3":
//     //     alert("Seleccionaste " + producto3.nombre + "por $" + producto3.precio);
//     //     totalCompra = totalCompra + producto3.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     case "4":
//     //     alert("Seleccionaste " + producto4.nombre + "por $" + producto4.precio);
//     //     totalCompra = totalCompra + producto4.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     case "5":
//     //     alert("Seleccionaste " + producto5.nombre + "por $" + producto5.precio);
//     //     totalCompra = totalCompra + producto5.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     case "6":
//     //     alert("Seleccionaste " + producto6.nombre + "por $" + producto6.precio);
//     //     totalCompra = totalCompra + producto6.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     case "7":
//     //     alert("Seleccionaste " + producto7.nombre + "por $" + producto7.precio);
//     //     totalCompra = totalCompra + producto7.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     case "8":
//     //     alert("Seleccionaste " + producto8.nombre + "por $" + producto8.precio);
//     //     totalCompra = totalCompra + producto8.precio
//     //     alert("El total de tu compra es " + totalCompra)

//     //         break;
//     //     default:
//     //         alert("No seleccionaste ningún producto.")
//     //         break;
//     // }


// //   alert("Muchas gracias por tu compra")

