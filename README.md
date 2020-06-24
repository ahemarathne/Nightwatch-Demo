
# Nightwatch JS

## Overview
Nightwatch.js is an automated end-to-end testing framework for web applications and websites. It is written in Node.js and uses Selenium WebDriver for interacting with various browsers.
Nightwatch uses the WebDriver API to perform the browser automation related tasks, like opening windows or clicking links.

## How Nightwatch works
Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element. See below for an example workflow for browser initialisation.

## Step by Step Installation 

1.	Install Node js

Also install the npm tool, which is the node package manager and is distributed with the Node.js installer.

2.	Install Nightwatch

```
$ npm install nightwatch
```
add --save-dev option to save nightwatch as a dev Dependency in your package.json.

3.	Install webdriver

For Chrome driver;

```
$ npm install chromedriver --save
```
 
Alternatively, it can be downloaded from the Chrome Driver Downloads page.

4.	Install standalone Selenium server

You will only need Selenium Server when testing against Internet Explorer, if you wish to run tests in parallel in multiple browsers, or in a Selenium Grid environment.

```
$ npm install selenium-server --save-dev
```
 
Can also manually download selenium-server-standalone-{VERSION}.jar file.  
Ex : selenium-server-standalone-3.141.59
A good practice is to create a separate subfolder (e.g. bin) and place it there

## Configuration 

Follow the steps in your project folder;
  1.	Create a file Nightwatch.js and add the code.
  
  ```
  require('./node_modules/nightwatch/bin/runner.js');
  ```
 
  2.	Create the package.json file
  Type in the following command in the terminal (your pwd should be the project folder)
  <npm init>
  After creation;
 
 ```
 {
  "name": "nightwatchjstest",
  "version": "1.0.0",
  "description": "to learn nightwatch js",
  "main": "nightwatch.js",
  "scripts": {
    "test": ""
  },
  "author": "Asi",
  "license": "ISC",
  "dependencies": {
    "fs": "0.0.1-security",
    "geckodriver": "^1.19.1",
    "handlebars": "^4.7.6",
    "nightwatch": "^1.3.5",
    "path": "^0.12.7"
  },
  "devDependencies": {
    "chromedriver": "^83.0.0"
  }
}
 ```


  Optionally you can create the following folders in your project; lib, pages and tests
 
  If you are manually adding the drivers, better to include them in lib -> drivers.

  Create Nightwatch.json file in the project's root folder.
  
  ```
  {
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
  ```
 
In addition, nightwatch.conf.js file can be created which takes precedence over Nightwatch.json. if both files are present.
nightwatch.conf.js  file is often more desirable as it provides more capabilities which come useful in large projects that need to test on several browsers.

## Create your test
Create js file in the test directory, and add the following code;
  
```
module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      // ...
      .end();
  }
};
```

To run the test, type in <node nightwatch -e chrome>
 
Reference : https://nightwatchjs.org/gettingstarted/configuration/#base-settings
