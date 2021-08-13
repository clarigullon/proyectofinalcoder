class Producto {
  constructor(nombre, seccion, id, precio, img) {
    this.nombre = nombre;
    this.seccion = seccion;
    this.precio = precio;
    this.id = id;
    this.img = img;
  }
}
const superdesayuno = new Producto(
  "Super Desayuno",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  1800,
  "imagenesventa/desayunog-min.jpg"
);
const desayuno = new Producto(
  "Desayuno",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  1500,
  "imagenesventa/desayunochic-min.jpg"
);
const bandejitagrande = new Producto(
  "Bandejita de tortitas x16",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/bandejitagrande-min.jpg"
);
const bandejitachica = new Producto(
  "Bandejita de mini tortitas x8",
  "regalos",
  Math.random().toString(36).substr(2, 9),
  700,
  "imagenesventa/bandejitachica-min.jpg"
);
const bomba = new Producto(
  "Torta Bomba",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenesventa/bomba-min.JPG"
);
const cabsha = new Producto(
  "Torta Cabsha",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1200,
  "imagenesventa/cabsha-min.jpeg"
);
const rogel = new Producto(
  "Rogel",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenesventa/rogel2.JPG"
);
const helada = new Producto(
  "Torta Helada",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1000,
  "imagenesventa/helad-min.JPG"
);
const brownie = new Producto(
  "Brownie",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenespilares/postreddl.jpg"
);
const conitos = new Producto(
  "Conitos de Dulce de Leche",
  "postres",
  Math.random().toString(36).substr(2, 9),
  800,
  "imagenesventa/conitos2-min.jpg"
);
const bombaf = new Producto(
  "Torta Rellena",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1300,
  "imagenesventa/bombafrut-min.jpg"
);
const frutilla = new Producto(
  "Tarta de Frutilla",
  "postres",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/tartafrut.jpg"
);
const lemonpie = new Producto(
  "Lemon Pie",
  "postres",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/lemonpie-min.jpg"
);
const manzana = new Producto(
  "Tarta de Manzana",
  "postres",
  Math.random().toString(36).substr(2, 9),
  900,
  "imagenesventa/tartamanz.jpeg"
);
const crumble = new Producto(
  "Crumble de Manzana",
  "postres",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/crumble-min.jpg"
);
const alfachoco = new Producto(
  "Alfajores de Chocolate",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/alfachocolate-min.JPG"
);
const maizena = new Producto(
  "Alfajorcitos de Maizena",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/maizenavert.jpg"
);
const nuez = new Producto(
  "Alfajorcitos de Nuez",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/alfanuez-min.jpg"
);
const alfajocookies = new Producto(
  "Alfacookies",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/paraelte.jpg"
);
const delicious = new Producto(
  "Delicious",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/delicious-min.jpg"
);
const mani = new Producto(
  "Cookies de Maní",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/cookiesmani-min.jpg"
);
const chips = new Producto(
  "Cookies con Chips",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/cookieschoco-min.jpg"
);
const rellenas = new Producto(
  "Cookies rellenas de limón",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/havanna-min.jpg"
);
 
const limon = new Producto(
  "Cookies de limón",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/limon-min.jpg"
);
const anillos = new Producto(
  "Anillos bañados en chocolate",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/anillos-min.JPG"
);
const anillosblanco = new Producto(
  "Anillos bañados en chocolate blanco",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/anilloblanco-min.jpg"
);
const aniz = new Producto(
  "Cookies de Aniz",
  "paraelte",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/aniz.jpg"
);
const pandecampo = new Producto(
  "Pan de Campo",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pancampo.jpg"
);
const pandemolde = new Producto(
  "Pan de Molde",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pandemolde.jpg"
);
const pandetrigo = new Producto(
  "Pan de Trigo Sarraceno",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pantrigosarra.jpg"
);
const pandequeso = new Producto(
  "Pancitos de Queso",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/panqueso.jpg"
);
const pandecebolla = new Producto(
  "Pancitos Saborizados de Cebolla",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pancebolla.jpg"
);
const pancitotrigo = new Producto(
  "Pancitos de Trigo Sarraceno",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pancitostrigo.jpg"
);
const panchips = new Producto(
  "Pancitos de Chips",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/chips-min.jpg"
);
const pizza = new Producto(
  "Prepizza",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/pizza.jpg"
);
const bizcochitosgrasa = new Producto(
  "Bizcochitos de grasa",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/bizcochitosgrasa-min.JPG"
);
const bizcochitoslibritos = new Producto(
  "Bizcochitos de grasa",
  "salados",
  Math.random().toString(36).substr(2, 9),
  1100,
  "imagenesventa/bizcochitoslibritos-min.JPG"
);
productos = [];
productos.push(
  superdesayuno,
  desayuno,
  bandejitagrande,
  bandejitachica,
  bomba,
  cabsha,
  rogel,
  helada,
  brownie,
  conitos,
  bombaf,
  frutilla,
  lemonpie,
  manzana,
  crumble,
  alfachoco,
  maizena,
  nuez,
  alfajocookies,
  delicious,
  mani,
  chips,
  rellenas,
  limon,
  anillos,
  anillosblanco,
  aniz,
  pandecampo,
  pandemolde,
  pandetrigo,
  pandequeso,
  pandecebolla,
  pancitotrigo,
  panchips,
  pizza,
  bizcochitosgrasa,
  bizcochitoslibritos
);
let paginaActual = window.location.pathname;

if (paginaActual.includes("desayunos")) {
  for (const producto of productos) {
    if (producto.seccion === "regalos") {
      $("#padreFlex")
        .append(`<div class="productosCarrito"> <img src= ${producto.img} />
      <p>  ${producto.nombre}</p>
      <b> $ ${producto.precio}</b> <br>
      <button id="${producto.id}" class="btn">AGREGAR</button> <br></div>
      `);
    }
  }
} else if ((paginaActual.includes("postres"))){
  for (const producto of productos) {
    if (producto.seccion === "postres") {
      $("#postresCards")
        .append(`<div class="productosCarrito"> <img src= ${producto.img} />
      <p>  ${producto.nombre}</p>
      <b> $ ${producto.precio}</b> <br>
      <button id="${producto.id}" class="btn">AGREGAR</button> <br>
      </div> `);
    }
  }
}else if ((paginaActual.includes("paraelte")));{
  for (const producto of productos) {
    if (producto.seccion === "paraelte") {
      $("#paraelteCards")
        .append(`<div class="productosCarrito"> <img src= ${producto.img} />
      <p>  ${producto.nombre}</p>
      <b> $ ${producto.precio}</b> <br>
      <button id="${producto.id}" class="btn">AGREGAR</button> <br>
      </div> `);
    }
}
} if ((paginaActual.includes("salados")));{
  for (const producto of productos) {
    if (producto.seccion === "salados") {
      $("#saladosCards")
        .append(`<div class="productosCarrito"> <img src= ${producto.img} />
      <p>  ${producto.nombre}</p>
      <b> $ ${producto.precio}</b> <br>
      <button id="${producto.id}" class="btn">AGREGAR</button> <br>
	  </div>`);
    }
}
}
$(".btn").click((e)=>agregarProducto(e))
function agregarClick(e) {
  e.target.style.opacity = "0.8";
  e.target.style.backgroundColor = "#ffd7ba"; 
  e.target.innerHTML = "Agregado!"; 
}
let carrito = []; 
function agregarProducto(e) {
  agregarClick(e);
  let productoClickeado = productos.find((item) => item.id == e.target.id);
  if (localStorage.getItem("MiCarrito") != null) {
    carrito = JSON.parse(localStorage.getItem("MiCarrito"))
  } 
  carrito.push(productoClickeado);
  agregarItem(productoClickeado);
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
}
function agregarItem(producto) {
  $("#mySidenav").append(` <div class="itemCarrito"><h3>  Producto: ${producto.nombre}</h3>
  <img src= ${producto.img} />
  <b> $ ${producto.precio}</b> 
  <button id="${producto.id}" class="btn-remover" > Remover</button></div>`);
  $(".btn-remover").click((e)=>removerItem(e))
}
function mostrarItems(array) {
  for (const producto of array) {
    $("#mySidenav").append(` <div class="itemCarrito"><p>  Producto: ${producto.nombre}</p>
                                 <img src= ${producto.img} />
                               <b> $ ${producto.precio}</b> 
                               <button id="${producto.id}" class="btn-remover" > Remover</button></div>`);
    $(".btn-remover").click((e)=>removerItem(e))
  }
}
function removerItem(e) {
  let indexDelProducto = carrito.findIndex((item) => item.id == e.target.id);
  carrito.splice(indexDelProducto, 1);
}
$("#carrito").click(() => openNav())
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  if (localStorage.getItem("MiCarrito") != null) {
    let carritoLocalStorage = []
    let carritoTemporal = []
    carritoLocalStorage = JSON.parse(localStorage.getItem("MiCarrito"))
    carritoLocalStorage.forEach(item => {
      if (!carrito.includes(item)) {
        carritoTemporal.push(item)
      }   
    })
    mostrarItems(carrito)
  }
} 
$("#sideNavClose").click(() => closeNav())
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function eliminarProductoLocalStorage(carrito){
  let productosLS;
  productosLS = this.producto();
  productosLS.forEach(function(productoLS, index){
      if(productoLS.id === carrito){
          productosLS.splice(index, 1);
      }
  });

  localStorage.setItem('MiCarrito', JSON.stringify(carrito));
}
function vaciarLocalStorage(){
  localStorage.clear();
}
