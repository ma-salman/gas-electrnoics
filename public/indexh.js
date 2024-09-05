for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var k= event.srcElement;
        k.classList.add("shine");
        setTimeout(function(){
            k.classList.remove("shine");
        },100);
    });
}
