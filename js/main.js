!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t(1),t(2),t(3),t(4)},function(e,n){var t=document.querySelector("header"),i=document.querySelector(".hero");new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting?t.classList.remove("scrolled"):t.classList.add("scrolled")}))}),{rootMargin:"-200px 0px 0px 0px"}).observe(i)},function(e,n){var t=document.querySelector(".menu-btn"),i=document.querySelector(".nav"),o=document.querySelectorAll(".nav__item"),r=document.querySelectorAll(".nav__link");function a(){t.classList.toggle("open"),i.classList.toggle("open")}r.forEach((function(e){e.addEventListener("click",(function(){r.forEach((function(e){return e.classList.remove("active")})),this.classList.add("active")}))})),t.addEventListener("click",(function(){a()})),o.forEach((function(e){e.addEventListener("click",(function(){t.classList.contains("open")&&a()}))}))},function(e,n){var t,i=document.querySelector(".swiper-container");function o(){window.innerWidth>=1025&&"false"==i.dataset.mobile&&(t=new Swiper(i,{direction:"horizontal",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),i.dataset.mobile="true"),window.innerWidth<1025&&(i.dataset.mobile,i.classList.contains("swiper-container-initialized")&&t.destroy())}o(),window.addEventListener("resize",(function(){o()}))},function(e,n){var t,i=document.querySelector(".reviews__swiper-container");function o(){window.innerWidth>=1025&&"false"==i.dataset.mobile&&(t=new Swiper(i,{direction:"horizontal",loop:!0,slidesPerView:3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".reviews-pagination",clickable:!0}}),i.dataset.mobile="true"),window.innerWidth<1025&&(i.dataset.mobile,i.classList.contains("swiper-container-initialized")&&t.destroy())}o(),window.addEventListener("resize",(function(){o()}))}]);