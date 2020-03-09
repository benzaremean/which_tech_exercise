export default class ProductCard {
  constructor(element) {
    this._self = element;
  }

  getName() {
    return this._self.$('[itemprop="name"]').getText();
  }

  addToCompare() {
    const addToCompareButton = this._self.$(
      'data-which-id="add-to-compare-button"'
    );
    addToCompareButton.waitForClickable({ timeout: 10000 });
    addToCompareButton.click();
  }

  removeFromCompare() {
    const removeFromCompareButton = this._self.$(
      '[data-which-id="remove-from-compare-button"]'
    );
    removeFromCompareButton.waitForClickable({ timeout: 10000 });
    removeFromCompareButton.click();
  }
}
