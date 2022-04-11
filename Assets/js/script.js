//globo popover en imágenes
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

//globo tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// funciones
$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("el correo fue enviado correctamente...");
})
// doble click
$("u").dblclick(function () {
    $(this).css({
        "color": "red",
        });
    });
    $(".card-title").click(function () {
        $(".card-textToggle").toggle({
        });
    });
    });
