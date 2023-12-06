$(document).ready(function() {

    var contadorTarefas = 1;

    $("#task-form").submit(function(event) {
        event.preventDefault();

        var taskName = $("#task").val();

        $("#task-list").append("<li>" + contadorTarefas + ". " + taskName + "</li>");

        contadorTarefas++;

        $("#task").val("");
    });

    $("#task-list").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
