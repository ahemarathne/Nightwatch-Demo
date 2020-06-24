module.exports = function(browser){
    this.openBrowser =function(){ 
        browser
         .windowMaximize()
         .url('http://www.google.com')
         .waitForElementVisible('body',2000);
         return browser;
    };

    this.doSearch = function(searchKey){
        browser
        .setValue('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input',searchKey)
        .click('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b')
        
        browser.assert.titleContains(searchKey);
    };

    this.goToLinkedin = function(){
        browser
        .click('#rso > div:nth-child(1) > div > div > div.r > a > h3')
    
        browser.assert.titleContains('LinkedIn Sri Lanka: Log In or Sign Up');
    };

    return this;

}