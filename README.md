# cookieDisclaimer (version 0.9.0)
a jquery cookie disclaimer bar according the EU Law

### Beta Version
This plugin is now at beta version. I'm testing it on all browsers.

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


