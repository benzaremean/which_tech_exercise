export default class ComparisonTrayProduct {
  constructor(element) {
    this.container = element;
  }

  getName() {
    this.container.waitForDisplayed();
    return this.container
      .$('[data-which-id="comparison-flyout-product-name"]')
      .getText();
  }

  remove() {
    this.container.waitForDisplayed();
    this.container
      .$('[data-which-id="comparison-flyout-product-remove-button"]')
      .click();
  }
}
