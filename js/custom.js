change_text = function(element) {
  var $words = $(element),
    $total = $words.length - 1,
    $position = 0,
    $timer = null;

  $(element).first().addClass('active');
  var autoSlide = function() {
    $words.removeClass('active');
    if ($position === $total) {
      $position = 0;
    } else {
      $position = $position + 1;
        
    }
    $words.eq($position).addClass('active');

  };
  $timer = setInterval(autoSlide, 5000);
};


$(document).ready(function() {
  change_text('.change-text .roll');

  $("#close").click(function() {
            $(".modalEmail").removeClass("show");
            $(".modalEmail").addClass("hide");
        });


  

});




(function() {    
  $(".boton_envio").click(function() { 
    
    $('.slideTwo').removeClass('hide');

    


            
    email = $(".email").val();            
    validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;                
    if (email == "" || !validacion_email.test(email)) {            
      $(".email").focus();
       $('.modalEmail').addClass('show');         
      return false;   
                 
    } else {
      //Llamada AJAX
      $('.loading').addClass('show');
      $('.ajaxgif').removeClass('hide');
      var datos = '&email=' + email;
      $.ajax({    
        type: "POST",
            url: "contacto.php",
            data: datos,
            success: function() {        
          // alert("HE enviado");
          // console.log(email)


          location.hash = "#secondPage/1";


          setTimeout(function(){
            location.hash = "#firstPage";
            $('.bounce').addClass('hide');
            $('#section1').addClass('hide');
            $('header').addClass('hide');
            $('.socialatend').addClass('show');
          },3000);
        },
            error: function() {     
          $('.ajaxgif').hide();        
          $('.msg').text('Hubo un error!').addClass('msg_error').animate({
            'right': '130px'
          }, 300);                    
        }
      });
      return false; 


      
    }

        
  });
})();
