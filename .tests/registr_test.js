const NEW_USER = {
    firstName : "John",
    lastName : "2",
    email: Date.now() + 'johndoe@example.com',
    numberPhone: "+380 50 111 22 33",
    password: "123456789",
    passwordConfirm: "123456789",
    
    }


Feature('registr');

// Scenario(' click, fill,see',  ({ I, basePage}) => {
//     I.amOnPage('/');
//     basePage.clickMyAccount();
//     basePage.clickRegister();
   
    

   
   
// });


// Scenario(' grab',  ({ I }) => {
 //   I.amOnPage('http://opencart.qatestlab.net/');
//     I.click({xpath: '//*[@id="top-links"]/ul/li/span/span'});
//     I.click({xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'});

//     const regTitleText = "Регистрация";
//     I.seeTextEquals(regTitleText, {xpath:'//*[@id="content"]/h1'})

//     I.fillField({xpath: '//*[@id="input-firstname"]'}, "John");
//     I.fillField({xpath:'//*[@id="input-lastname"]'}, "Doe");
//     I.fillField({xpath:'//*[@id="input-email"]'},  "johndoe@example.com" );

//     pause();
// });

Scenario(' register new user',  ({ I, basePage, accountPage}) => {
    I.amOnPage('/');
    basePage.clickMyAccount();
    basePage.clickRegister();
    accountPage.verifyRegisterAccountPage();
    accountPage.fillNewUserForm(NEW_USER);

    
    pause();
});