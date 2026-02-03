describe('API Auth Tests', () => {

  it('Login API', () => {
    cy.request('POST', 'https://neovets.onrender.com/api/v1/auth/login', {
      Email_user: "test@gmail.com",
      Mot_de_passe: "12345"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.exist;
    });
  });

});
