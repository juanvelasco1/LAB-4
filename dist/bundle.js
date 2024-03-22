(()=>{"use strict";var n;!function(n){n.name="name",n.img="img",n.status="status",n.Species="Species",n.Type="Type",n.Origin="Origin"}(n||(n={}));class t extends HTMLElement{static get observedAttributes(){return Object.keys({name:null,img:null,status:null,Species:null,Type:null,Origin:null})}attributeChangedCallback(n,t,e){this.render()}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>\n            .card-container {\n                display: grid;\n                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n                gap: 10px;\n            }\n\n            .card {\n                text-align: center;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                border: 1px solid #ccc;\n                padding: 10px;\n            }\n\n            .card img {\n                max-width: 100%;\n            }\n        </style>\n        <div class="card-container">\n            <div class="card">\n                <img src="${this.img}">\n                <p>${this.name}</p>\n                <p>${this.status}</p>\n                <p>${this.Species}</p>\n                <p>${this.Type}</p>\n                <p>${this.Origin}</p>\n            </div>\n        </div>\n            `)}}customElements.define("my-char",t);var e=function(n,t,e,i){return new(e||(e=Promise))((function(c,o){function r(n){try{s(i.next(n))}catch(n){o(n)}}function a(n){try{s(i.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?c(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,a)}s((i=i.apply(n,t||[])).next())}))};const i=n=>e(void 0,void 0,void 0,(function*(){try{return fetch(`${n}`).then((n=>n.json()))}catch(n){console.log(n)}}));var c=function(n,t,e,i){return new(e||(e=Promise))((function(c,o){function r(n){try{s(i.next(n))}catch(n){o(n)}}function a(n){try{s(i.throw(n))}catch(n){o(n)}}function s(n){var t;n.done?c(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,a)}s((i=i.apply(n,t||[])).next())}))};class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){return c(this,void 0,void 0,(function*(){const n=yield e(void 0,void 0,void 0,(function*(){try{return fetch("https://rickandmortyapi.com/api/character/2").then((n=>n.json()))}catch(n){console.log(n)}}));this.render(n.results)}))}render(t){this.shadowRoot&&(this.shadowRoot.innerHTML="\n\n        ",t.forEach((t=>{var e;const o=this.ownerDocument.createElement("div");t.characters.forEach((t=>c(this,void 0,void 0,(function*(){const e=yield i(t),c=this.ownerDocument.createElement("my-character");c.setAttribute(n.Origin,yield i(t)),console.log(e.url),o.appendChild(c)})))),null===(e=this.shadowRoot)||void 0===e||e.appendChild(o)})))}}customElements.define("app-container",o)})();