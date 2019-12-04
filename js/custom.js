//Function that removes/add navbar while scroll
$(document).ready(function(){
    'use strict',
    $(window).scroll(function(){
        'use strict';
        if($(window).scrollTop()<600){
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-default').css({
                'background-color': '#1a1a1a'
            });
        } else{
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
            $('.navbar-default').css({
                'background-color': 'white)'
            });
        }
    });
});

//Smooth Scrolling function
$(document).ready(function(){
    'use strict';
         $('.nav-item').click(function() {
             if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                   $('html, body').animate({
                   scrollTop: target.offset().top
                      }, 1000);
               return false;
              }
          }
    });  
});

//Active menu item on click
$(document).ready(function(){
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

//Counter ++
$(document).ready(function(){
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});

//Submit form 
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open("post","form.php");
    request.onload = function () {
        console.log(request.responseText);
    }
    request.send(new FormData(myForm));
});