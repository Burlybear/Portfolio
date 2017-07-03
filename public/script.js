$(document).ready(function() {
  $("button").click(function () {
    var l = prompt("How is your day");
    $.ajax({
      method: "post",
      url: "/",
      data:{ "userResponse": l }
    })
    $("#q").text("User Response:");
    $("#p").text(l);
  })
})