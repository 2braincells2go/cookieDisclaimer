/*
 *  jQueryCookieDisclaimer - v0.10.1
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
				
                layout: "bar", // bar,modal
                position: "top", // top,middle,bottom
                style: "dark", // dark,light
                cssPosition: "fixed", //fixed,absolute,relative
                cookieName: "cookieDisclaimer", 
                cookieValue: "confirmed",
                cookiePath: "/", 
                cookieExpire: 7, // time in days
                cookieDisclaimerTitle: 'Cookie Disclaimer',
                cookieDisclaimerText: "To browse this site you need to accept our cookie policy.",
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
                
                /* ==========================================================
                    DISCLAIMER BAR 
                    This function generates the bar markup 
                ========================================================== */
				makeBarMarkup: function () {
                    
                    switch (this.settings.layout) {
                        
                        case "bar":  
                            
                            var barMarkup = '<div id="cookieDisclaimerBar" class="cdbar '+this.settings.style+' '+this.settings.position+' '+this.settings.cssPosition+'">';
                            barMarkup += '  <div class="cdbar-text">'+this.settings.cookieDisclaimerText+'</div>';
                            barMarkup += '  <div class="cdbar-buttons">';
                            if(this.settings.privacyPage != false) barMarkup += '      <a href="'+this.settings.privacyPage+'" class="'+this.settings.privacyBtnClass+'">'+this.settings.privacyBtnTxt+'</a>';   
                            barMarkup += '      <button class="'+this.settings.cookieBtnClass+' cdbar-cookie-accept">'+this.settings.cookieBtnTxt+'</button>';
                            barMarkup += '  </div>';
                            barMarkup += '</div>';
                            
                            break;
                            
                        case "modal":
                            
                            var barMarkup = '<div id="cookieDisclaimerModal" class="cdmodal '+this.settings.style+' '+this.settings.position+'">';
                                barMarkup += '  <div class="cdmodal-box">';
                                barMarkup += '      <div class="cdmodal-box-inner">';
                                barMarkup += '          <div class="cdmodal-text">';
                                barMarkup += '             <h3>'+this.settings.cookieDisclaimerTitle+'</h3>';
                                barMarkup += '             <p>'+this.settings.cookieDisclaimerText+'</p>';
                                barMarkup += '          </div>';
                                barMarkup += '          <div class="cdmodal-buttons">';
                                if(this.settings.privacyPage != false) barMarkup += '      <a href="'+this.settings.privacyPage+'" class="'+this.settings.privacyBtnClass+'">'+this.settings.privacyBtnTxt+'</a>';   
                                barMarkup += '              <button class="'+this.settings.cookieBtnClass+' cdbar-cookie-accept">'+this.settings.cookieBtnTxt+'</button>';
                                barMarkup += '          </div>';
                                barMarkup += '      </div>';
                                barMarkup += '  </div>';
                                barMarkup += '</div>';
                            break;
                        
                    }
                    
                    if(this.settings.position == "bottom") {
                        $('body').append(barMarkup); 
                    }else{
                        $('body').prepend(barMarkup); 
                    }
                    
                    
                    this.cookieListner();
				},
                
                /* ==========================================================
                    COOKIE EXISTANCE CONTROL 
                    This function check if the plugin cookie already exists 
                    if not the bar will be showed
                ========================================================== */
                cookieHunter: function () {
                    if ($.cookie(this.settings.cookieName) != this.settings.cookieValue) {
                        this.makeBarMarkup();
                    }
                },
            
                /* ==========================================================
                    ACCEPT COOKIE POLICY BUTTON
                    This function initialize the accept button
                ========================================================== */
                cookieListner: function () {
                    var plugin = this;
                    $('.cdbar-cookie-accept').on('click',function(e){
                        e.preventDefault();
                        $.cookie(plugin.settings.cookieName, plugin.settings.cookieValue, { expires: plugin.settings.cookieExpire, path: plugin.settings.cookiePath }); 
                        $('#cookieDisclaimerBar').fadeOut();
                    });
                },
            
                cookiesList: function (out,element) {

                    var cookiesList = document.cookie.split(';'),
                        cookiesListString = document.cookie,
                        cookieListOutput = "";
                    
                    switch(out) {
                        case "array":
                            cookieListOutput = cookiesList;
                            break;
                        case "string":
                            cookieListOutput = cookiesListString;
                            break;
                        case "html":
                            cookieListOutput = '<ul class="cd-cookieslist">';
                            for (var i = 1 ; i <= cookiesList.length; i++) {
                                cookieListOutput += '<li>' + cookiesList[i-1] + '</li>';
                            }
                            cookieListOutput += '</ul>'; 
                            if(element != undefined && element !="") {
                                $(element).html(cookieListOutput);
                                return true;
                            }
                            break;
                        default:
                            cookieListOutput = cookiesList;                            
                            break;
                    }
                    
                    console.log("cookieList as "+out+" : "+cookieListOutput);
                    return cookieListOutput;

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
