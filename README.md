# jQueryCookieDisclaimer (version 1.0.0)
a jquery cookie disclaimer bar according the EU Law

## Overview
This plugin load a disclaimer bar where you can show some custom text and buttons.<br>
You can choose style, buttons classes and id, cookie expire time, cookie name and more.<br>
This plugin provide also some useful methods and ready to use buttons for several uses.

### Why use it
* because it's very easy to use
* beacuse it's light
* because it's based on jquery cookie plugin that is one of the best cookie plugin
* beacuse it's perfect for jquery beginners

[Home, Demo & Documentation](http://factory.brainleaf.eu/jqueryCookieDisclaimer) 


***


## Installation

### Bower Install
```
$ bower install jquery-cookie-disclaimer --save
```
### CSS
First, include CSS file:
```html
<link rel="stylesheet" href="plugin/path/css/jquery.cookieDisclaimer.min.css">
```

### Javascript
Then, include jquery and the two javascript plugins:
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


***


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
        layout: "bar", 
        position: "top", 
        style: "dark",
        title: "Cookie Disclaimer",
        text: "To browse this site you need to accept our cookie policy.",
        cssPosition: "fixed",

        acceptBtn: {
            text: "I Accept", 
            cssClass: "cdbtn cookie",
            cssId: "cookieAcceptBtn",
            onAfter: "" 
        },

        policyBtn: {
            active: true,
            text: "Read More", 
            link: "#", 
            linkTarget: "_blank",
            cssClass: "cdbtn privacy",
            cssId: "policyPageBtn"
        },
        
        cookie: {
            name: "cookieDisclaimer",
            val: "confirmed",
            path: "/",
            expire: 365
        }  
    });
});
```


***



## Plugin dir structure

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



***



## Changes

**Version 0.12.0 alpha**<br>
Added OnClick function on policy page button

**Version 0.11.3 alpha**<br>
Some CSS changes

**Version 0.11.2 alpha**<br>
Bug fixing on "modal" layout

**Version 0.11.1 alpha**<br>
Some code changes

**Version 0.11.0 alpha**<br>
API changed

**Version 0.10.1 alpha**<br>
New *.cssPosition* option added
Some CSS changes

**Version 0.10.0 alpha**<br>
New Public Method *.cookieList()* added

**Version 0.9.1**<br>
Some changes on demo pages and CSS

