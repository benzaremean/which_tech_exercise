import ComparisonTrayProduct from './ComparisonTrayProduct';

export default class ComparisonFlyOutTray {
  get container() {
    return $('[data-which-id="comparison-flyout-tray"]');
  }

  getLiByProductName(productName) {
    this.container.waitForDisplayed();
    const selector = '[data-which-id="comparison-flyout-product-name"]';
    const containsProduct = element =>
      element.$(selector).getText() === productName;
    browser.waitUntil(
      () => this.container.$$('li').some(containsProduct),
      10000,
      `Did not find product ${productName} in Comparison FlyOut Tray`,
      5000
    );
    const productLiElement = this.container.$$('li').filter(containsProduct)[0];
    return new ComparisonTrayProduct(productLiElement);
  }
}
