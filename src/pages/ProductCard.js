export default class ProductCard {
  constructor(element) {
    this.container = element;
  }

  get errorMessageElement() {
    return this.container.$('[data-which-id="compare-button-error-message"]');
  }

  getManufacturerModel() {
    return this.container.$('[data-which-id="manufacturer-model"]').getText();
  }

  addToCompare() {
    const addToCompareButton = this.container.$(
      '[data-which-id="add-to-compare-button"]'
    );
    addToCompareButton.moveTo();
    addToCompareButton.waitForClickable({ timeout: 10000 });
    addToCompareButton.click();
  }

  removeFromCompare() {
    const removeFromCompareButton = this.container.$(
      '[data-which-id="remove-from-compare-button"]'
    );
    removeFromCompareButton.waitForClickable({ timeout: 10000 });
    removeFromCompareButton.click();
  }
}
