$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3500
  });
  $('.menu__btn').on('click', function () {
    $('.hidemenu').addClass('active'),
    $('.left-menu').addClass('active'),
      // $('.menu__list-item+.menu__list-item').css("color", "#362C28");
      $('.menu__list-item').addClass('change_color');
  });
  $('.close-btn').on('click', function () {
    $('.hidemenu').removeClass('active');
    $('.left-menu').removeClass('active');
    $('.menu__list-item').removeClass('change_color');
  });
  $('.left-menu').on('click', function () {
    $('.left-menu').removeClass('active');
    $('.hidemenu').removeClass('active');
  });
  var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});
  $('.phone__img').on('click', function () {
    $('.phone__number').addClass('hideoff');
  });
  $('.phone__number').on('click', function () {
    $('.phone__number').removeClass('hideoff');
  });
  let btn = $('.movetopbtn');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
});


//Modal


  const modalBtn = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';  
  }

  modalBtn.forEach(btn =>{
    btn.addEventListener('click',openModal)
  })


  modalCloseBtn.addEventListener('click', closeModal);


  modal.addEventListener('click',(event) => {
    if(event.target === modal){
        closeModal()
    }
  })


  document.addEventListener('keydown',(event) => {
    if(event.code === 'Escape' && modal.classList.contains('show')){
        closeModal();
    }
  })









//cards

let cardCounter = document.querySelector(".counter-item__inner"),
  card = document.querySelector('.card'),
  counterMinus = document.querySelectorAll(".counter-item__minus"),
  counterPlus = document.querySelectorAll(".counter-item__plus"),
  counerAmount = document.querySelector(".counter-item__amount"),
  cardPriceTotal = document.querySelector(".card__price-total");




  counterPlus.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (counerAmount.value >= 1) {
      counerAmount.value++;
      countBasketPrice(cardPriceTotal.dataset.price, cardPriceTotal);
      }
    });
  });



  counterMinus.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (counerAmount.value > 1) {
        counerAmount.value--;
        minusBasketPrice(cardPriceTotal.dataset.price, cardPriceTotal);
      }
    });
  });


  
  // card.addEventListener('click', (e) => {
  //   if (e.target) {
  //     return e.target.value
  //   }
  // })



// counterPlus.addEventListene("click", (e) => {
//     if (counerAmount.value >= 1) {
//       counerAmount.value++;
//       countBasketPrice(cardPriceTotal.dataset.price, cardPriceTotal);

//     }
// });
 
// counterMinus.addEventListener("click", (e) => {
//   if (counerAmount.value > 1) {
//     counerAmount.value--;
//     minusBasketPrice(cardPriceTotal.dataset.price, cardPriceTotal);
//   }
// });

var Database = [
  // {name:'Бонито', price: 12.60},
  {
    name: 'Эбби Маки',
    price: 10.50
  },
  // {name:'Блэк Унаги', price: 17.50},
  // {name:'Филадельфия', price: 19.90},
  // {name:'Шанхай', price: 7.00}
]

var basket_price = Database[0].price;



function countBasketPrice(a, b) {
  let num = Number(a);
  for (i = 0; i < Database.length; i++) {
    basket_price = basket_price + num;
    b.innerHTML = basket_price;
  }
  return basket_price,
    console.log(basket_price);
}

function minusBasketPrice(a, b) {
  let num = Number(a);
  for (i = 0; i < Database.length; i++) {
    basket_price = basket_price - num;
    b.innerHTML = basket_price;
  }
  return basket_price,
    console.log(basket_price);
}












let basket = document.querySelector(".card__addbasket");



basket.addEventListener("click", (e) => {
  console.log("Товар добаввлен в корзину")
});






































// for (let i = 0; i <= 10; i++) {
//   function countSum(a, b) {
//     let num = Number(a);
//     let sum = 0;
//     sum = i + num;
//     b.innerHTML = sum;
//     return sum,
//      console.log(sum);
//   }
// }






// let sum = 0;
// Basket = [{name:'Тыква', price:60},
//          {name:'Капуста', price:35}];
// Basket.push({name:'Яблоко', price:50});
// function countBasketPrice(x) {
//   for (i=0; i<Basket.length; i++) { 
//       sum = sum + Basket[i].price;
//   }
//   return sum;
// }