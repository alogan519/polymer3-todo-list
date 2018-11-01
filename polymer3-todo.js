import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class Polymer3Todo extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<h3>[[todo.name]]</h3>`;
	}
	
	static get properties() {
		return {
			todo: {
				type: Object
			}
		}
	}
}
customElements.define('polymer3-todo', Polymer3Todo);