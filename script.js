var center = document.querySelector("#iimg #center");
// var iimg = document.querySelector("#iimg ");
var red = document.querySelector("#icon #love");
var flag = 0;

iimg.addEventListener("dblclick", function () {

    center.style.opacity = 0.9;
red.classList.remove("ri-heart-3-line");
red.classList.add("ri-heart-3-fill");
  
  
    red.style.color = "red";
 
    flag = 1;
    setTimeout(function () {
        center.style.opacity = 0;
    }, 1000)
})

red.addEventListener("click", function () {
    if (flag == 0) {
        red.classList.remove("ri-heart-3-line");
        red.classList.add("ri-heart-3-fill");
        red.style.color = "red";
        flag = 1;
    }
    else {
        red.classList.add("ri-heart-3-line");
        red.classList.remove("ri-heart-3-fill");    
        red.style.color = "black";   
        flag = 0;
    }
}
)