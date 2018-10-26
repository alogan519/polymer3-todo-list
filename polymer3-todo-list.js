import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer3-todo-list',
      },
    };
  }
}

window.customElements.define('polymer3-todo-list', Polymer3TodoList);
