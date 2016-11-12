var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

var thisImage;

$overlay.append($image);
$("body").append($overlay);
$overlay.append($caption);

$("#photo-gallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	$overlay.show();
	$('.show-button').show();
	theCurrentImage(this);
	

});

$overlay.click(function(){
	$overlay.hide();
	$('.show-button').hide();
});




function theCurrentImage (currentImage){
	thisImage = currentImage;
	var image2show = $(currentImage).attr('href');
	$image.attr('src', image2show);
	var captionText = $(currentImage).children("img").attr("alt");
	$caption.text(captionText);
	
}

$('.previous').click(function(){
	theParent= $(thisImage).parent().prev();
	if (theParent.length!=0){
		ok=$(theParent).children('a')

	}
		theCurrentImage(ok);
		// Make me appear
	
	$("#buttonLeft").addClass(".show-button");

	//Make disapear
		
	$("#buttonLeft").removeClass(".show-button");

});


$('.next').click(function(){
	theParent= $(thisImage).parent().next();
	if (theParent.length!=0){
		ok=$(theParent).children('a')
	}
		theCurrentImage(ok);
			// Make me appear
	
	$("#buttonRight").addClass(".show-button");

	//Make disapear
		
	$("#buttonRight").removeClass(".show-button");
});
