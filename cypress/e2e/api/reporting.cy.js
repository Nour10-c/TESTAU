describe("API Reporting Tests", () => {

  let token = "";

  before(() => {
    cy.request("POST", "https://neovets.onrender.com/api/v1/auth/login", {
      Email_user: "test2021@gmail.com",
      Mot_de_passe: "password3UMdFcJ"
    }).then(res => {
      token = res.body.token;
    });
  });

  it("Créer un reporting", () => {
    cy.request({
      method: "POST",
      url: "https://neovets.onrender.com/api/v1/reporting/create",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        employe: "6979d65a5031139174c15bdc",
        description_reporting: "Test Cypress reporting",
        categorie_reporting: "Technique"
      }
    }).then(res => {
      expect(res.status).to.be.oneOf([200, 201]);
      expect(res.body).to.have.property("_id");

      Cypress.env("reportingId", res.body._id);
    });
  });

  it("Lister reporting", () => {
    cy.request({
      method: "GET",
      url: "https://neovets.onrender.com/api/v1/reporting/",
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
    });
  });

  it("Get reporting par ID", () => {
    const id = Cypress.env("reportingId");

    cy.request({
      method: "GET",
      url: `https://neovets.onrender.com/api/v1/reporting/${id}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("_id");
    });
  });

  it("Modifier reporting", () => {
    const id = Cypress.env("reportingId");

    cy.request({
      method: "PATCH",
      url: `https://neovets.onrender.com/api/v1/reporting/${id}`,
      headers: { Authorization: `Bearer ${token}` },
      body: {
        description_reporting: "Reporting modifié Cypress"
      }
    }).then(res => {
      expect(res.status).to.be.oneOf([200, 204]);
    });
  });

  it("Supprimer reporting", () => {
    const id = Cypress.env("reportingId");

    cy.request({
      method: "DELETE",
      url: `https://neovets.onrender.com/api/v1/reporting/${id}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      expect(res.status).to.be.oneOf([200, 204]);
    });
  });

});
