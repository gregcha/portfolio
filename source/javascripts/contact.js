$(document).ready(function(){
  $(function() {
    $(".form").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/gcm.charles@gmail.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          $('#footer h3').html("Got it <i class='fa fa-check'></i>");
          $('#footer h3 i').css('color', '#4EFFBB');
          $('.form').trigger("reset");
        },
        error: function(){
          $('#footer h3').html("Oops <i class='fa fa-times'></i>");
          $('#footer h3 i').css('color', '#ff4b47');
          $('.form').trigger("reset");
        }
      });
    });
  });
});
