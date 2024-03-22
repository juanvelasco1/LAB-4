(() => {
	'use strict';
	var t, e;
	!(function (t) {
		(t.name = 'name'),
			(t.ep = 'ep'),
			(t.status = 'status'),
			(t.Species = 'Species'),
			(t.Type = 'Type'),
			(t.Origin = 'Origin');
	})(t || (t = {}));
	class n extends HTMLElement {
		static get observedAttributes() {
			return Object.keys({ name: null, ep: null, status: null, Species: null, Type: null, Origin: null });
		}
		attributeChangedCallback(t, e, n) {
			(this[t] = n), this.render();
		}
		constructor() {
			super(), this.attachShadow({ mode: 'open' }), this.render();
		}
		connectedCallback() {
			this.render();
		}
		render() {
			this.shadowRoot &&
				(this.shadowRoot.innerHTML = `\n\n\n            <style>\n            .card {\n                background-color: dark-gray;\n                padding: 10px;\n            }\n            p {\n                margin: 0;\n                padding: 5px;\n            }\n        </style>\n            <div class="card">\n            <h1>${this.name}</h1>\n            <h2>${this.ep}</h2>\n\t\t\t\t\t\t<h2>${this.status}<h2>\n\t\t\t\t\t\t<h2>${this.Species}<h2>\n            <h2>${this.Type}<h2>\n            <h2>${this.Origin}<h2>\n            </div>\n            `);
		}
	}
	customElements.define('my-card', n),
		(function (t) {
			(t.name = 'name'),
				(t.img = 'img'),
				(t.status = 'status'),
				(t.Species = 'Species'),
				(t.Type = 'Type'),
				(t.Origin = 'Origin');
		})(e || (e = {}));
	class i extends HTMLElement {
		static get observedAttributes() {
			return Object.keys({ name: null, img: null, status: null, Species: null, Type: null, Origin: null });
		}
		attributeChangedCallback(t, e, n) {
			this.render();
		}
		constructor() {
			super(), this.attachShadow({ mode: 'open' }), this.render();
		}
		connectedCallback() {
			this.render();
		}
		render() {
			this.shadowRoot &&
				(this.shadowRoot.innerHTML = `\n            <style>\n            .card-container {\n                display: grid;\n                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n                gap: 10px;\n            }\n\n            .card {\n                text-align: center;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                border: 1px solid #ccc;\n                padding: 10px;\n            }\n\n            .card img {\n                max-width: 100%;\n            }\n        </style>\n        <div class="card-container">\n            <div class="card">\n                <img src="${this.img}">\n                <p>${this.name}</p>\n                <p>${this.status}</p>\n                <p>${this.Species}</p>\n                <p>${this.Type}</p>\n                <p>${this.Origin}</p>\n            </div>\n        </div>\n            `);
		}
	}
	customElements.define('my-char', i);
	var s = function (t, e, n, i) {
			return new (n || (n = Promise))(function (s, r) {
				function a(t) {
					try {
						o(i.next(t));
					} catch (t) {
						r(t);
					}
				}
				function c(t) {
					try {
						o(i.throw(t));
					} catch (t) {
						r(t);
					}
				}
				function o(t) {
					var e;
					t.done
						? s(t.value)
						: ((e = t.value),
						  e instanceof n
								? e
								: new n(function (t) {
										t(e);
								  })).then(a, c);
				}
				o((i = i.apply(t, e || [])).next());
			});
		},
		r = function (t, e, n, i) {
			return new (n || (n = Promise))(function (s, r) {
				function a(t) {
					try {
						o(i.next(t));
					} catch (t) {
						r(t);
					}
				}
				function c(t) {
					try {
						o(i.throw(t));
					} catch (t) {
						r(t);
					}
				}
				function o(t) {
					var e;
					t.done
						? s(t.value)
						: ((e = t.value),
						  e instanceof n
								? e
								: new n(function (t) {
										t(e);
								  })).then(a, c);
				}
				o((i = i.apply(t, e || [])).next());
			});
		};
	class a extends HTMLElement {
		constructor() {
			super(), this.attachShadow({ mode: 'open' });
		}
		connectedCallback() {
			return r(this, void 0, void 0, function* () {
				const t = yield s(void 0, void 0, void 0, function* () {
					try {
						return fetch('https://rickandmortyapi.com/api/episode').then((t) => t.json());
					} catch (t) {
						console.log(t);
					}
				});
				this.render(t.results);
			});
		}
		render(n) {
			this.shadowRoot &&
				((this.shadowRoot.innerHTML = '\n\n        '),
				n.forEach((n) => {
					var i;
					const a = this.ownerDocument.createElement('div'),
						c = this.ownerDocument.createElement('my-card');
					c.setAttribute(t.name, n.name),
						c.setAttribute(t.ep, n.episode),
						c.setAttribute(t.ep, n.Status),
						c.setAttribute(t.ep, n.Species),
						c.setAttribute(t.ep, n.Type),
						c.setAttribute(t.ep, n.Origin),
						a.appendChild(c),
						n.characters.forEach((t) =>
							r(this, void 0, void 0, function* () {
								const n = yield ((i = t),
								s(void 0, void 0, void 0, function* () {
									try {
										return fetch(`${i}`).then((t) => t.json());
									} catch (t) {
										console.log(t);
									}
								}));
								var i;
								const r = this.ownerDocument.createElement('my-char');
								r.setAttribute(e.img, n.image),
									r.setAttribute(e.name, n.name),
									r.setAttribute(e.name, n.Status),
									r.setAttribute(e.name, n.Species),
									r.setAttribute(e.name, n.Type),
									r.setAttribute(e.name, n.Origin),
									console.log(n.url),
									a.appendChild(r);
							})
						),
						null === (i = this.shadowRoot) || void 0 === i || i.appendChild(a);
				}));
		}
	}
	customElements.define('app-container', a);
})();
