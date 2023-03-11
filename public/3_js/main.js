$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


$('#accordion').on('shown.bs.collapse', function (e) {

    var panelHeadingHeight = $('.panel-heading').height();
    var animationSpeed = 500; // animation speed in milliseconds
    var currentScrollbarPosition = $(document).scrollTop();
    var topOfPanelContent = $(e.target).offset().top;
    
    if ( currentScrollbarPosition >  topOfPanelContent - panelHeadingHeight) {
        $("html, body").animate({ scrollTop: topOfPanelContent - panelHeadingHeight }, animationSpeed);
    }});

    $(document).ready(function() {
        $('.logo-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
          dots: false,
          pauseOnHover: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
            
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 2500
            }
            
          }]
        });
      });

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()