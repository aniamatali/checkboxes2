$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#trait-responses").show();
    $("input:checkbox[name=characterTraits]:checked").each(function() {
      var traits = $(this).val();
      if (traits === "happy") {
        alert("youre happy");
      } else if (traits === "sad") {
        alert("youre sad");
      } else {
        alert("youre ok");
      }
    })
  })
})
