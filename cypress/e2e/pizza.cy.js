describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Sipariş notuna metin girebilmelidir", () => {
    cy.get('.notes-textarea').type("Lütfen acı olmasın.");
    cy.get('.notes-textarea').should("have.value", "Lütfen acı olmasın.");
  });

  it("Birden fazla malzeme seçebilmelidir", () => {
    cy.get('.toppings-grid input[type="checkbox"]').check(["Sosis", "Soğan", "Mısır", "Sucuk"]);
    cy.get('.toppings-grid input[type="checkbox"]:checked').should("have.length", 4);
  });

  it("Formu başarıyla gönderebilmelidir", () => {
    // Gerekli alanları doldur
    cy.contains('.radio-option', 'M').click();
    cy.get('.hamur-select').select("ince");
    cy.get('.toppings-grid input[type="checkbox"]').check([
      "Pepperoni",
      "Sosis",
      "Tavuk Izgara",
      "Mısır",
    ]);
    cy.get('.notes-textarea').type("Test siparişi.");

    // Formu gönder
    cy.get(".order-button").click();

    // Başarı sayfasına yönlendirildiğini doğrula
    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI");
  });
});
