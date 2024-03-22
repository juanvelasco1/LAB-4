import * as components from './components/export';
import Card, { Attribute } from './components/Card/Card';
import Character, { AttributeChar } from './components/Character/Character';
import { getCharacters, getEpisodes } from './data/dataFetch';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const episodes = await getEpisodes();
		this.render(episodes.results);
	}

	render(episodesData: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

        `;

			episodesData.forEach((ep: any) => {
				const div = this.ownerDocument.createElement('div') as HTMLDivElement;
				const newEpisode = this.ownerDocument.createElement('my-card') as Card;
				newEpisode.setAttribute(Attribute.name, ep.name);
				newEpisode.setAttribute(Attribute.ep, ep.episode);
				newEpisode.setAttribute(Attribute.ep, ep.Status);
				newEpisode.setAttribute(Attribute.ep, ep.Species);
				newEpisode.setAttribute(Attribute.ep, ep.Type);
				newEpisode.setAttribute(Attribute.ep, ep.Origin);
				div.appendChild(newEpisode);

				ep.characters.forEach(async (character: string) => {
					const characterData = await getCharacters(character);
					const newCharacter = this.ownerDocument.createElement('my-char') as Character;
					newCharacter.setAttribute(AttributeChar.img, characterData.image);
					newCharacter.setAttribute(AttributeChar.name, characterData.name);
					newCharacter.setAttribute(AttributeChar.name, characterData.Status);
					newCharacter.setAttribute(AttributeChar.name, characterData.Species);
					newCharacter.setAttribute(AttributeChar.name, characterData.Type);
					newCharacter.setAttribute(AttributeChar.name, characterData.Origin);
					console.log(characterData.url);
					div.appendChild(newCharacter);
				});
				this.shadowRoot?.appendChild(div);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
