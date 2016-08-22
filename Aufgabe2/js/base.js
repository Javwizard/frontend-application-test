window.onload=function(){
    var index=1
    var slides= document.querySelectorAll(".part");
    setInterval(function(){
        if(index<4){
            slides[index].style["background-image"]="url(./img/"+backgroundImages[index-1];
        }
        slide(index);
          index++;  }, 3000
        )
};
var backgroundImages=["entwicklung.jpg","marketing.jpg","team.jpg"];
    function slide(index){
    var slider= document.querySelector("section.content");
        console.log(slider);
    var activeSlide= document.querySelector(".part .active");
        var offset= (index%4)*(-100);
        
    slider.style.left=offset +"vw";
};
