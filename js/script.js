let searchForm = document.querySelector('.search-form');
console.log(searchForm)
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
console.log(shoppingCart)

document.querySelector('#shopping-cart-btn').onclick = () =>{
   shoppingCart.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
   searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
console.log(loginForm)

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
console.log(loginForm)

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,

  breakpoints: {
   0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
