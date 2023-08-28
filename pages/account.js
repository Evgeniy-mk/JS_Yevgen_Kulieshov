const { I } = inject();

module.exports = {

  h1: {xpath:'//*[@id="content"]/h1'},
  firstNameField: {xpath: '//*[@id="input-firstname"]'},
  lastNameField: {xpath:'//*[@id="input-lastname"]'}, 
  emailField: {xpath:'//*[@id="input-email"]' },
  numberPhoneField: {xpath:'//*[@id="input-telephone"]'},
  passwordField: {xpath:'//*[@id="input-password"]'},
  passwordConfirmField: {xpath: '//*[@id="input-confirm"]'},





  verifyRegisterAccountPage(){
    const regTitleText = "Регистрация";
    I.seeTextEquals(regTitleText, this.h1);
  },
  fillNewUserForm(user) {
    I.fillField (this.firstNameField, user.firstName);
    I.fillField (this.lasttNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.numberPhoneField, user.numberPhone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordConfirmField, user.passwordConfirm)
  },



}
