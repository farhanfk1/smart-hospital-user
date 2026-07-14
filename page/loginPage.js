class LoginPage {
  constructor(page) {
    this.page = page;

    
    this.userLogin = page.getByRole('link', { name: 'User Login' });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
  }

  async open() {
  await this.page.goto("https://demo.smart-hospital.in/site/userlogin");
  }
 
  async login() {
    await this.signInButton.click();
  }
}
module.exports = LoginPage;