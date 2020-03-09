import ProductCard from './ProductCard';

export default class ProductListSection {
  getCards() {
    const card = $('[data-which-id="product-card"]');
    card.waitForClickable({ timeout: 10000 });
    const cards = $$('[data-which-id="product-card"]').map(
      element => new ProductCard(element)
    );
    return cards;
  }
}
