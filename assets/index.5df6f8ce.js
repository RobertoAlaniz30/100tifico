const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};p();const u=()=>`
      <div class="Header-main">
        <div class="Header-logo">
            <a class="link-logo" href="/">
              <img src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" />
            </a>
        </div>
        <div class="Header-nav">
          <a href="#/about/">
            About
          </a>
          <a href="#/">
            Home
          </a>
        </div>
      </div>
    `,i="https://rickandmortyapi.com/api/character/",l=async a=>{const e=a?`${i}${a}`:i;try{return await(await fetch(e)).json()}catch(r){console.log(`Fetch Error ${r}`)}},m=async()=>`
        <div class="Characters">
            ${(await l()).results.map(r=>`
                <article class="Character-item">
                    <a href="#/${r.id}/">
                        <img src="${r.image}" alt="${r.name}">
                        <h2>${r.name}</h2>
                    </a>
                </article>            
                 `).join("")}           
        <div>
    `,d=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",f=async()=>{const a=d(),e=await l(a);return`
    <div class="Characters-item">
        <article class="Characters-card">
            <img src="${e.image}" alt="${e.name}">
            <h2>${e.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: <span>${e.episode.length}</span></h3>
            <h3>Status: <span>${e.status}</span></h3>
            <h3>Species: <span>${e.species}</span></h3>
            <h3>Gender: <span>${e.gender}</span></h3>
            <h3>Origin: <span>${e.origin.name}</span></h3>
            <h3>Last location: <span>${e.location.name}</span></h3>
        </article>
    </div>
    `},g=()=>`
    <div class="Error404">
        <h2>Error 404</h2>
    </div>
    `,v=()=>`
    <p> </p>
      <div class="about">
        <p>Welcome to my rick and morty page, 
          a small project where you can obtain information of the characters of this animated series, 
          through a request to the rick and morty api, 
          enter the following url to see the complete repository.
        </p>
        <a href="https://github.com/RobertoAlaniz30/SPA-RickAndMorty.git">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        </a>
      </div>
      `,y=a=>a.length<=3?a==="/"?a:"/:id":`/${a}`,c={"/":m,"/:id":f,"/about":v},h=async()=>{const a=document.getElementById("header"),e=document.getElementById("content");a.innerHTML=u();let r=d(),n=await y(r),t=c[n]?c[n]:g;e.innerHTML=await t()};window.addEventListener("load",h);window.addEventListener("hashchange",h);
