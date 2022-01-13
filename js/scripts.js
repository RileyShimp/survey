$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#name").val();
    const emailInput = $("input#email").val();
    const foodInput = $("input#favFood").val();
    const musicInput = $("#music").val();
    const beautifulInput = $("input:radio[name=beautiful]:checked").val();

    $(".nameResult").text(nameInput);
    $(".emailResult").text(emailInput);
    $(".foodResult").text(foodInput);
    $(".musicResult").text(musicInput);
    $(".beautifulResult").text(beautifulInput);

    $("#surveyResults").show();
  });
});