for(var j=0;j<document.querySelectorAll("button").length;j++)
{
    document.querySelectorAll("button")[j].addEventListener("click", function(){
        var b= event.srcElement;
        b.classList.add("shine");
        setTimeout(function(){
            b.classList.remove("shine");
        },100);
    });
}