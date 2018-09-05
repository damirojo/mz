function cargarPartesComunes(menu){
    $("#importHeader").load("header.html", function() {
        $(menu).addClass('active');
    });

    $("#importFooter").load("footer.html", function() {
        
    });
}