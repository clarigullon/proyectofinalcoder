class Producto {
    constructor(nombre, precio, id, img) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
      this.img = img;
      this.stock = "En stock";
    }
  }
  const superdesayuno = new Producto(
    "Super Desayuno",
    1800,
    1,
    "imagenesventa/desayunog-min.jpg"
  );
  const desayuno = new Producto(
    "Desayuno",
    1500,
    2,
    "imagenesventa/desayunochic-min.jpg"
  );
  const bandejitagrande = new Producto(
    "Bandejita de tortitas x16",
    900,
    3,
    "imagenesventa/bandejitagrande-min.jpg"
  );
  const bandejitachica = new Producto(
    "Bandejita de mini tortitas x8",
    700,
    4,
    "imagenesventa/bandejitachica-min.jpg"
  );
  
  productos = [];
  
  productos.push(superdesayuno, desayuno, bandejitagrande, bandejitachica);
  
 
  for (const producto of productos) {
    let cardNueva = document.createElement("div");
    cardNueva.innerHTML = ` <img src= ${producto.img} />
      <p>  ${producto.nombre}</p>
      <b> $ ${producto.precio}</b> <br>
      <button id="${producto.id}" class="btn">AGREGAR</button> <br>
      `;
    document.getElementById("padreFlex").append(cardNueva);
    cardNueva.classList.add("productosCarrito");
  }
  
  let btn = document.getElementsByClassName("btn"); 
  for (let i = 0; btn.length > i; i++) {
    btn[i].addEventListener("click", agregarAlCarrito); 
  }
  
  function clickeado(e) {
    console.log(e.target); 
    e.target.style.opacity = "0.8";
    e.target.style.backgroundColor = "#ffd7ba"; 
    e.target.innerHTML = "Reservado"; 
  }
  
  function agregarAlCarrito(e) {
    clickeado(e); 
  }
  
