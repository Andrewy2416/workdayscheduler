
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// setting time for day
var tasks = {
    date: today
};

// local storage
var setTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// click handler
$(".task").on("click", function() {
    var text = $(this).text();
    // create a textInput element
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    // add the textInput element to the parent div
    $(this).html(textInput);
    textInput.trigger("focus");
})

// click handler
$(".save").on("click", function() {
    var taskInfo = $(this).closest(".task-info");
    var textArea = taskInfo.find("textarea");
    var time = taskInfo.attr("id");
    var text = textArea.val().trim();
    tasks[time] = text;
    setTasks();
    var taskP = $("<p>")
        .addClass("task-text")
        .text(text)
    textArea.replaceWith(taskP);
})