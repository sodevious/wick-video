$(function() {
    $( "#about" ).tabs({
        event: "mouseover",
        show: { effect: "fade", duration: 400 }
    });
});

$(function() {
    $( "#process" ).tabs({
        event: "mouseover",
        show: { effect: "fade", duration: 400 }
    });
});

$(function() {
    $( "#carousel ").rcarousel({
        margin: 10,
        visible: 2,
        step: 2
    });

    $( "#ui-carousel-next" )
    .add( "#ui-carousel-prev" )
});