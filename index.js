import{a as f,i}from"./assets/vendor-BRIpQuIT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="49643756-826760c59f13ca953f19ee970",m="https://pixabay.com/api/";function g(o){return f.get(m,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.log(t),[]))}const d=document.querySelector(".loader");function y(o){const t=document.querySelector(".gallery");t.innerHTML="";const n=o.map(({webformatURL:a,largeImageURL:e,tags:r,likes:s,views:c,comments:l,downloads:u})=>`
<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${r}"
          />
        </a>
        <div class="image-info">
          <p class="image-info-text">
            <span class="image-info-tag">Likes</span> ${s}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Views</span> ${c}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Comments</span> ${l}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Downloads</span> ${u}
          </p>
      </div>
</li>
  `).join("");t.insertAdjacentHTML("beforeend",n)}function h(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){d.classList.remove("hidden")}const q=document.querySelector(".search-form"),v=document.querySelector(".search-input");q.addEventListener("submit",function(o){o.preventDefault();const t=v.value.trim();if(t===""){i.warning({message:"Enter your search word!",position:"topRight"});return}h(),L(),g(t).then(n=>{if(n.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n)})});
//# sourceMappingURL=index.js.map
