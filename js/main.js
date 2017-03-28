var handler = function(){
  // $( this ).find('.dropdown__list').toggle();
  $(this).children('.dropdown__list').stop().slideToggle(200);
}
$( '.dropdown' ).hover( handler );
