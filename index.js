import{S as f,i as a}from"./assets/vendor-CSsqW6bl.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d="53062520-ab6df8030023bb65348d73bcb",m="https://pixabay.com/api/";function p(r){const e=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${e.toString()}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function h(r){return r.map(e=>`
<li class="gallery-item">
  <a href="${e.largeImageURL}">
    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p><b>Likes:</b> ${e.likes}</p>
    <p><b>Views:</b> ${e.views}</p>
    <p><b>Comments:</b> ${e.comments}</p>
    <p><b>Downloads:</b> ${e.downloads}</p>
  </div>
</li>`).join("")}let l;function y(r){const e=document.querySelector("#gallery");e.innerHTML=r,l||(l=new f(".gallery a",{captionsData:"alt",captionDelay:250})),l.refresh()}function g(){const r=document.querySelector("#gallery");r.innerHTML=""}const u=document.querySelector("#search-form"),c=document.querySelector("#loader");document.querySelector("#gallery");u.addEventListener("submit",b);function b(r){r.preventDefault();const e=r.currentTarget.elements.query.value.trim();if(!e){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}g(),c.hidden=!1,p(e).then(n=>{c.hidden=!0;const i=n.hits||[];if(i.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const t=h(i);y(t)}).catch(n=>{c.hidden=!0,a.error({title:"Error",message:`Something went wrong (${n.message})`,position:"topRight"})}).finally(()=>{u.reset()})}
//# sourceMappingURL=index.js.map
