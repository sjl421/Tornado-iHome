$(document).ready(function(){
    $.get("/api/order/my?role=custom", function(data){
        if (0 == data.errno) {
            $(".orders-list").html(template("orders-list-tmpl", {orders:data.orders}));
        }
    });
});