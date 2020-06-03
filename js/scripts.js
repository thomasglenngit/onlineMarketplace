$(document).ready(function(){
  $("#formShop").submit(function(event) {
  event.preventDefault();
  const firstName = $("input#firstName").val();
  const lastName = $("input#lastName").val();
  const loyaltyNumber = $("input#loyaltyNumber").val();
  const superhero = $("#superhero").val();
  const size = $("input:radio[name=size]:checked").val();


  $(".firstName").text(firstName);
  $(".lastName").text(lastName);
  $(".loyaltyNumber").text(loyaltyNumber);
  $(".superhero").text(superhero);
  $(".size").text(size);


    $("#output").show();
  });
});