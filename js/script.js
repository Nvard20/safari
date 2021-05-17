var mySwiper = new Swiper ('.slider-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: {
      el: ".pg-sw",
    
    },
  });
  var mySwiper = new Swiper ('.slider-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
      
      },
  });
  var mySwiper = new Swiper ('.magazine-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
      
      },
  });
  var mySwiper = new Swiper ('.slider-revies', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: ".rv-page",
        clickable: true,
      },
      navigation: {
        nextEl: '.next-rev',
        prevEl: '.prev-rev',
      },
      breakpoints: {
        // when window width is <= 499px
        310: {
            slidesPerView: 1,
          
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
        },
        1150: {
          slidesPerView: 3,
      }
    }
  });

  $('.cats li').on('click', function () {

  
    $('.cats li ').removeClass('active-link ') ;
   $(this).addClass('active-link')
  
  
  });
  

  $('.cat-box').on('click', function () {

  
    $('.cat-box ').removeClass('active-link ') ;
   $(this).addClass('active-link')
  
  
  });

  $( ".burg img" ).click(function() {
	var src = ($(this).attr('src') === 'img/burg.png')
				? 'img/delete.png'
				: 'img/burg.png';
			 $(this).attr('src', src);

		$( ".opened" ).slideToggle( "1000", function() {

		});
  });
 



$('.tab').click(function(){

  $(this).children('.childs').slideToggle( "1000", function() {
      
  });

})
$(document).ready(function() {
  /*===================================
  =            Modalbox.js            =
  ===================================*/

  // vars needed
  var     modalBox = $('div.inner-modal'),
          modalOverlay = $('div.modal-overlay'),
          modalContent = $('div.modal-content');


  // toggle modal
  function toggleModal() {
  $('div.modal-content').addClass('no-close');
      modalOverlay.show();
      setTimeout(function() {
          modalOverlay.addClass('disp');
          setTimeout(function() {
              modalBox.addClass('disp');
          }, 100);
      }, 100);
  }

  // hide modal
  function removeModal(e) {
      // if clicked inside modal box, ignore it
      if ($(e.target).closest('.no-close')[0]  ) {
          return false;
      }
      else {
          modalOverlay.removeClass('disp');
          modalBox.removeClass('disp');
          setTimeout(function() {
              modalOverlay.hide();
              modalContent.empty();
          }, 300);
      }
     
  }

  // bind button to toggle modal
  $(document).on('click', '.modal-btn', function(e) {
      e.preventDefault();
      toggleModal();
      var modalSlug = $(this).attr('data-modalslug');
      var contentToAppend = $('[data-type="modalcontent"][data-modalslug="'+modalSlug+'"]').html();
      modalContent.append(contentToAppend);
  });


  // bind overlay to hide modal
  modalOverlay.on('click', function(e) {
      removeModal(e);
  });

 // hide modal on esc keyup
  $(document).keyup(function(e){
      if(e.which === 27) {
        removeModal(e);
      }
  });

});

var     modalBox1 = $('div.inner-modal'),
 modalOverlay1 = $('div.modal-overlay'),
modalContent1 = $('div.modal-content');

$(document).on('click', '.cross', function() {  
  modalOverlay1.removeClass('disp');
  modalBox1.removeClass('disp');
  setTimeout(function() {
      modalOverlay1.hide();
      modalContent1.empty();
  }, 300);
});
$(document).on('click', '.auto_btn', function() {  

  
  $('.auto_btn ').removeClass('active_auto_btn ') ;
    $(this).addClass('active_auto_btn');
    


});
$(document).on('click', '.auto_btn_1', function() {  

  $(".form-2").hide();
  $(".form-1").show();
    


});
$(document).on('click', '.auto_btn_2', function() {  
 
  $(".form-2").show();
  $(".form-1").hide();
  
});

var mySwiper = new Swiper ('.own-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:false,
  parallax: true,
  pagination: {
      el: ".own-page",
    
    },
});

