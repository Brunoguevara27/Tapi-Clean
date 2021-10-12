/* ********** Menu ********** */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click",(e)=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click",e=>{
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");        
    })
})(document);
 /* ********** Slider ********** */
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn--right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
 let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
 slider.style.marginLeft= "-200%";
 slider.style.transition = "all 0.5s";
 setTimeout(function (){
   slider.style.transition="none";
   slider.insertAdjacentElement('beforeend', sliderSectionFirst);
   slider.style.marginLeft = "-100%";
 }, 500);
}

function prev(){
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft= "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function (){
    slider.style.transition="none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
 }

btnRight.addEventListener('click',function(){
  next();
});

btnLeft.addEventListener('click',function(){
  prev();
});

setInterval(function(){
  next();
}, 4500);
/* ********** ContactForm ********** */
((d) => {
    const $form = d.querySelector(".contac-form"),
      $loader = d.querySelector(".contac-form-loader"),
      $response = d.querySelector(".contac-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/tapiclean.ok@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);
