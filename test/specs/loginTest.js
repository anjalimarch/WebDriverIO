
const loginPage = require('./pageObjects/loginPage');


describe('My Login application', function() {
    it('should login with valid credentials', function() {
        
browser.url("https//www.google.com");

loginPage.Login("anjali","rudra")
            
    });
});


