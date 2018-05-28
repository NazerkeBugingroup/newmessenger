$( function() { $( 'audio' ).audioPlayer(); } );
jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;

    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});
// $(".ask-text-more").click(function () {
//     $(".links-more").show();
// });
$('.ask-text-more').click( function(e) {

    e.preventDefault(); // stops link from making page jump to the top
    e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
    $('.links-more').toggle();

});

$('.links-more').click( function(e) {

    e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too

})
$('body').click( function() {

    $('.links-more').hide();

});
$(".list-messege .item-cont .img-cont").click(function () {
    $(".in-profile").toggle();
});