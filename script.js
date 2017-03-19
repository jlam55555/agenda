$(function() {
  (function resetDate() {
    $("#deadline").val((new Date()).toJSON().slice(0, 10));
  })();
  $.getJSON("schedule.json", function(data) {
    data.sort(function(a, b) {
      return a.deadline - b.deadline;
    });
    var last_deadline = -1;
    for(var assignment of data) {
      if(assignment.deadline != last_deadline) {
        var date = new Date(assignment.deadline*1000);
        $("#body").append("<h2>"+date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+"</h2>");
        last_deadline = assignment.deadline;
      }
      $("#body").append(`
        <h2>`+assignment.title+`</h2>
        <p>`+assignment.subject+`</p>
      `.trim());
    }
  });
  $("#append").click(function() {
    var title = $("#title").val();
    var subject = $("#subject").val();
    var deadline = new Date($("#deadline").val());
    alert(deadline);
    $("#title").val("");
    $("#subject").val("");
    resetDate();
  });
});
