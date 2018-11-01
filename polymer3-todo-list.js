import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import './polymer3-todo.js';

/**
 * `polymer3-todo-list`
 * Create your first polymer 3 element with this todo list
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Polymer3TodoList extends PolymerElement {
    static get template() {
        return html`
			<style>
			:host {
			  display: block;
			}
			</style>
			<dom-repeat items="[[todos]]" as="todo">
				<template>
					<polymer3-todo todo="[[todo]]"></polymer3-todo>
				</template>
			</dom-repeat>
    `;
    }

    static get properties() {
        return {
            todos: {
                type: Array,
                value: function() {
                    return [
                        {name:'Step 1: make todo list' },
                        {name:'Step 2: ???'},
                        {name:'Step 3: Profit!'}
                    ]
                }
            }
        }
    }
}

window.customElements.define('polymer3-todo-list', Polymer3TodoList);
