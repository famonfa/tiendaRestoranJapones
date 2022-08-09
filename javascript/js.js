

let carrito = [];

const URL = '\data.json'

const contenedorTienda = document.getElementById('contenedorCarrito')

// Presentación de los productos

function renderProducts (productos) {
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
    
       
        // Pasar al carrito

        botonComprar.onclick = () => {
           //const producto = productos.find(producto => producto.id === botonComprar.id);
           
            carrito.push({ nombre: producto.nombre, precio: producto.precio, img: producto.img});
            
            Toastify({
                text: "Lo agregaste al carrito",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, #3F3A59, #86B1AA)",
                }
                
              }).showToast();
           
            function saveLocalStorage() {
                carritoLocalStorage = localStorage.setItem("mostrarCarrito", JSON.stringify(carrito))
                
               }
            saveLocalStorage()
          }
          

    divProducto.append(imgProducto, nombreProducto, descripcionProducto, precioProducto, botonComprar);

    contenedorTienda.append(divProducto);
    
    }}

  
fetch( URL)
.then (res => res.json() )
.then( data => { renderProducts(data) })

//Carrito

    let botonCarrito = document.querySelector('.modal-btn')
    const cart = document.getElementById("cart");
    const divProducto = document.getElementById("card-cart")
    let modalBg = document.querySelector('.modal-bg')
    botonCarrito.addEventListener('click', function(){
    modalBg.classList.add('bg-active')
   })
  
   function getLocalStorage() {
    let getCarrito = JSON.parse(localStorage.getItem('mostrarCarrito'))
     
    if (getCarrito) {
     carrito = getCarrito;
     
    }else {
     carrito = [];
    }
 }
 getLocalStorage()

   function mostrarCarrito() {
    
}
    
    cart.innerHTML = "";

   
    const h2 = document.createElement('h2');
    h2.textContent = "Mi carrito";
    
   cart.appendChild(h2)

console.log(carrito);
    for (const producto of carrito) {

        const divProducto = document.createElement('div');
        const divTextContainer = document.createElement('div')
        const nombreProducto = document.createElement('h4');
        const imgProductoCart = document.createElement('img')
        const precioProducto = document.createElement('h4');
        const eliminarProducto = document.createElement('span')
        
        divProducto.className = 'card-loc';
        
        precioProducto.className = 'link-a';
        nombreProducto.className = 'nombre-producto';
        imgProductoCart.className = 'img-carrito'
        eliminarProducto.className = 'eliminar-prod'

        nombreProducto.append(`${producto.nombre}`)
        precioProducto.append(`$ ${producto.precio}`);
        imgProductoCart.setAttribute('src', producto.img)
        eliminarProducto.innerHTML = 'X'
        
        
        divTextContainer.append(nombreProducto, precioProducto, eliminarProducto)
        divProducto.append(divTextContainer, imgProductoCart);
        cart.append(divProducto)

        //Acá tengo problemas para armar esta función. Probe con el remove pero así queda guardada en JSON. 
        //Tengo que eliminar del array pero se me esta complicando.

        eliminarProducto.addEventListener('click', function(){
        let productoElim = carrito.find(producto => producto === eliminarProducto);
        carrito.splice(productoElim, 1)
  
      })
      
       console.log(carrito);
    }
    
    const total = document.createElement('h2')
    total.className = 'total'
    const totalItems = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
    total.append(`Total Compra :  ${totalItems}`);
    cart.append(total)

    const close = document.createElement('span');
    close.className = 'close'
    close.append("X");
    cart.append(close)
    
    close.addEventListener('click', function(){
        modalBg.classList.remove('bg-active')

    })

  botonCarrito.onclick = mostrarCarrito;


