$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    $('#sidebar li').on('click', function () {
        $('#sidebar li.active').toggleClass('active');
        $(this).toggleClass('active');
    });
});