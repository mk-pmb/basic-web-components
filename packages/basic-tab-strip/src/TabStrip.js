import ElementBase from '../../basic-element-base/src/ElementBase';
import ContentFirstChildTarget from '../../basic-component-mixins/src/ContentFirstChildTarget';
import DistributedChildrenAsContent from '../../basic-component-mixins/src/DistributedChildrenAsContent';
import ItemsSelection from '../../basic-component-mixins/src/ItemsSelection';
import ObserveContentChanges from '../../basic-component-mixins/src/ObserveContentChanges';
import renderArrayAsElements from '../../basic-component-mixins/src/renderArrayAsElements';
import TargetSelection from '../../basic-component-mixins/src/TargetSelection';
import toggleClass from '../../basic-component-mixins/src/toggleClass';


// Used to assign unique IDs to tabs for ARIA purposes.
let idCount = 0;


let base = ElementBase.compose(
  ContentFirstChildTarget,
  DistributedChildrenAsContent,
  ItemsSelection,
  ObserveContentChanges,
  TargetSelection
);


/**
 * A horizontal strip of tabs.
 */
class TabStrip extends base {

  applySelection(item, selected) {
    if (super.applySelection) { super.applySelection(item, selected); }
    let index = this.items.indexOf(item);
    // See if the corresponding tab has already been created.
    // If not, the correct tab will be selected when it gets created.
    let tabs = this.tabs;
    if (tabs && tabs.length > index) {
      let tab = this.tabs[index];
      if (tab) {
        toggleClass(tab, 'selected', selected);
      }
    }
  }

  createdCallback() {
    super.createdCallback();
    this.$.tabs.addEventListener('click', event => {
      let tab = event.target;
      let tabIndex = this.tabs.indexOf(tab);
      if (tabIndex >= 0) {
        this.selectedIndex = tabIndex;
      }
    });
    if (!this.getAttribute('role')) {
      // Assign a default ARIA role.
      this.setAttribute('role', 'tablist');
    }
  }

  get tabs() {
    return [].slice.call(this.$.tabs.querySelectorAll('.tab'));
  }

  itemsChanged() {
    if (super.itemsChanged) { super.itemsChanged(); }

    let baseId = this.id ?
    "_" + this.id + "Panel" :
    "_panel";

    // Confirm that items have at least a default role and ID for ARIA purposes.
    this.items.forEach(item => {
      if (!item.getAttribute('role')) {
        item.setAttribute('role', 'tabpanel');
      }
      if (!item.id) {
        item.id = baseId + idCount++;
      }
    });

    // Create tabs.
    renderArrayAsElements(this.items, this.$.tabs, (item, element) => {
      if (!element) {
        element = document.createElement('button');
        element.classList.add('tab');
        element.classList.add('style-scope');
        element.classList.add('basic-tab-strip');
        element.setAttribute('role', 'tab');
        return element;
      }
      element.id = item.id + '_tab';
      element.textContent = item.getAttribute('aria-label');

      // Point tab and panel at each other.
      element.setAttribute('aria-controls', item.id);
      item.setAttribute('aria-labelledby', element.id);
    });

    this.selectedItemChanged();  // In case position of selected item moved.
  }

  selectedItemChanged() {
    if (super.selectedItemChanged) { super.selectedItemChanged(); }
    let selectedIndex = this.selectedIndex;
    this.tabs.forEach((tab, i) => {
      toggleClass(tab, 'selected', i === selectedIndex);
    });
  }

  get template() {
    return `
      <style>
      :host {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        position: relative;
      }

      #pages {
        background: white;
        border: 1px solid #ccc;
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
      }

      #pages ::content > * {
        display: -webkit-flex;
        display: flex;
        -webkit-flex: 1;
        flex: 1;
      }

      .tab {
        background: white;
        border: 1px solid #ccc;
        border-radius: 0.25em 0.25em 0 0;
        cursor: pointer;
        display: inline-block;
        font-family: inherit;
        font-size: inherit;
        padding: 0.5em 0.75em;
        position: relative;
        margin-bottom: -1px;
        margin-right: 0.2em;
        transition: border-color 0.25s;
      }

      .tab:hover {
        background-color: #eee;
      }

      .tab.selected {
        border-color: #ccc;
        border-bottom-color: transparent;
        opacity: 1;
      }
      </style>

      <div id="tabs"></div>
      <div id="pages">
        <slot></slot>
      </div>
    `;
  }

}


document.registerElement('basic-tab-strip', TabStrip);
export default TabStrip;