module.exports = function(browser){
    this.clickSignIn = function(){
        browser
        .click('body > nav > a.nav__button-secondary')
    
        browser.assert.titleContains('LinkedIn Login, Sign in | LinkedIn');
        
    };

    this.signInWithCredentials = function(){
        browser
        .setValue('#username','abcdef@ghi.com')
        .setValue('#password','angendhwkjrh')
        .click('#app__container > main > div:nth-child(2) > form > div.login__form_action_container > button')
    
        
    
        browser.expect.element('#profile-nav-item > div').to.be.present;
    }

    return this;
}