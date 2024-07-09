var prodectcontainer = document.getElementById("prodect")
var search = document.getElementById("search")
var prodectlist = prodectcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    enteredvalue = event.target.value

    for(count=0; count<prodectlist.length;count=count+1)
    {
        var prodectname = prodectlist[count].querySelector("p").textContent

        if(prodectname.indexOf(enteredvalue)<0)
        {
            prodectlist[count].style.display="none"
        }
        else{
            prodectlist[count].style.display="block"
        }
    }
})

var sidenav = document.getElementById("mani")

function shownavbar() {
    sidenav.style.left = "0"
}

function closenavbar() {
    sidenav.style.left = "-60%"
}



