# Google-Store-Proyect-frontend

Proyecto realizado como práctica de maquetación y desarrollo web utilizando **HTML5, CSS3 y JavaScript**, siguiendo un diseño proporcionado en formato JPG y un *sticker sheet* oficial.

---

## Objetivos del proyecto

El propósito principal del trabajo fue **integrar dos nuevos productos** dentro de la página existente de Google Store. Para ello, seguí un flujo completo de diseño y desarrollo:

- Crear **wireframes de baja fidelidad**.
- Diseñar **maquetas en Figma** en tres tamaños: *desktop, tablet y mobile*.
- Implementar la web utilizando **HTML5 y CSS3**, respetando el diseño original.
- Añadir interactividad con **JavaScript**, incluyendo selección de imágenes, colores y carrito persistente.

---

## Competencias técnicas desarrolladas

- Diseño de una aplicación web (nivel 1)  
- Maquetación de una aplicación desktop (nivel 1)  
- Creación de una página web estática (nivel 1)  
- Desarrollo de una página responsive (nivel 1)

---

## Tecnologías utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript**

---

## Diseño UI

El diseño proporcionado incluía múltiples detalles visuales, por lo que fue necesario realizar una arquitectura HTML semántica y estilos CSS coherentes.  
Las maquetas se realizaron en tres resoluciones:

- **Desktop**
- **Tablet**
- **Mobile**

Esto permitió construir una web completamente **responsive**, adaptada a diferentes dispositivos.

---

## Estructura del proyecto

```
/Google-Store-Proyect-frontend
│── index.html
│── style.css
│── script.js
│── /images
│── /page
```

---

## Funcionalidades implementadas con JavaScript

El proyecto incluye varias interacciones dinámicas. A continuación se muestran fragmentos reales del código implementado.

### Cambio de imagen principal dependiendo de las miniaturas seleccionadas

```javascript
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".product-thumbs img");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    mainImage.src = this.src;
  });
}
```

Esta funcionalidad permite que el usuario haga clic en una miniatura y la imagen principal cambie automáticamente.

---

### Selección del color

```javascript
const colorButtons = document.querySelectorAll(".color-dot, .color-dot-watch");

for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", function () {

    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      selectedColor = "";
      return;
    }

    for (let j = 0; j < colorButtons.length; j++) {
      colorButtons[j].classList.remove("selected");
    }

    this.classList.add("selected");
    selectedColor = this.dataset.color;
  });
}
```

---

### Añadir productos al carrito

```javascript
addCartBtn.addEventListener("click", function () {
  const quantity = quantitySelect.value;

  if (selectedColor === "") {
    alert("Debe de seleccionar un color para añadir al carrito.");
    return;
  }

  const itemText = `${quantity},${productName},${selectedColor}`;
  cart.push(itemText);
  localStorage.setItem("cart", cart.join("|"));
  alert(`Se añadió ${quantity} ${productName} de color ${selectedColor}.`);
});
```

---


## Ejemplo de estructura HTML

Aquí un fragmento del HTML principal del producto:

```html
<main class="product-container">
    <section class="product-gallery">
        <div class="product-thumbs">
            <img src="images/earbuds/earbuds_01.png" alt="Vista frontal">
            <img src="images/earbuds/earbuds_02.png" alt="Vista lateral">
        </div>

        <div class="product-main">
            <img id="mainImage" src="images/earbuds/earbuds_01.png" alt="Google Pixel Buds Pro">
        </div>
    </section>
</main>
```

---

## Conclusiones

Este proyecto me permitió trabajar todo el flujo completo de diseño y desarrollo web, de la parte Frontend:

- Interpretación de un diseño estático  
- Maquetación responsive con HTML5 y CSS3  
- Implementación de interactividad real con JavaScript  
- Gestión de estado mediante `localStorage` y `sessionStorage`  