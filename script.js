// IMAGEN PRINCIPAL
function images() {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".product-thumbs img");

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
      mainImage.src = this.src;
    });
  }
};
images();

// SELECCIONAR COLOR
function selectColor() {
  const colorButtons = document.querySelectorAll(".color-dot, .color-dot-watch");

  for (let i = 0; i < colorButtons.length; i++) {

    colorButtons[i].addEventListener("click", function () {

      if (this.classList.contains("selected")) {
        this.classList.remove("selected");
        selectedColor = "";
        return;
      } else {
        for (let j = 0; j < colorButtons.length; j++) {
          colorButtons[j].classList.remove("selected");
        }

        this.classList.add("selected");
        selectedColor = this.dataset.color;
      }
    });
  }
};
selectColor();
// CONTENIDO DEL CARRITO

let cartText = localStorage.getItem("cart");
let cart = cartText ? cartText.split("|") : [];
let selectedColor = "";
const productName = document.querySelector("h1").textContent;

// AÑADIR AL CARRITO
function addCart() {
  const addCartBtn = document.getElementById("addCartBtn");
  const quantitySelect = document.getElementById("quantity");

  addCartBtn.addEventListener("click", function () {
    const quantity = quantitySelect.value;
    const precio = document.querySelector(".price-ear, .price-watch").textContent;

    if (selectedColor === "") {
      alert("Debe de seleccionar un color para añadir al carrito.");
      return;
    } else {
      const itemText = `${quantity},${productName},${selectedColor},${precio}`;
      cart.push(itemText);
      localStorage.setItem("cart", cart.join("|"));
      document.getElementById("cartCount").textContent = cart.length;
      alert(`Se añadió ${quantity} ${productName} de color ${selectedColor}.`);
    }
  });
};

addCart();

// MOSTRAR CARRITO
function showCart() {
  const cartIcon = document.getElementById("cartIcon");

  cartIcon.addEventListener("click", function () {

    if (cart.length === 0) {
      alert("No se ha añadido ningún producto");
      return;
    } else {

      mensaje = "Los productos seleccionados:\n\n";
      let mensajetotal = "";
      let sumatotal = 0;

      for (let i = 0; i < cart.length; i++) {

        const partes = cart[i].split(",");
        const cantidad = partes[0];
        const nombre = partes[1];
        const color = partes[2];
        const precio = partes[3];
        const convCant = parseInt(cantidad);
        const convprecio = parseFloat(precio);
        const segunCantidad = convCant * convprecio;
        sumatotal += segunCantidad;
        mensaje += `- ${cantidad} ${nombre} de color ${color}: ${precio}/unidad: \n Precio según unidad:${segunCantidad}€ \n\n`;
        mensajetotal = `\n Total ${sumatotal}€`;
      }
      alert(mensaje + mensajetotal);
    }
  });
};

showCart();

//CONTADOR CARRITO
const cartCount = document.getElementById("cartCount");
cartCount.textContent = cart.length;

// BORRAR DATOS DE PRODUCTOS SI SE REFRESCA LA WEB

if (!sessionStorage.getItem("paginaAbierta")) {
  sessionStorage.setItem("paginaAbierta", "si");
} else {
  localStorage.removeItem("cart");
}

//BUSQUEDA
function searchIcon() {
  const searchIcon = document.getElementById("search");

  searchIcon.addEventListener("click", function () {
    let search = prompt("Introduzca el producto a buscar");

    if (!search || search.trim() === "") {
      alert("La busqueda se finalizado");
      return;
    } else {
      search = search.toLocaleLowerCase().trim();

      const product = {
        "google pixel": "/Google-Store-Proyect-frontend/index.html",
        "pixel": "/Google-Store-Proyect-frontend/index.html",
        "google pixel buds pro": "/Google-Store-Proyect-frontend/index.html",
        "fitbit": "/Google-Store-Proyect-frontend/page/smartwatch.html",
        "fitbit Inspire": "/Google-Store-Proyect-frontend/page/smartwatch.html"
      };

      if (product[search]) {
        window.location.href = product[search];
      } else {
        alert("No existe producto")
      };
    }
  });
}
window.onload = function () {
  searchIcon();
};
