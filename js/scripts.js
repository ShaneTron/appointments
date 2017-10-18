$(document).ready(function() {
  $("#patientInfo").submit(function(event) {
    var name = $("input#patientName").val();
    var purpose = $("input#patientPurpose").val();
    var date = $("input#patientDate").val();
    var time = $("input#patientTime").val();


    $(".name").text(name);
    $(".purpose").text(purpose);
    $(".date").text(date);
    $(".time").text(time);

    $("#confirmation").show();
    $("#patientInfo").hide();

    event.preventDefault();
  });
});
