import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=r=>`  
      <li class="gallery-card">
      <a href="${r.largeImageURL}">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="gallery-info">
        <p><b>Likes</b> ${r.likes}</p>
        <p><b>Views</b> ${r.views}</p>
        <p><b>Comments</b> ${r.comments}</p>
        <p><b>Downloads</b> ${r.downloads}</p>
      </div>
    </li>
  `,h="https://pixabay.com/api/",f=r=>{const s=new URLSearchParams({key:"45489972-425dbd0ae29bdd8e452daca41",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},l=document.querySelector(".search-form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader");let p=new u(".gallery a");const y=r=>{r.preventDefault();const s=l.elements.user_query.value.trim();a.classList.remove("is-hidden"),f(s).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matchings your search query. Please try againe!",position:"topRight",maxWidth:"500px"}),d.innerHTML="",l.reset();return}a.classList.add("is-hidden");const i=o.hits.map(e=>m(e)).join("");d.innerHTML=i,p.refresh()}).catch(o=>{console.log(o),c.error({message:"Щось пішло не так. Спробуйте ще раз пізніше!",position:"topRight"}),a.classList.add("is-hidden")})};l.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
