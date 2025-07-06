export default class TheIsland extends HTMLElement {
	public constructor() {
		super();
		console.log('The Island');
	}
}
customElements.define('the-island', TheIsland);
