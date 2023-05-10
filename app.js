function playBtn(){
    document.querySelector(".trailer").style.display = "block";
    document.querySelector(".z-1").style.display = "block";
    
    
}

function closeTrailer(){
    // let iframe = document.getElementsByTagName("iframe");
    // let iframeId = document.getElementById("trailerId");


    // iframeId.addEventListener("click",function(){
    //     window.unload();
    // })


    var iframe = document.getElementById("trailerId");
    var iframeSrc = iframe.src;
    iframe.src=iframeSrc;


    document.querySelector(".trailer").style.display = "none";
    document.querySelector(".z-1").style.display = "none";

}