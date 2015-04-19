# jQueryCookieDisclaimer (version 0.11.0)
a jquery cookie disclaimer bar according the EU Law

### Alpha Version
This plugin is now at alpha version.<br>
Before version 1.0 API can change frequently.


### WARNING
From version **0.11.0** Plugin API are changed!<br>
I hope this is the last time ... sorry!

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
        layout: "bar", // bar,modal
        position: "top", // top,middle,bottom
        style: "dark", // dark,light
        title: "Cookie Disclaimer", // this is the modal title (not used on layout "bar")
        text: "To browse this site you need to accept our cookie policy.", // "bar" and "modal" text
        cssPosition: "fixed", //fixed,absolute,relative

        acceptBtn: {
            text: "I Accept", // accept btn text
            cssClass: "cdbtn cookie", // accept btn class
            cssId: "cookieAcceptBtn", // univocal accept btn ID
            onAfter: "" // callback after accept button click
        },

        policyBtn: {
            active: true, // this option is for activate "cookie policy page button link"
            text: "Read More", // policypage btn text
            link: "#", // cookie policy page URL
            linkTarget: "_blank", // policypage btn link target
            cssClass: "cdbtn privacy", // policypage btn class
            cssId: "policyPageBtn" // univocal policypage btn ID
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

