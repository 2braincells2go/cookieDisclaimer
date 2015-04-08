/*
 *  jQueryCookieDisclaimer - v0.9.0
 *  "jQuery Cookie Disclaimer Bar"
 *  http://factory.brainleaf.eu/jqueryCookieDisclaimer
 *
 *  Made by BRAINLEAF Communication
 *  Released Under GNU/GPL License
 *  (c)2014-2015 by BRAINLEAF Communication
 *  
 *  
 *  BugReport/Assistence: https://github.com/Gix075/jqueryCookieDisclaimer/issues
 */

;(function ( $, window, document, undefined ) {

	"use strict";

		var pluginName = "cookieDisclaimer",
            
            defaults = {
				
                position: "top", // top,middle,bottom
                style: "dark", // dark,light
                cookieName: "cookieDisclaimer", 
                cookieValue: "confirmed",
                cookiePath: "/", 
                cookieExpire: 7, // time in days
                cookieBarText: "To browse this site you need to accept our cookie policy.",
                cookieBtnClass: "cdbtn cookie",
                cookieBtnTxt: "Accept",
                privacyPage: false,
                privacyBtnClass: "cdbtn privacy",
                privacyBtnTxt: "Policy"
                
            };

		// constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}
    

		$.extend(Plugin.prototype, {
                
				init: function () {
                    this.cookieHunter();
                    this.cookieKillerButton();
				},
            
				makeBarMarkup: function () {
                    var barMarkup = '<div id="cookieDisclaimerBar" class="cdbar '+this.settings.style+' '+this.settings.position+'">';
                        barMarkup += '  <div class="cdbar-text">'+this.settings.cookieBarText+'</div>';
                        barMarkup += '  <div class="cdbar-buttons">';
                        if(this.settings.privacyPage != false) barMarkup += '      <a href="'+this.settings.privacyPage+'" class="'+this.settings.privacyBtnClass+'">'+this.settings.privacyBtnTxt+'</a>';   
                        barMarkup += '      <button class="'+this.settings.cookieBtnClass+' cdbar-cookie-accept">'+this.settings.cookieBtnTxt+'</button>';
                        if(this.settings.cookieDecline) barMarkup += '<button class="'+this.settings.cookieDeclineBtnClass+' cdbar-cookie-decline">'+this.settings.cookieDeclineBtnTxt+'</button>';
                        barMarkup += '  </div>';
                        barMarkup += '</div>';
                    $('body').prepend(barMarkup); 
                    this.cookieListner();
				},
                
                cookieHunter: function () {
                    if ($.cookie(this.settings.cookieName) != this.settings.cookieValue) {
                        this.makeBarMarkup();
                    }
                },
            
                cookieListner: function () {
                    var plugin = this;
                    $('.cdbar-cookie-accept').on('click',function(e){
                        e.preventDefault();
                        $.cookie(plugin.settings.cookieName, plugin.settings.cookieValue, { expires: plugin.settings.cookieExpire, path: plugin.settings.cookiePath }); 
                        $('#cookieDisclaimerBar').fadeOut();
                    });
                },
            
                cookieKiller: function () {
                    if($.cookie(this.settings.cookieName) != undefined) {
                        $.removeCookie(this.settings.cookieName, { path: this.settings.cookiePath });
                        this.cookieHunter();
                    }else{
                        alert('Sorry, but there are no cookie named '+this.settings.cookieName);
                    }
                },
            
                cookieKillerButton: function () {
                    var plugin = this;
                    $('.cdbar-cookie-kill').on('click',function(e){
                        e.preventDefault();
                        plugin.cookieKiller()
                    });
                }
            
		});


		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );
