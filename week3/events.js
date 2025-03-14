let btn =document.getElementById("btn")
btn.onclick= function(){
    console.log("button clicked")
}

/*event handler vs event listener
*/

//event handler example
let btn =document.getElementById("btn")
btn.onclick= function(){
    console.log("button clicked")
}

//event listener example//
let btn = document.getElementById("btn")
btn.addEventListener(
    "click",function(){
       console.log("pick up your phone")
    }
)
function sayHello(){
    console.log("Hello!");
}
btn.addEventListener("click",sayHello)