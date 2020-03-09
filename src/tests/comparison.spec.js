import ProductListSection from "../pages/ProductListSection";

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('/reviews/televisions');
        const productListSection = new ProductListSection();
        const cards = productListSection.getCards();
        cards[0].addToCompare();
        cards[1].addToCompare();
    })
})