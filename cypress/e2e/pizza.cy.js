describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Sipariş notuna metin girebilmelidir", () => {
    cy.get('[data-cy="notes-textarea"]').type("Lütfen acı olmasın.");
    cy.get('[data-cy="notes-textarea"]').should("have.value", "Lütfen acı olmasın.");
  });

  it("Birden fazla malzeme seçebilmelidir", () => {
    cy.get('[data-cy="topping-checkbox-Sosis"]').check();
    cy.get('[data-cy="topping-checkbox-Soğan"]').check();
    cy.get('[data-cy="topping-checkbox-Mısır"]').check();
    cy.get('[data-cy="topping-checkbox-Sucuk"]').check();
    cy.get('.toppings-grid input[type="checkbox"]:checked').should("have.length", 4);
  });

  it("Formu başarıyla gönderebilmelidir", () => {
    // Gerekli alanları doldur
    cy.get('[data-cy="name-input"]').type('Test Kullanıcısı');
    cy.contains('.radio-option', 'M').click();
    cy.get('.hamur-select').select("ince");
    cy.get('[data-cy="topping-checkbox-Pepperoni"]').check();
    cy.get('[data-cy="topping-checkbox-Sosis"]').check();
    cy.get('[data-cy="topping-checkbox-Tavuk Izgara"]').check();
    cy.get('[data-cy="topping-checkbox-Mısır"]').check();
    cy.get('[data-cy="notes-textarea"]').type("Test siparişi.");

    // Formu gönder
    cy.get(".order-button").click();

    // Başarı sayfasına yönlendirildiğini doğrula
    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI");
  });
});
