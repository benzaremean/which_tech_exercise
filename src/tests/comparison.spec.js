import ProductListSection from '../pages/ProductListSection';
import ComparisonFlyOutTray from '../pages/ComparisonFlyOutTray';
import { expect } from 'chai';

const productListSection = new ProductListSection();

describe('Compare 2 or more products', () => {
  beforeEach(function() {
    browser.reloadSession();
    browser.url('/reviews/televisions');
  });

  it('should be able to compare a minimum of 2 products', () => {
    const [card1, card2] = productListSection.getCards();

    // Add 2 products
    card1.addToCompare();
    card2.addToCompare();

    const comparisonFlyOutTray = new ComparisonFlyOutTray();
    expect(comparisonFlyOutTray.container.isDisplayed()).to.be.true;

    const product1ManufacturerModel = card1.getManufacturerModel();
    const product2ManufacturerModel = card2.getManufacturerModel();

    // exception will be thrown if no product is found below
    const comparisonFlyOutTrayProduct1 = comparisonFlyOutTray.getLiByProductName(
      product1ManufacturerModel
    );
    const comparisonFlyOutTrayProduct2 = comparisonFlyOutTray.getLiByProductName(
      product2ManufacturerModel
    );

    expect(product1ManufacturerModel).to.eql(
      comparisonFlyOutTrayProduct1.getName()
    );
    expect(product2ManufacturerModel).to.eql(
      comparisonFlyOutTrayProduct2.getName()
    );
  });

  it('should be able to a maximum of 4 products', () => {
    const [card1, card2, card3, card4, card5] = productListSection.getCards();
    card1.addToCompare();
    card2.addToCompare();
    card3.addToCompare();
    card4.addToCompare();
    card5.addToCompare();
    card5.errorMessageElement.waitForDisplayed();
  });

  it('should be able to a remove products for comparison from Card', () => {
    const [card1, card2] = productListSection.getCards();

    // Add 2 products
    card1.addToCompare();
    card2.addToCompare();

    const comparisonFlyOutTray = new ComparisonFlyOutTray();
    expect(comparisonFlyOutTray.container.isDisplayed()).to.be.true;

    // Click to remove products
    card1.removeFromCompare();
    card2.removeFromCompare();

    expect(comparisonFlyOutTray.container.isDisplayed()).to.be.false;
  });

  it('should be able to a remove products for comparison from Comparison Tray', () => {
    const [card1, card2] = productListSection.getCards();

    // Add 2 products
    card1.addToCompare();
    card2.addToCompare();

    const comparisonFlyOutTray = new ComparisonFlyOutTray();
    expect(comparisonFlyOutTray.container.isDisplayed()).to.be.true;

    const product1ManufacturerModel = card1.getManufacturerModel();
    const product2ManufacturerModel = card2.getManufacturerModel();

    // exception will be thrown if no product is found below
    const comparisonFlyOutTrayProduct1 = comparisonFlyOutTray.getLiByProductName(
      product1ManufacturerModel
    );
    const comparisonFlyOutTrayProduct2 = comparisonFlyOutTray.getLiByProductName(
      product2ManufacturerModel
    );

    comparisonFlyOutTrayProduct1.remove();
    comparisonFlyOutTrayProduct2.remove();

    expect(comparisonFlyOutTray.container.isDisplayed()).to.be.false;
  });
});
