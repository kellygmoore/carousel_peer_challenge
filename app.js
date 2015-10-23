/**
 * Created by scottbromander on 10/23/15.
 */
var peopleArray = ["Dana", "Pui", "Kelly", "Sam", "Laryssa", "Scott"];

var indexTracker = 0;
$(document).ready(function(){
//send in the name array to create the carousel
    createCarousel(peopleArray);

    updateIndexPoints();
//when I click on previous and next, call the functions
    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);
});

//appends div main to DOM and creates el variable to point to where we want,
//then calls to create other elements for carousel
function createCarousel(array){
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();
    createNavButtons(peopleArray, $el);
    //createIndexPoints(array, $el);
}
//go to the next slide by incrementing the tracker and then updating
function nextSlide(){
    indexTracker++;
    if(indexTracker >= peopleArray.length){
        indexTracker = 0;
    }

    updateIndexPoints();
}
//go to the previous slide by decrementing tracker and then updating
function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length - 1;
    }
    //$('.index-point-active').
    updateIndexPoints();
}
//only used to create the previous and next text
function createNavButtons(array,$el){
    $el.append("<div id='prev' class='nav-button'>Prev</div>");
    for(var i = 0; i < array.length; i++) {
        //we need i, 1 for each element
        $el.append("<div class='index-point' id='index" + i + "'></div>")
    }
    $el.append("<div id='next' class='nav-button'>Next</div>");

//adding div class and id in a loop
//function createIndexPoints(array, $el){
    //create something visual, Divs will work
}


function updateIndexPoints(){
    for(var i = 0; i < peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");
        //$("#mainContent").empty();
        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
            $("#mainContent").text(peopleArray[i]);
        }
    }
}


