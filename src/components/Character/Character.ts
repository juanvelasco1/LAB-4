export enum AttributeChar {
	'name' = 'name',
	'img' = 'img',
	'status' = 'status',
	'Species' = 'Species',
	'Type' = 'Type',
	'Origin' = 'Origin',
}

class Character extends HTMLElement {
	name?: string;
	img?: string;
	status?: string;
	Species?: string;
	Type?: string;
	Origin?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeChar, null> = {
			name: null,
			img: null,
			status: null,
			Species: null,
			Type: null,
			Origin: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeChar, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
		}

		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <style>
            .card-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 10px;
            }

            .card {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid #ccc;
                padding: 10px;
            }

            .card img {
                max-width: 100%;
            }
        </style>
        <div class="card-container">
            <div class="card">
                <img src="${this.img}">
                <p>${this.name}</p>
                <p>${this.status}</p>
                <p>${this.Species}</p>
                <p>${this.Type}</p>
                <p>${this.Origin}</p>
            </div>
        </div>
            `;
		}
	}
}

customElements.define('my-char', Character);
export default Character;
