$(document).ready(function(){
    $('.gallery__mediaSlider').slick({

        arrow:false,
        dots:true,

        slidesToShow:2,
        centerMode:true,
        variableWidth:true,

        appendArrows:$('.nav_arrows'),

    });

    document.getElementsByClassName('nav')[0].classList.add('close')
   document.addEventListener('click', function(event){
        console.log(event.target.classList.value)
        if(event.target.classList.value === 'x'||
        event.target.classList.value === 'nav__link' ||
        event.target.classList.value === 'nav__linkNAMU'
        ){
            document.getElementsByClassName('nav')[0].classList.add('close')
        }
        if(event.target.classList.value === 'header__content__nav' || 
           event.target.classList.value === 'navItem'
           
        
        ){
            document.getElementsByClassName('nav')[0].classList.remove('close')
        }
   })


});

