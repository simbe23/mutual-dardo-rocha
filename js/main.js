
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });
    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });  
    












    $( document ).ready(function() {
        $('#contact').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#contact-body').offset().top-50
            }, 500);
        });


        $('#home').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#begin-body').offset().top
            }, 500);
        });

        $('#logo').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#begin-body').offset().top
            }, 500);
        });

        $('#farmaceutic-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#farmaceutic').offset().top
            }, 500);
        });

        $('#farmaceutic-highlight').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#farmaceutic').offset().top
            }, 500);
        });

        $('#ortopedia-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#ortopedia').offset().top
            }, 500);
        });

        $('#ortopedia-highlight').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#ortopedia').offset().top
            }, 500);
        });


        $('#optic-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#optic').offset().top
            }, 500);
        });

        $('#optic-highlight').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#optic').offset().top
            }, 500);
        });

        $('#surgery-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#surgery').offset().top
            }, 500);
        });


        $('#psicologhy-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#psicologhy').offset().top
            }, 500);
        });

        $('#stetic-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#stetic').offset().top
            }, 500);
        });

        $('#odontology-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#odontology').offset().top
            }, 500);
        });

        $('#homevisit-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#homevisit').offset().top
            }, 500);
        });

        $('#specialized-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#specialized').offset().top
            }, 500);
        });

        $('#labs-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#labs').offset().top
            }, 500);
        });
        
        $('#emergency-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#emergency').offset().top
            }, 500);
        });

        $('#homeinternation-link').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#homeinternation').offset().top
            }, 500);
        });
    
    });




 });


 (function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);