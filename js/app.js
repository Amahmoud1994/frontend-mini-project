function waitTime(time) {
    var ms = time + new Date().getTime();
    while (new Date() < ms){}
}

if($('ul#filter_list').length){		// Check to see if the ul news filter exists...

		$('ul#filter_list a').click(function(e){	// When click on filter button...
			e.preventDefault();		// Disables anchor tag so that it won't go back to the top of the page.

			var className = $(this).attr('class').split(" ")[0];		// Assigns the tag (the FIRST class in the anchor tag)

			$('ul#filter_list a.'+ className).toggleClass('active');  // Toggles checkmark on ALL filter anchor tags w/ that id on the page (in case the page has multiple )
			$('article.' + className).toggleClass('hide');  // Toggles hide class for all articles of selected school

		});//END $('a.lcas_button').click


}

var images = $('ul.images li');

var imgWidth = $('.slider-images-container').width();

var triggers = $('ul.triggers li');

var left;

var index = 0;


if (matchMedia) {
  var mq = window.matchMedia("(min-width: 960px)");
  var mq2 = window.matchMedia("(min-width: 640px)");
  var mq3 = window.matchMedia("(min-width: 320px)");
      var mq4 = window.matchMedia("(max-width: 960px)");
  var mq5 = window.matchMedia("(max-width: 640px)");
  var mq6 = window.matchMedia("(max-width: 320px)");
  mq.addListener(WidthChange);
  mq2.addListener(WidthChange);
  mq3.addListener(WidthChange);
      mq4.addListener(WidthChange);
  mq5.addListener(WidthChange);
  mq6.addListener(WidthChange);
  WidthChange(mq);
  WidthChange(mq2);
  WidthChange(mq3);
      WidthChange(mq4);
  WidthChange(mq5);
  WidthChange(mq6);
}

// media query change
function WidthChange(mq) {
  if (!mq.matches) {
      imgWidth = $('.slide').width();
        left = -(index * 100) + "%";
        $('.slider-images-container').css('left', left);
        $('.slide').stop(true,false).animate({'left':'-'+ imgWidth*index +'px'},300);
        waitTime(100);
  }
}

$(document).ready(function() {
	var lastElem = $('.slide').length - 1;
	$('.slider-images-container').css('width', (100 * (lastElem+1)) + '%');
	$('.slide').css('width', (100 / (lastElem+1)) + '%');
	triggers.first().addClass('selected');


    var target;
	var container;

	triggers.click(function() {
    if ( !$(this).hasClass('selected') ) {
        imgWidth = $('.slide').width();
        index = target = $(this).index();
        left = -(index * 100) + "%";
        $('.slider-images-container').css('left', left);
        $('.slide').stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
        waitTime(100);
        triggers.removeClass('selected').eq(target).addClass('selected');
    }
});

$('.next').click(function() {
    imgWidth = $('.slide').width();
    console.log(imgWidth);
    container = $('.slider-images-container');
    if(index == lastElem) index = 0;
    else index++;

    left = -(index * 100) + "%";
    $('.slider-images-container').css('left', left);
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    $('.slide').stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
    waitTime(100);
    triggers.removeClass('selected').eq(target).addClass('selected');
});

$('.prev').click(function() {
    imgWidth = $('.slide').width();
    container = $('.slider-images-container');
    if(index == 0) index = lastElem;
    else index--;
    left = -(index * 100) + "%";
    $('.slider-images-container').css('left', left);
    target = $('ul.triggers li.selected').index();
    target === 0 ? target = lastElem : target = target-1;
    $('.slide').stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
    waitTime(100);
    triggers.removeClass('selected').eq(target).addClass('selected');
});
});
