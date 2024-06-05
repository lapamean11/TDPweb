$(document).ready(function() {
    console.log('yeee');

    $(".burger-menu").click(function(){
        console.log("open");
        $(".menu-popup").show();
    });

    $(".close-menu").click(function(){
        console.log("open");
        $(".menu-popup").hide();
    });

    $("#cbx-3").change(function() {
        if($(this).is(":checked")) {
            console.log('dark');
            $('.text').each(function(index, element) {
                element.style.color = "white";
            });

            $('.text-wrapper').each(function(index, element) {
                element.style.color = "white";
            });

            $('.img-wrapper-sketchy').each(function(index, element) {
                console.log(element);
                $(this).addClass("img-wrapper-sketchy-white");
                $(this).removeClass("img-wrapper-sketchy");

            });

            $('h2').each(function(index, element) {
                element.style.color = "white";
            });
            $('.main-content').css('background', 'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)');
        } else {
            console.log('white');
            $('.main-content').css('background', 'transparent');
        }
    });


    var slideIndex = 1;

    function showImage(n) {
        
        'use strict';
        
        var slide = document.getElementsByClassName('slides'),
            dots = document.getElementsByClassName('dots'),
            i;
        
        if (n > slide.length) {
            slideIndex = 1;
        }
        
        if (n < 1) {
            slideIndex = slide.length;
        }
        
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }

        slide[slideIndex - 1].style.display = 'block';
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        
        dots[slideIndex - 1].className += ' active';
    }

    showImage(slideIndex);

    $(".prev").click(function() {
        showImage(slideIndex += (-1))
    });
    $(".next").click(function() {
        showImage(slideIndex += (1))
    });

    $(".dots").click(function() {
        showImage(slideIndex = $(this).index() + 1)
    });

    $(window).scroll(function(){
        var header = $('.header');
        var content = $('.main-content');
        var headerHeight = header.outerHeight();
        scroll = $(window).scrollTop();
       
        if (scroll >= headerHeight) { 
            header.addClass('fixed'); 
            console.log(content)
            content.css("margin-top", "70px");
            $(".to-up").fadeIn();
        }
        else { 
            header.removeClass('fixed');
            content.css("margin-top", "0");
            $(".to-up").fadeOut();
        }

    });


    $(".to-up").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // var carousel = document.getElementById('carousel');

    // amount = document.getElementsByClassName("slide1").length;
    // // get the width of the container
    // moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // // console.log(moveOffset);
    // // calcuate the width of the carousel
    // document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    // // prevent multiple click when transition
    // for(var i = 0; i < amount; i++)
    // {
    //     currTransl[i] = -moveOffset;
    //     document.getElementsByClassName("slide1")[i].addEventListener("transitionend", transitionCompleted, true);                    
    //     document.getElementsByClassName("slide1")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
    //     document.getElementsByClassName("slide1")[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
    //     document.getElementsByClassName("slide1")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
    // }
    // // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    // document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4], document.getElementById('carousel').children[0])
    // // add click events to control arrows
    // document.getElementById('prev1').addEventListener('click', prev, true);
    // document.getElementById('next1').addEventListener('click', next, true);

    // setInterval(next, 4000);
});

// var index = 0,
// amount = 0,
// currTransl = [],
// translationComplete = true,
// moveOffset = 0;

// var transitionCompleted = function(){
//     translationComplete = true;
// }

// function prev()
// {
//     if (translationComplete === true)
//     {
//         translationComplete = false;
//         index--;
//         if (index == -1)
//         {
//             index = amount-1;
//         }
//         var outerIndex = (index) % amount;
//         for (var i = 0; i < amount; i++)
//         {
//             var slide = document.getElementsByClassName("slide1")[i];    
//             slide.style.opacity = '1';    
//             slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
//             currTransl[i] = currTransl[i]+moveOffset;
//         }
//         var outerSlide = document.getElementsByClassName("slide1")[outerIndex];
//         outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
//         outerSlide.style.opacity = '0';
//         currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
//     }
// }

// function next()
// {
//     if (translationComplete === true)
//     {
//         translationComplete = false;
//         var outerIndex = (index) % amount;
//         index++;
//         for(var i = 0; i < amount; i++)
//         {
//             var slide = document.getElementsByClassName("slide1")[i];    
//             slide.style.opacity = '1';    
//             slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
//             currTransl[i] = currTransl[i]-moveOffset;
//         }
//         var outerSlide = $(".slide1")[outerIndex];
//         outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
//         outerSlide.style.opacity = '0';
//         currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
//     }
// }

// $('#prev1').click(function() {
//     next();
// });