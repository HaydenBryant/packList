$(document).ready(function() {

    $('.add').click(function(){
        var item = $('.addItem').val();
        if (item.length > 0){
            $('#pack-list ul').append("<li>\n<input class='unpacked' type='checkbox' />\n<span class='name'>" + item + "</span>\n<span class='delete'>delete</span>\n</li>\n");
            $('.addItem').val("");
        } else {
            alert("Please enter an item!")
        }
    });
    
    $('#hide').click(function(){
       $("#pack-list").slideToggle(); 
    });
    
    $('#pack-list').on('click', '.delete', function(){
        $(this.parentElement).remove();
    });
});
