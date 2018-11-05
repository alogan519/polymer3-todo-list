import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class Polymer3TodoAdd extends PolymerElement {
    static get template() {
        return html`
			<style>
				:host {
					display: block;
				}
			</style>
			<input type="text" id="todo"/>
			<button on-click="handleClick" type="button">Add Todo</button>`
    }

    handleClick() {
        var name = this.$.todo.value;
        this.dispatchEvent(new CustomEvent('todo-add', {detail: {name:name }, bubbles: true, composed: true}));
    }
}

customElements.define('polymer3-todo-add', Polymer3TodoAdd);