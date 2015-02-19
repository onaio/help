$(document).ready(function(){
    $("#guide-holder .post-area > ul:first-child").appendTo(".guide-nav");    
    
    var postPics = $(".post-area img"),
        maxWidth = 500;
    
    for(p=0; p<postPics.length; p++){
        if(postPics[p].width > maxWidth){
            postPics[p].addClass('full-width');
        } 
    }
});