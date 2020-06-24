module.exports={
    '@tags':['demo'],
    'Demo test Google' : function(client){
        client
            .url('http://www.google.com')
            .waitForElementVisible('body',1000)
            .assert.title('Google')
            .end();
    }
};