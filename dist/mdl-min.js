function mdl_open(a){$(a).addClass("open"),$("#mdl-overlay").addClass("active"),setTimeout(function(){$(a).addClass("animIn"),$("#mdl-overlay").addClass("animIn")},100)}function mdl_close(a){$(a).hasClass("open")&&($(a).removeClass("animIn"),$(a).addClass("animOut"),0==$(".mdl.open").length&&$("#mdl-overlay").addClass("animOut"),setTimeout(function(){$(a).removeClass("open"),$(a).removeClass("animOut"),0==$(".mdl.open").length&&($("#mdl-overlay").removeClass("animIn"),$("#mdl-overlay").removeClass("active").removeClass("animOut"))},800))}!function($){$.fn.mdl=function(a,e){function l(a){$(a).addClass("open"),$("#mdl-overlay").addClass("active"),setTimeout(function(){$(a).addClass("animIn"),$("#mdl-overlay").addClass("animIn")},100)}function n(a){$(a).hasClass("open")&&($(a).removeClass("animIn"),$(a).addClass("animOut"),1==d()&&($("#mdl-overlay").addClass("animOut"),$("#mdl-overlay").removeClass("animIn")),setTimeout(function(){$(a).removeClass("open"),$(a).removeClass("animOut"),0==d()&&($("#mdl-overlay").removeClass("animIn"),$("#mdl-overlay").removeClass("active").removeClass("animOut"))},800))}function d(){return $(".mdl.open").length}var t=!1;if($(".mdl").length)var s=$(".mdl").length+1;else var s=0;var o={type:"modal",fullscreen:"true",overlayClick:"false",content:""},i=$.extend(o,a),m=$('<div id="mdl-overlay"></div>');return $("#mdl-overlay").length||$(m).appendTo("body"),this.each(function(){var a=$(this),d=i.fullscreen,t=i.type,o=i.overlayClick;if(a.attr("data-type")&&(t=a.data("type")),a.attr("data-fullscreen")&&(d=a.data("fullscreen")),a.attr("data-overlayClick")&&(o=a.data("overlayClick")),"modal"==t)var m=a.data("target");else{var r=1e5+s,v=$('<div class="mdl" id="mdl__'+s+'" style="z-index:'+r+';"><div class="mdl-container"><div class="mdl-content"></div></div></div>');$(v).appendTo("body");var m="#mdl__"+s}if("confirm"==t||"prompt"==t){if($(m+" .mdl-content").html(i.content),"prompt"==t&&$(m+" .mdl-content").append("<input type='text' value='' id='response_mdl_"+s+"' >"),"confirm"==t){var c=$('<ul class="mdl-buttons"><li><a href="#0" data-response="false">No</a></li><li><a href="#0" data-response="true">Yes</a></li></ul>');$(c).appendTo(m+" .mdl-container")}if("prompt"==t){var c=$('<ul class="mdl-buttons"><li><a href="#0" data-response="false" data-id="'+s+'">Annuler</a></li><li><a href="#0" data-response="true" data-id="'+s+'">Valider</a></li></ul>');$(c).appendTo(m+" .mdl-container")}$(m+" .mdl-container").addClass("medium"),$("body").on("click",m+" .mdl-buttons a",function(a){a.preventDefault();var l=!1;if(l=$(this).data("response"),"prompt"==t){var d=$(this).data("id");l=$("#response_mdl_"+d).val()}n(m),l&&e.call(this,l)})}d&&$(m).addClass("mdl-fullscreen"),$(m).append('<div class="mdl-close" data-target="'+m+'"></div>'),a.click(function(){l(m)}),$("body").on("click",m+" .mdl-close",function(){n(m)}),o&&$("body").on("click","#mdl-overlay",function(){n(m)})})}}(jQuery);