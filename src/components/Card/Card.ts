export enum Attribute {
	'name' = 'name',
	'ep' = 'ep',
	'status' = 'status',
	'Species' = 'Species',
	'Type' = 'Type',
	'Origin' = 'Origin',
}

class Card extends HTMLElement {
	name?: string;
	ep?: string;
	status?: string;
	Species?: string;
	Type?: string;
	Origin?: string;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			ep: null,
			status: null,
			Species: null,
			Type: null,
			Origin: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
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
            .card {
                background-color: dark-gray;
                padding: 10px;
            }
            p {
                margin: 0;
                padding: 5px;
            }
        </style>
            <div class="card">
            <h1>${this.name}</h1>
            <h2>${this.ep}</h2>
						<h2>${this.status}<h2>
						<h2>${this.Species}<h2>
            <h2>${this.Type}<h2>
            <h2>${this.Origin}<h2>
            </div>
            `;
		}
	}
}

customElements.define('my-card', Card);
export default Card;
