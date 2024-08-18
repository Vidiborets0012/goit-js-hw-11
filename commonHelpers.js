(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=r=>`  
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
  `,u="https://pixabay.com/api/",d=r=>{const s=new URLSearchParams({key:"45489972-425dbd0ae29bdd8e452daca41",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},l=document.querySelector(".search-form");console.log("searchForm:",l);const a=document.querySelector(".gallery");console.log("gallery:",a);const f=r=>{r.preventDefault();const s=l.elements.user_query.value.trim();d(s).then(o=>{const n=o.hits.map(e=>i(e)).join("");a.innerHTML=n}).catch(o=>{console.log(o)})};l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
