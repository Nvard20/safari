$( function() {
    $( "#datepicker" ).datepicker({
      dateFormat: "dd-mm-yy"
      ,	duration: "fast",
      beforeShow:function(textbox, instance){
        $('.wrapper').append($('#ui-datepicker-div'));
    }
    });
  } );