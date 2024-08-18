import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=r=>`  
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
  `,m="https://pixabay.com/api/",f=r=>{const s=new URLSearchParams({key:"45489972-425dbd0ae29bdd8e452daca41",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},a=document.querySelector(".search-form");console.log("searchForm:",a);const l=document.querySelector(".gallery");console.log("gallery:",l);let h=new u(".gallery a");const p=r=>{r.preventDefault();const s=a.elements.user_query.value.trim();f(s).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matchings your search query. Please try againe!",position:"topRight"}),l.innerHTML="",a.reset();return}const n=o.hits.map(e=>d(e)).join("");l.innerHTML=n,h.refresh()}).catch(o=>{console.log(o),c.error({message:"Щось пішло не так. Спробуйте ще раз пізніше!",position:"topRight"})})};a.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
