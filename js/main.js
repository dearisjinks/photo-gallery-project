var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $buttonLeft = $('<div id="buttonLeft"></div>');
var $buttonRight = $('<div id="buttonRight"></div>');

$overlay.append($image);
$("body").append($overlay);
$overlay.append($caption);

$("#photo-gallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);
	$overlay.show();
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});
$overlay.click(function(){
	$overlay.hide();
});

$buttonLeft.click(function(event){
	var newimageLocation = $(this).attr("href");
	$buttonLeft.show();
});
