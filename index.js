$(document).ready(function() {

    //Add item to packlist
    $('.add').click(function() {
        var item = $('.addItem').val();
        if (item.length > 0) {
            $('#pack-list ul').append("<li>\n<input id='itmCheck' class='unpacked' type='checkbox' />\n<span class='name'>" + item + "</span>\n<span class='delete'>delete</span>\n</li>\n");
            $('.addItem').val("");
        }
        else {
            alert("Please enter an item!")
        }
    });

    //slide up item list
    $('#hide').click(function() {
        $("#pack-list ul").slideToggle();
    });

    //delete items on list
    $('#pack-list').on('click', '.delete', function() {
        $(this.parentElement).remove();
    });

    //Change checked item class
    $('#pack-list').on('click', '#itmCheck', function() {
        $(this).toggleClass('unpacked packed');
    });

});
