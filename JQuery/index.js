
$("input").keypress(function(event) {
    var input = event.key;
    $("h1").text(input);
});