(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const o=s=>{const e=document.querySelector(s);if(e)return e;throw new Error("Element not found")},u=o("#characters"),v=o("#inputCharacter"),l=o("#cardCharacter"),c={name:""},h=s=>{s.forEach(e=>{const{name:r}=e,a=document.createElement("option");a.value=r,u.appendChild(a)})},p=s=>{const e=s;if(c.name=e.target.value,!Object.values(c).every(r=>r!=="")){console.log("esta vacio");return}y()},y=async()=>{g();const s=await b(c.name),{name:e,imageUrl:r,originplanet:a,role:t,specie:i,status:n,transform:f,universe:x}=s,d=document.createElement("div");d.innerHTML=`
  <div
  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a class="grid justify-center" href="#">
      <img
        loading="lazy"
        class="rounded-t-lg h-56 py-2"
        src="${r}"
        alt=""
      />
    </a>
    <div class="p-5">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ${e}
        </h5>

        <div class="flex justify-between items-center mb-4">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Especio: ${i}
          </h5>

        </div>

        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
            
            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Planeta de origen:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${a}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Estatus:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${n}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Transformaci\xF3n::
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${f}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Role:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${t}
                </div>
              </div>
            </li>

            <li class="py-2 sm:py-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white mx-2">
                    Universo:
                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mx-2">
                  ${x}
                </div>
              </div>
            </li>

          </ul>
        </div>

    </div>
  </div>
  `,l.appendChild(d)};function g(){for(;l.firstChild;)l.removeChild(l.firstChild)}const m="https://dragon-ball-super-api.herokuapp.com/api/characters",w=async()=>{try{const e=await(await fetch(m)).json();return h(e)}catch(s){console.error(s)}},b=async s=>{try{return await(await fetch(`${m}/${s}`)).json()}catch(e){console.error(e)}};document.addEventListener("DOMContentLoaded",()=>{w(),v.addEventListener("change",p)});
