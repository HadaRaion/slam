!function(e){function t(t){for(var r,l,c=t[0],s=t[1],u=t[2],d=0,m=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(i&&i(t);m.length;)m.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,c=1;c<o.length;c++){var s=o[c];0!==n[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},n={0:0},a=[];function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/wp-content/themes/studio-slam-theme/bundled-assets/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var i=s;a.push([7,1]),o()}([,,,,function(e,t,o){},function(e,t){window.addEventListener("load",(function(){let e=window.navigator.userAgent;e.indexOf("MSIE ")>0&&alert("Internet Explorer를 지원하지 않습니다. \n\n안전하고 쾌적한 인터넷 환경을 위해 크롬, 파이어폭스, 엣지 브라우저를 사용해주세요.");e.indexOf("Trident/")>0&&alert("Internet Explorer를 지원하지 않습니다. \n\n안전하고 쾌적한 인터넷 환경을 위해 크롬, 파이어폭스, 엣지 브라우저를 사용해주세요.")}))},function(e,t){document.addEventListener("scroll",e=>{document.body.scrollTop>30||document.documentElement.scrollTop>50?document.querySelector("header").classList.add("active"):document.querySelector("header").classList.remove("active")})},function(e,t,o){"use strict";o.r(t);o(4),o(5);var r=()=>{const e=document.querySelector(".home__video");let t=Math.floor(3*Math.random());window.matchMedia("(max-width: 700px)").matches?(e.src="https://studioslam.net/wp-content/themes/slam/slam_home_mobi.mp4",e.setAttribute("poster","https://studioslam.net/wp-content/uploads/2021/01/slam_main_img.jpg")):(e.src=`http://studioslam.net/wp-content/themes/slam/slam_home_video_${t}.mp4`,e.autoplay=!0,console.log("videoRandomNum :>> ",t))},n=o(1),a=o.n(n),l=o(0),c=o(2),s=o.n(c),u=o(3),i=o.n(u);var d=()=>{new i.a("#image-slider",{rewind:!0}).mount()};var m=e=>{const t=e.querySelector(".page-body"),o=e.querySelectorAll(".page-header > h2 > .letter"),r=l.a.timeline();return r.to(t,{autoAlpha:1,duration:2}),r.from(o,{yPercent:100,duration:.5,stagger:.1,clearProps:"all"},"-=1.5"),r};var p=e=>{const t=e.querySelector(".page-body"),o=e.querySelectorAll(".page-header > h2 > .letter");var r=l.a.timeline();return r.to(t,{autoAlpha:0},0),r.to(o,{autoAlpha:0},0),r};var y=()=>{const e=document.querySelector(".menu"),t=document.querySelector("main"),o=document.querySelector("header"),r=document.querySelector(".black-filter"),n=document.querySelector(".menu__overlay"),a=document.querySelectorAll(".menu__list li");e.classList.remove("active"),t.classList.remove("blur"),o.classList.remove("blur"),r.classList.remove("active"),n.classList.remove("active"),l.a.to(a,{autoAlpha:0,duration:.5,ease:"power3.out",clearProps:"all"})};function v(e){document.querySelector("main").classList.add("loading"),l.a.timeline().to(".loader__logo__bottom",{duration:1.5,opacity:1,ease:"power4.in"}).from(".loader__logo__top > img",{duration:.5,yPercent:100,stagger:.1,delay:.2}).to(".loader__logo",{duration:.3,delay:1.1,autoAlpha:0,ease:"power1.out",onComplete:()=>document.querySelector("main").classList.remove("loading")}).to(".loader",{duration:.4,width:0,ease:"power1.out",onStart:()=>m(e.container)},"-=0.2")}a.a.hooks.enter(()=>{window.scrollTo(0,0)}),a.a.hooks.after(()=>{ga("set","page",window.location.pathname),ga("send","pageview")}),a.a.init({sync:!0,views:[{namespace:"detail",beforeEnter(){d()},once(){v()},enter(){l.a.to(".page-body",{autoAlpha:1,duration:.5})}},{namespace:"home",beforeEnter(){r()},once({next:e}){v(e)},enter(){l.a.to(".page-body",{autoAlpha:1,duration:.5})}},{namespace:"about",beforeEnter(){s()()},once({next:e}){v(e)}}],transitions:[{name:"general-transition",async once({next:e}){v(e)},async leave({current:e}){const t=this.async();var o;p(e.container),await(o=1e3,o=o||2e3,new Promise(e=>{setTimeout(()=>{e()},o)})),t()},enter({next:e}){y(),m(e.container),document.querySelector(".menu-btn-container").classList.remove("open")}},{name:"from-news-to-news",from:{namespace:["news"]},to:{namespace:["news"]},leave:()=>{l.a.to(".page-body",{autoAlpha:0,duration:.5})},enter(){l.a.to(".page-body",{autoAlpha:1,duration:1})}},{name:"from-recruit-to-recruit",from:{namespace:["recruit"]},to:{namespace:["recruit"]},leave:()=>{l.a.to(".page-body",{autoAlpha:0,duration:.5})},enter(){l.a.to(".page-body",{autoAlpha:1,duration:1})}}]});o(6);const f=()=>{const e=document.querySelector(".menu"),t=document.querySelector("main"),o=document.querySelector("header"),r=document.querySelector(".black-filter"),n=document.querySelector(".menu__overlay");e.classList.remove("active"),t.classList.remove("blur"),o.classList.remove("blur"),r.classList.remove("active"),n.classList.remove("active")},h=document.querySelectorAll(".menu__list li"),b=l.a.timeline();b.set(h,{autoAlpha:0,y:0}),b.to(h,{autoAlpha:1,duration:1,y:10,stagger:.2,ease:"power3.out",delay:.3}),b.pause();const g=document.querySelector(".menu-btn"),w=document.querySelector(".menu-btn-container");g.addEventListener("click",e=>{w.classList.toggle("open"),e.preventDefault(),w.classList.contains("open")?((()=>{const e=document.querySelector(".menu"),t=document.querySelector("main"),o=document.querySelector("header"),r=document.querySelector(".black-filter"),n=document.querySelector(".menu__overlay");e.classList.add("active"),t.classList.add("blur"),o.classList.add("blur"),r.classList.add("active"),n.classList.add("active")})(),b.restart()):(b.timeScale(2.5).reverse(),setTimeout(f,700))})}]);