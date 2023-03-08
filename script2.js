document.getElementById("logo").onclick = function () {
    location.href = "./index.html";
};


function showPage() {
    console.log("here")

    document.getElementById("loader").style.display = "none";
    document.getElementById("carousel").style.display = "block";
  }

function scrollDown(){
    document.getElementById("carousel").scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
      });
    
}