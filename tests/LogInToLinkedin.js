var search = require('../pages/GoogleSearch');
var linkedin = require('../pages/LinkedIn');

module.exports = {
    '@tags': ['LinkedinLogin'],
    before: function(browser){
        search(browser).openBrowser();
    },

    'Search Google' : function(browser){
        search(browser).doSearch('linkedin');
    },

    'Go to Linkedin' : function(browser){
        search(browser).goToLinkedin();
    },

    'click sign in' : function(browser){
        linkedin(browser).clickSignIn();
    },

    'sign in' : function(browser){
        linkedin(browser).signInWithCredentials();
    },

    after : function(browser){
        browser.pause(5000);
        browser.end();
    }

};