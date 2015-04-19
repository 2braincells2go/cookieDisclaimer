# jQueryCookieDisclaimer (version 0.10.1)
a jquery cookie disclaimer bar according the EU Law

### Alpha Version
This plugin is now at alpha version.<br>
Before version 1.0 API can change frequently.

Tested at now only on Chrome - Mozilla - Opera (Windows)

## Installation

### CSS
First, include CSS file:
```html
<link rel="stylesheet" href="plugin/path/css/jquery.cookieDisclaimer.min.css">
```

### Javascript
The, include jquery and the two javascript plugins:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="plugin/path/js/jquery-cookie/jquery.cookie.js"></script>
<script src="plugin/path/js/jquery.cookieDisclaimer.min.js"></script>
```
or you can use the "all in one" file (that is jquery.cookie.js + jquery.cookieDisclaimer.js concatenated and minimized)
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script src="plugin/path/js/jquery.cookieDisclaimer.pack.min.js"></script>
```

## Plugin Usage

### Basic Options
```javascript
$(document).on('ready', function() {
    $('body').cookieDisclaimer();
});
```

### All Options
The follow options are at default value
```javascript
$(document).on('ready', function() {
    $('body').cookieDisclaimer({
        layout: "bar", //can be: bar,modal
        position: "top", //can be: top,middle,bottom
        style: "dark", //can be: dark,light
        cssPosition: "fixed", //can be: fixed,absolute,relative
        cookieName: "cookieDisclaimer", 
        cookieValue: "confirmed", 
        cookiePath: "/", 
        cookieExpire: 7, // time in days
        cookieDisclaimerTitle: 'Cookie Disclaimer',
        cookieDisclaimerText: "To browse this site you need to accept our cookie policy.",
        cookieBtnClass: "cdbtn cookie",
        cookieBtnTxt: "Accept",
        privacyPage: false, //can be: false or an url as "privacy.html"
        privacyBtnClass: "cdbtn privacy",
        privacyBtnTxt: "Policy"
    });
});
```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   ├── demo.css
│   ├── demo.html
│   └── demo-policy-example.html
│   
├── dist/
│   ├── jquery-cookie/
│   │     └── jquery.cookie.js
│   │
│   ├── css/
│   │     ├── cookieDisclaimer.css
│   │     ├── cookieDisclaimer.min.css
│   │     └── cookieDisclaimer.less
│   │
│   ├── jquery.cookieDisclaimer.js
│   ├── jquery.cookieDisclaimer.min.js
│   └── jquery.cookieDisclaimer.pack.min.js
│
├── bower.json
├── LICENSE
└── README.md
```

## Changes

**Version 0.10.1**<br>
New *.cssPosition* option added
Some CSS changes

**Version 0.10.0**<br>
New Public Method *.cookieList()* added

**Version 0.9.1**<br>
Some changes on demo pages and CSS

