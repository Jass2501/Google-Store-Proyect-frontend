// IMAGEN PRINCIPAL
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".product-thumbs img");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    mainImage.src = this.src;
  });
}

// SELECCIONAR COLOR

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

// CONTENIDO DEL CARRITO

let cartText = localStorage.getItem("cart");
let cart = cartText ? cartText.split("|") : [];
let selectedColor = "";
const productName = document.querySelector("h1").textContent;

// AÑADIR AL CARRITO

const addCartBtn = document.getElementById("addCartBtn");
const quantitySelect = document.getElementById("quantity");

addCartBtn.addEventListener("click", function () {
  const quantity = quantitySelect.value;

  if (selectedColor === "") {
    alert("Debe de seleccionar un color para añadir al carrito.");
    return;
  } else {
    const itemText = `${quantity},${productName},${selectedColor}`;
    cart.push(itemText);
    localStorage.setItem("cart", cart.join("|"));
    alert(`Se añadió ${quantity} ${productName} de color ${selectedColor}.`);
  }
});

// MOSTRAR CARRITO

const cartIcon = document.getElementById("cartIcon");

cartIcon.addEventListener("click", function () {

  if (cart.length === 0) {
    alert("No se ha añadido ningún producto");
    return;
  } else {

    let mensaje = "Los productos seleccionados:\n\n";

    for (let i = 0; i < cart.length; i++) {

      const partes = cart[i].split(",");
      const cantidad = partes[0];
      const nombre = partes[1];
      const color = partes[2];
      mensaje += `- ${cantidad} ${nombre} de color ${color}\n`;
    }
    alert(mensaje);
  }
});

// BORRAR DATOS DE PRODUCTOS SI SE REFRESCA LA WEB

if (!sessionStorage.getItem("paginaAbierta")) {
  sessionStorage.setItem("paginaAbierta", "si");
} else {
  localStorage.removeItem("cart");
}