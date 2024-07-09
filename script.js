var sidenav = document.getElementById("mani")

function shownavbar() {
    sidenav.style.left = "0"
}

function closenavbar() {
    sidenav.style.left = "-60%"
}







var submitbutton=document.getElementById("submitbutton").addEventListener("click",function(){
    window.location.href="intex.html"
    alert("Thanks For Register")
})

