var header = document.querySelector("h2")


function getRandomColor(){
var letters = "0123456789ABCDEF";
var color = "#";
for(var i = 0; i < 6; i++){
color += letters[Math.floor(Math.random()*16)];
}
return color
}


function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

 setInterval("changeHeaderColor()",500);


var headOne = document.querySelector("#two")

headOne.addEventListener("mouseover",function(){
headOne.textContent = "ha!! you came on me";
headOne.style.color = "red";
})
headOne.addEventListener("mouseout",function(){
headOne.textContent = "ha!! you came on me";
})
