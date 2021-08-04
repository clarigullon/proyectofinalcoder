function openNav () {
  $("#sidenav")[0].style.width = "250px";
} 
function closeNav() {
  $("#sidenav")[0].style.width = "0px";
}

class Producto {
  constructor(nombre, seccion, precio, id, img) {
    this.nombre = nombre;
    this.seccion = seccion;
    this.precio = precio;
    this.id = id;
    this.img = img;
    this.stock = "En stock";
  }
}
const superdesayuno = new Producto(
  "Super Desayuno",
  "regalos",
  1800,
  1,
  "imagenesventa/desayunog-min.jpg"
);
const desayuno = new Producto(
  "Desayuno",
  "regalos",
  1500,
  2,
  "imagenesventa/desayunochic-min.jpg"
);
const bandejitagrande = new Producto(
  "Bandejita de tortitas x16",
  "regalos",
  900,
  3,
  "imagenesventa/bandejitagrande-min.jpg"
);
const bandejitachica = new Producto(
  "Bandejita de mini tortitas x8",
  "regalos",
  700,
  4,
  "imagenesventa/bandejitachica-min.jpg"
);
const bomba = new Producto(
  "Torta Bomba",
  "postres",
  1300,
  5,
  "imagenesventa/bomba-min.JPG"
);
const cabsha = new Producto(
  "Torta Cabsha",
  "postres",
  1200,
  6,
  "imagenesventa/cabsha-min.jpeg"
);
const rogel = new Producto(
  "Rogel",
  "postres",
  1300,
  7,
  "imagenesventa/rogel2.JPG"
);
const helada = new Producto(
  "Torta Helada",
  "postres",
  1000,
  8,
  "imagenesventa/helad-min.JPG"
);
const brownie = new Producto(
  "Brownie",
  "postres",
  1300,
  9,
  "imagenespilares/postreddl.jpg"
);
const conitos = new Producto(
  "Conitos de Dulce de Leche",
  "postres",
  800,
  10,
  "imagenesventa/conitos2-min.jpg"
);
const bombaf = new Producto(
  "Torta Rellena",
  "postres",
  1300,
  11,
  "imagenesventa/bombafrut-min.jpg"
);
const frutilla = new Producto(
  "Tarta de Frutilla",
  "postres",
  900,
  12,
  "imagenesventa/tartafrut.jpg"
);
const lemonpie = new Producto(
  "Lemon Pie",
  "postres",
  900,
  13,
  "imagenesventa/lemonpie-min.jpg"
);
const manzana = new Producto(
  "Tarta de Manzana",
  "postres",
  900,
  14,
  "imagenesventa/tartamanz.jpeg"
);
const crumble = new Producto(
  "Crumble de Manzana",
  "postres",
  1100,
  15,
  "imagenesventa/crumble-min.jpg"
);
const alfachoco = new Producto(
  "Alfajores de Chocolate",
  "paraelte",
  1100,
  16,
  "imagenesventa/alfachocolate-min.JPG"
);
const maizena = new Producto(
  "Alfajorcitos de Maizena",
  "paraelte",
  1100,
  17,
  "imagenesventa/maizenavert.jpg"
);
const nuez = new Producto(
  "Alfajorcitos de Nuez",
  "paraelte",
  1100,
  18,
  "imagenesventa/alfanuez-min.jpg"
);
const alfajocookies = new Producto(
  "Alfacookies",
  "paraelte",
  1100,
  19,
  "imagenesventa/paraelte.jpg"
);
const delicious = new Producto(
  "Delicious",
  "paraelte",
  1100,
  20,
  "imagenesventa/delicious-min.jpg"
);
const mani = new Producto(
  "Cookies de Maní",
  "paraelte",
  1100,
  21,
  "imagenesventa/cookiesmani-min.jpg"
);
const chips = new Producto(
  "Cookies con Chips",
  "paraelte",
  1100,
  22,
  "imagenesventa/cookieschoco-min.jpg"
);
const rellenas = new Producto(
  "Cookies rellenas de limón",
  "paraelte",
  1100,
  23,
  "imagenesventa/havanna-min.jpg"
);
 
const limon = new Producto(
  "Cookies de limón",
  "paraelte",
  1100,
  24,
  "imagenesventa/limon-min.jpg"
);
const anillos = new Producto(
  "Anillos bañados en chocolate",
  "paraelte",
  1100,
  25,
  "imagenesventa/anillos-min.JPG"
);
const anillosblanco = new Producto(
  "Anillos bañados en chocolate blanco",
  "paraelte",
  1100,
  26,
  "imagenesventa/anilloblanco-min.jpg"
);
const aniz = new Producto(
  "Cookies de Aniz",
  "paraelte",
  1100,
  27,
  "imagenesventa/aniz.jpg"
);
const pandecampo = new Producto(
  "Pan de Campo",
  "salados",
  1100,
  28,
  "imagenesventa/pancampo.jpg"
);
const pandemolde = new Producto(
  "Pan de Molde",
  "salados",
  1100,
  29,
  "imagenesventa/pandemolde.jpg"
);
const pandetrigo = new Producto(
  "Pan de Trigo Sarraceno",
  "salados",
  1100,
  30,
  "imagenesventa/pantrigosarra.jpg"
);
const pandequeso = new Producto(
  "Pancitos de Queso",
  "salados",
  1100,
  31,
  "imagenesventa/panqueso.jpg"
);
const pandecebolla = new Producto(
  "Pancitos Saborizados de Cebolla",
  "salados",
  1100,
  32,
  "imagenesventa/pancebolla.jpg"
);
const pancitotrigo = new Producto(
  "Pancitos de Trigo Sarraceno",
  "salados",
  1100,
  33,
  "imagenesventa/pancitostrigo.jpg"
);
const panchips = new Producto(
  "Pancitos de Chips",
  "salados",
  1100,
  34,
  "imagenesventa/chips-min.jpg"
);
const pizza = new Producto(
  "Prepizza",
  "salados",
  1100,
  35,
  "imagenesventa/pizza.jpg"
);
const bizcochitosgrasa = new Producto(
  "Bizcochitos de grasa",
  "salados",
  1100,
  36,
  "imagenesventa/bizcochitosgrasa-min.JPG"
);
const bizcochitoslibritos = new Producto(
  "Bizcochitos de grasa",
  "salados",
  1100,
  37,
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
let btn = document.getElementsByClassName("btn");
for (let i = 0; btn.length > i; i++) {
  $("#" + btn [i].id).on("click", agregarAlCarrito)
}
function clickeado(e) {
  e.target.style.opacity = "0.8";
  e.target.style.backgroundColor = "#ffd7ba"; 
  e.target.innerHTML = "Agregado!"; 
}
let carrito = []; 
function agregarAlCarrito(e) {
  clickeado(e);
  let productoClickeado = productos.find((item) => item.id == e.target.id);
  carrito.push(productoClickeado);
  mostrarItemsEnCarrito(carrito);
  localStorage.setItem("MiCarrito", JSON.stringify(carrito));
}
function mostrarItemsEnCarrito(array) {
  $("#carrito").empty();
  for (const producto of array) {
    $("#carrito").append(` <div class="carrito"><h3> ID: ${producto.id}</h3>
                                 <img src= ${producto.img} />
                                <p>  Producto: ${producto.nombre}</p>
                               <b> $ ${producto.precio}</b> `);
  }
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







