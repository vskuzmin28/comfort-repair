// youtube player

$('.main-screen__fake-preview').click(function(e){
  e.preventDefault();
  $("#startVideo")[0].src += "&autoplay=1";
  $('.main-screen__fake-preview').hide();
})



// call popup

$('.call').click(function(){
  event.preventDefault();
  $('.popup-call').bPopup({
    closeClass:'icon__close',
      amsl: 0,
      positionStyle: 'fixed',
    }); 
});

// functional call form

$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('#rise').bPopup().close();
           $('#okthanks').bPopup({
             closeClass:'СЃlose',
                 amsl: 0
            });
           setTimeout(function(){$('#okthanks').bPopup().close();}, 3000);
       }else{
       alert(res.text);
       }
    }, 'json');
    return false;
  })

// scroll smooth

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});

// wow animate elements

new WOW().init();

// sliders

// portfolio

$('.portfolio-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  namespace: "centered-controls"
});

// actions

$('.actions-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  namespace: "centered-controls"
});

// reviews

$('.reviews-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  namespace: "centered-controls"
});

// view full review in slider

$('.review-show').click(function(e){
  e.preventDefault();
  $('.review-full').toggle();
  $('.review-show').hide();
})