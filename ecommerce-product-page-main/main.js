//Cambio de cantidad de productos ingresado por el usuario.
let minusBtn = document.querySelector(".input__minus")
let plusBtn = document.querySelector(".input__plus")
let userInput = document.querySelector(".input__number")


let userInputNumber = 0

plusBtn.addEventListener("click", () => {
    userInputNumber++
    userInput.value = userInputNumber
    console.log(userInputNumber);
})


minusBtn.addEventListener("click", () => {
    userInputNumber--
    if(userInputNumber <= 0) {
        userInputNumber = 0
    }
    userInput.value = userInputNumber
    console.log("userInputNumber")
})


//Agregando el total de productos al carrito cuadno se preciono el boton "Add to cart"
const addToCart = document.querySelector(".details__button")
let cartNotification = document.querySelector(".header__cart--notificacion")
let lastValue = parseInt(cartNotification.innerText)

addToCart.addEventListener("click", () => {
    lastValue = lastValue + userInputNumber
    cartNotification.innerText = lastValue
    cartNotification.style.display = "block"
    drawProductInModal()
})


//Mostrando el modal con el detalle del carrito
const cartIconBtn = document.querySelector(".header__cart")
const cartModal = document.querySelector(".cart-modal")
let priceModal = document.querySelector(".cart-modal__price")
const productContainer = document.querySelector(".cart-modal__checkout-container")

cartIconBtn.addEventListener("click", () => {
    cartModal.classList.toggle("show")

    if(lastValue == 0) {
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty </p>`
    }
})


//Borrando el contenido del carrito
function deleteProduct() {
    const deleteProductBtn = document.querySelector(".cart-modal__delete")
    
    deleteProductBtn.addEventListener("click", () => {
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty </p>`
        lastValue = 0
        cartNotification.innerHTML = lastValue
    })
}

//Modificando imagenes cuando se presione las flechas.
const imageContainer = document.querySelector(".gallery__image-container")
const previusBtn = document.querySelector(".gallery__previus")
const nextBtn = document.querySelector(".gallery__next")
let imgIndex = 1                                

nextBtn.addEventListener("click", () => {
    changeNextImage(imageContainer)
})
previusBtn.addEventListener("click", () => {
    changePreviusImage(imageContainer)
})


//MOSTRANDO EL MODAL DE IMAGENES, AL HACER CLICK EN LA IMAGEN PRINCIPAL
const modalGallery = document.querySelector(".modal-gallery__background")
const closeModalBtn = document.querySelector(".modal-gallery__close")

imageContainer.addEventListener("click", () => {
    modalGallery.style.display = "grid"
})

closeModalBtn.addEventListener("click", () => {
    modalGallery.style.display = "none"
})



//CAMBIANDO IMAGENES PRINCIPALES AL SER SELECCIONADAS
let thumnails = document.querySelectorAll(".gallery__thumnail")
thumnails = [...thumnails]

thumnails.forEach(thumnails => {
    thumnails.addEventListener("click", (e) => {
        imageContainer.style.backgroundImage = `url("./images/image-product-${e.target.id}.jpg")`
    })
})

//CAMBIANDO IMAGENES PRINCIPALES AL SER SELECCIONADAS DEL GALLERY MODAL
let modalThumnails = document.querySelectorAll(".modal-gallery__thumnail")
const modalImageContainer = document.querySelector(".modal-gallery__image-container")
modalThumnails = [...modalThumnails]


modalThumnails.forEach(modalThumnails => {
    modalThumnails.addEventListener("click", (e) => {
        // console.log(e.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url("./images/image-product-${e.target.id.slice(-1)}.jpg")`
    })
})

//CAMBIANDO IMAGENES EN EL MODAL CON FLECHAS
const nextModalBtn = document.querySelector(".modal-gallery__next")
const previusModalBtn = document.querySelector(".modal-gallery__prebius")

nextModalBtn.addEventListener("click", () => {
    changeNextImage(modalImageContainer)
})
previusModalBtn.addEventListener("click", () => {
    changePreviusImage(modalImageContainer)
})


//MOSTRANDO NAVBAR EN MOVIL
const hamburgerMenu = document.querySelector(".header__menu")
const modalNavbar = document. querySelector(".modal-navbar__background")
const closeModalNavbar = document.querySelector(".modal-navbar__close-icon")

modalNavbar.style.display = "none"

hamburgerMenu.addEventListener("click", () => {
    modalNavbar.style.display = "block"
})
closeModalNavbar.addEventListener("click", () => {
    modalNavbar.style.display = "none"
})



//FUNCIONES 
function drawProductInModal(){
    productContainer.innerHTML = `<div class="cart-modal__checkout-container">
        <div class="cart-modal__details-container">
          <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
          <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x 0 = <span>$0.00</span></p>
          </div>
          <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>
      </div>`
      deleteProduct()
    let priceModal = document.querySelector(".cart-modal__price")
    priceModal.innerHTML = `$125 x ${lastValue} = <span>$${lastValue*125}.00</span>`
}

function changeNextImage(imgContainer) {
    if(imgIndex === 4) {
        imgIndex = 1
    } else {
        imgIndex++
    }
    imgContainer.style.backgroundImage = `url("./images/image-product-${imgIndex}.jpg")`
}

function changePreviusImage(imgContainer) {
    if(imgIndex === 1) {
        imgIndex = 4
    } else {
        imgIndex--       
    }
    imgContainer.style.backgroundImage = `url("./images/image-product-${imgIndex}.jpg")`
}