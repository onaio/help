$(document).ready(function(){
    $("#guide-holder .post-area > ul:first-child").appendTo(".guide-nav");    
    
    var postPics = $(".post-area img"),
        maxWidth = 500;
    
    var images = document.getElementsByTagName("img-");
    var i;

    for(i = 0; i < images.length; i++) {
        
        console.log("Checking if: "+images[i].width + " is greater than: "+ maxWidth);
        
        if(images[i].width > maxWidth){
            images[i].className += " full-width";
        }
        else{
            // continue
        }
    }
});