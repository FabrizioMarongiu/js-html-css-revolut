$(document).ready(function(){



var dropDown = $('.dropdown');
var dropLink = dropDown.children('a');
var dropMenu = dropDown.children('.dropmenu'); 


//CLICK
dropLink.click(function(){
     
   
    var actualMenu = $(this).next()
    //RESET 
    dropMenu.not(actualMenu).hide('.dropmenu');

    actualMenu.toggle();
});

//HOVER
dropLink.hover(function(){

    //CLICK

});
















    // END DOCUMENT
});