(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
})(jQuery);




let gender=document.querySelector('.gender');
let age=document.querySelector('.age');
let shift=document.querySelector('.shift');
let khalid=document.querySelector('.khalid');

var data=[];
async function fetcApi(){
        var requst =await fetch(`https://we-care.cyclic.app/api/v1/nurses/filternurse`);
       var response=await requst.json();
       data=response.result
        console.log("all nursee",data);
      
        
        display(data)
    
    
    }
 


    function display(arr){
        let containar=``;
       
       
        for(let i=0 ; i<arr.length ; i++){
            if (arr[i].gender==gender.value&&arr[i].age==age.value&&arr[i].shift==shift.value) {
                for(let i=0 ; i<gender.value.length ; i++){
                    containar+=`
                                    <div class="container  bg-light text-center ">
                                    <div class= "">
                                <h5 class=" text-dark text-uppercase  "><span class"m-right">الاسم: </span> ${arr[i].name} </h5>
                                <h5 class=" text-dark text-uppercase "><span class"m-right">النوع: </span>${gender.value}</h5>
                                <h5 class=" text-dark text-uppercase "><span class"m-right">السن: </span> ${age.value}</h5>
                                <h5 class=" text-dark text-uppercase "><span class"m-right">الشيفت: </span>${shift.value} </h5>
                                
                                <hr>
                                        </div>
                                </div>
                                
                              
                                
                                
                                
        
                    `
                    break
                }
            }
            
        
    }
        khalid.innerHTML=containar;
       
    }


   