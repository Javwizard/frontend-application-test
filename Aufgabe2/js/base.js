window.onload=function(){
    var index=1
    var slides= document.querySelectorAll(".part");
    setInterval(function(){
        if(index<4){
            var imgTag= document.createElement("img");
            imgTag.setAttribute("src", "./img/"+backgroundImages[index-1]);
            imgTag.classList.add("slider-background");
             slides[index].appendChild(imgTag);
        }
        slide(index);
          index++;  }, 4000
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
