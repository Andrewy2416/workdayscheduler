
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// tasks object to store in localStorage.
var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

// local storage
var setTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load the tasks from localStorage and create tasks in the right row
var getTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    $.each(tasks, function(key, value) {
        var hourDiv = $("#" + key);
        createTask(value, hourDiv);
    })
}

var createTask = function(taskText, hourDiv) {
    var taskDiv = hourDiv.find(".task");
    // create the task element
    var taskP = $("<p>")
        .addClass("task-text")
        .text(taskText)
    taskDiv.html(taskP);
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