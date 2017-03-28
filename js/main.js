var handler = function(){
  // $( this ).find('.dropdown__list').toggle();
  $(this).children('.dropdown__list').stop().slideToggle(200);
}
$( '.dropdown' ).hover( handler );

$(window).click(function() {
  $('.search-form__icon').toggleClass('search-form__icon__active');
});

$('.search-form__icon').click(function(event){
    event.stopPropagation();
    console.log("here");
    $('.search-form__icon').toggleClass('search-form__icon__active');
});
