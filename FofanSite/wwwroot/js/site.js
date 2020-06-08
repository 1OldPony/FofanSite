var slideNumber = 0;
var fullslideNumber = 0;
var topslideNumber = 0;
var virezslideNumber = 0;
var rulslideNumber = 0;
var nastilslideNumber = 0;
var parusslideNumber = 0;
var rundukslideNumber = 0;
var spinkaslideNumber = 0;
var deliveryslideNumber = 0;

function slideTo(id, numberOfSlides, slide) {
    var blockWidth = $("#" + id + ".slidesRow").width();
    var step = blockWidth / numberOfSlides;
    var scrollNumber = step * (slide - 1);

    switch (id) {
        case "topGallery":
            topslideNumber = slide - 1;
            break;
        case "virezGallery":
            virezslideNumber = slide - 1;
            break;
        case "rulGallery":
            rulslideNumber = slide - 1;
            break;
        case "nastilGallery":
            nastilslideNumber = slide - 1;
            break;
        case "parusGallery":
            parusslideNumber = slide - 1;
            break;
        case "rundukGallery":
            rundukslideNumber = slide - 1;
            break;
        case "spinkaGallery":
            spinkaslideNumber = slide - 1;
            break;
        case "deliveryGallery":
            deliveryslideNumber = slide - 1;
            break;
        default:
            slideNumber = slide - 1;
    }

    for (var i = 1; i <= numberOfSlides; i++) {
        $('#' + id + i + '.currentDot').attr('class', 'dot');
    }

    $('#' + id + slide + '.dot').attr("class", "currentDot");

    $("#" + id + ".slidesRow").css('transform', "translatex(-" + scrollNumber + "px)");
}

function slideLeft(id, numberOfSlides) {
    var blockWidth = $("#" + id + ".slidesRow").width();
    var step = blockWidth / numberOfSlides;

    switch (id) {
        case "full":
            if (fullslideNumber == 0)
                fullslideNumber = numberOfSlides;

            var scrollNumber = step * (fullslideNumber - Number('1'));
            break;
        case "topGallery":
            if (topslideNumber == 0) {
                topslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (topslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + topslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (topslideNumber - 1);
            break;
        case "virezGallery":
            if (virezslideNumber == 0) {
                virezslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (virezslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + virezslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (virezslideNumber - 1);
            break;
        case "rulGallery":
            if (rulslideNumber == 0) {
                rulslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (rulslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + rulslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (rulslideNumber - 1);
            break;
        case "nastilGallery":
            if (nastilslideNumber == 0) {
                nastilslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (nastilslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + nastilslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (nastilslideNumber - 1);
            break;
        case "parusGallery":
            if (parusslideNumber == 0) {
                parusslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (parusslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + parusslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (parusslideNumber - 1);
            break;
        case "rundukGallery":
            if (rundukslideNumber == 0) {
                rundukslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (rundukslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + rundukslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (rundukslideNumber - 1);
            break;
        case "spinkaGallery":
            if (spinkaslideNumber == 0) {
                spinkaslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (spinkaslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + spinkaslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (spinkaslideNumber - 1);
            break;
        case "deliveryGallery":
            if (deliveryslideNumber == 0) {
                deliveryslideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (deliveryslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + deliveryslideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (deliveryslideNumber - 1);
            break;
        default:
            if (slideNumber == 0) {
                slideNumber = numberOfSlides;
                $('#' + id + numberOfSlides + '.dot').attr("class", "currentDot");
                $('#' + id + '1.currentDot').attr('class', 'dot');
            }
            else {
                $('#' + id + (slideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + slideNumber + '.dot').attr("class", "currentDot");
            }
            var scrollNumber = step * (slideNumber - 1);
    }

    $("#" + id + ".slidesRow").css('transform', "translatex(-" + scrollNumber + "px)");

    switch (id) {
        case "full":
            fullslideNumber -= 1;
            break;
        case "topGallery":
            topslideNumber -= 1;
            break;
        case "virezGallery":
            virezslideNumber -= 1;
            break;
        case "rulGallery":
            rulslideNumber -= 1;
            break;
        case "nastilGallery":
            nastilslideNumber -= 1;
            break;
        case "parusGallery":
            parusslideNumber -= 1;
            break;
        case "rundukGallery":
            rundukslideNumber -= 1;
            break;
        case "spinkaGallery":
            spinkaslideNumber -= 1;
            break;
        case "deliveryGallery":
            deliveryslideNumber -= 1;
            break;
        default:
            slideNumber -= 1;
    }
}

function slideRight(id, numberOfSlides) {
    var blockWidth = $("#" + id + ".slidesRow").width();
    var step = blockWidth / numberOfSlides;

    switch (id) {
        case "full":
            if (fullslideNumber == (numberOfSlides - 1)) {
                fullslideNumber = 0;
                var scrollNumber = step * fullslideNumber;
            }
            else {
                var scrollNumber = step * (fullslideNumber + Number('1'));
                fullslideNumber += 1;
            }
            break;
        case "topGallery":
            if (topslideNumber == (numberOfSlides - 1)) {
                topslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * topslideNumber;
            }
            else {
                var scrollNumber = step * (topslideNumber + 1);
                $('#' + id + (topslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (topslideNumber + 2) + '.dot').attr("class", "currentDot");
                topslideNumber += 1;
            }
            break;
        case "virezGallery":
            if (virezslideNumber == (numberOfSlides - 1)) {
                virezslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * virezslideNumber;
            }
            else {
                var scrollNumber = step * (virezslideNumber + 1);
                $('#' + id + (virezslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (virezslideNumber + 2) + '.dot').attr("class", "currentDot");
                virezslideNumber += 1;
            }
            break;
        case "rulGallery":
            if (rulslideNumber == (numberOfSlides - 1)) {
                rulslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * rulslideNumber;
            }
            else {
                var scrollNumber = step * (rulslideNumber + 1);
                $('#' + id + (rulslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (rulslideNumber + 2) + '.dot').attr("class", "currentDot");
                rulslideNumber += 1;
            }
            break;
        case "nastilGallery":
            if (nastilslideNumber == (numberOfSlides - 1)) {
                nastilslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * nastilslideNumber;
            }
            else {
                var scrollNumber = step * (nastilslideNumber + 1);
                $('#' + id + (nastilslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (nastilslideNumber + 2) + '.dot').attr("class", "currentDot");
                nastilslideNumber += 1;
            }
            break;
        case "parusGallery":
            if (parusslideNumber == (numberOfSlides - 1)) {
                parusslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * parusslideNumber;
            }
            else {
                var scrollNumber = step * (parusslideNumber + 1);
                $('#' + id + (parusslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (parusslideNumber + 2) + '.dot').attr("class", "currentDot");
                parusslideNumber += 1;
            }
            break;
        case "rundukGallery":
            if (rundukslideNumber == (numberOfSlides - 1)) {
                rundukslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * rundukslideNumber;
            }
            else {
                var scrollNumber = step * (rundukslideNumber + 1);
                $('#' + id + (rundukslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (rundukslideNumber + 2) + '.dot').attr("class", "currentDot");
                rundukslideNumber += 1;
            }
            break;
        case "spinkaGallery":
            if (spinkaslideNumber == (numberOfSlides - 1)) {
                spinkaslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * spinkaslideNumber;
            }
            else {
                var scrollNumber = step * (spinkaslideNumber + 1);
                $('#' + id + (spinkaslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (spinkaslideNumber + 2) + '.dot').attr("class", "currentDot");
                spinkaslideNumber += 1;
            }
            break;
        case "deliveryGallery":
            if (deliveryslideNumber == (numberOfSlides - 1)) {
                deliveryslideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * deliveryslideNumber;
            }
            else {
                var scrollNumber = step * (deliveryslideNumber + 1);
                $('#' + id + (deliveryslideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (deliveryslideNumber + 2) + '.dot').attr("class", "currentDot");
                deliveryslideNumber += 1;
            }
            break;
        default:
            if (slideNumber == (numberOfSlides - 1)) {
                slideNumber = 0;
                $('#' + id + numberOfSlides + '.currentDot').attr('class', 'dot');
                $('#' + id + '1.dot').attr("class", "currentDot");
                var scrollNumber = step * slideNumber;
            }
            else {
                var scrollNumber = step * (slideNumber + 1);
                $('#' + id + (slideNumber + 1) + '.currentDot').attr('class', 'dot');
                $('#' + id + (slideNumber + 2) + '.dot').attr("class", "currentDot");
                slideNumber += 1;
            }
    }

    $("#" + id + ".slidesRow").css('transform', "translatex(-" + scrollNumber + "px)");
}

function fullScreen(galleryName, slide) {
    $("#fullFotoScreen").css('display', 'flex');
    $("body").css('overflow', 'hidden');
    var scobka = "'"
    var numberOfSlides = $('#' + galleryName).attr("numberOfSlides")
    var width = $("body").width();

    var step;
    if (width > 1000)
        step = 1000;
    else
        step = width;

    fullslideNumber = slide-1;
    var scrollNumber = step * fullslideNumber;
    var trans = "translatex(-" + scrollNumber + "px)";

    switch (galleryName) { 
        case "topGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/2.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/3.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/5.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/4.jpg" /></div></div></div>');
            break;
        case "virezGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/spinka-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/spinka-2.jpg" /></div></div></div>');
            break;
        case "rulGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/spinka-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/spinka-2.jpg" /></div></div></div>');
            break;
        case "nastilGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/spinka-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/spinka-2.jpg" /></div></div></div>');
            break; 
        case "parusGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/spinka-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/spinka-2.jpg" /></div></div></div>');
            break;
        case "rundukGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/spinka-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/spinka-2.jpg" /></div></div></div>');
            break;
        case "spinkaGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/spinka-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="/images/spinka-2.jpg" /></div></div></div>');
            break;
        case "deliveryGallery":
            $(".fullFoto").html('<div id = "left" class="control" onclick="slideLeft(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/left-arrow-button.png" /></div ><div id="right" class="control" onclick="slideRight(' + scobka + 'full' + scobka + ',' + scobka + numberOfSlides + scobka + ')"><img src="/images/right-arrow-button.png" /></div><div id="full" class="slidesRow" style=width:' + numberOfSlides * 100 + '%;transform:' + trans + '><div class="slide"><div id="fullView"><img src="/images/deliver-1.jpg" /></div></div><div class="slide"><div id="fullView"><img src="static/img/deliver-2.jpg" /></div></div></div>');
            break;
        default:
    }
}

function closeIt() {
    $("#fullFotoScreen").css('display', 'none');
    $("body").css('overflow', 'initial');
}

//function endPriceCount() {
//    var price;



//    $('#endPrice').html(price+' руб.');
//}
