(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),s=()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};e.addEventListener("click",s),o.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();({el:document.querySelector(".bottom-top"),scrolling:!1,show(){this.el.classList.contains("bottom-top_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("bottom-top_hide"),this.el.classList.add("bottom-top_hiding"),window.setTimeout((()=>{this.el.classList.remove("bottom-top_hiding")}),300))},hide(){this.el.classList.contains("bottom-top_hide")||this.el.classList.contains("btn-up_hiding")||(this.el.classList.add("bottom-top_hiding"),window.setTimeout((()=>{this.el.classList.add("bottom-top_hide"),this.el.classList.remove("bottom-top_hiding")}),300))},addEventListener(){window.addEventListener("scroll",(()=>{const t=window.scrollY||document.documentElement.scrollTop;this.scrolling&&t>0||(this.scrolling=!1,t>400?this.show():this.hide())})),document.querySelector(".bottom-top").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();
//# sourceMappingURL=index.0c799071.js.map
