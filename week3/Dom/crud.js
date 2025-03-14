let btn =document.getElementById("btn")
btn.onclick= function(){
    console.log("button clicked")
}

//a function to create an element in DOM

function create(){
    const paragraph = document.createElement("p")
    paragraph.innerHTML="button Clicked"
    document.body.appendChild(paragraph)
    // console.log("button clicked")

}

//a function to read and element in DOM
function read(){
    const readQn =document.getElementById("read-qn")
    console.log("File read")
}

//a function to update an element in DOM
function Upadate(){
    const upDate =document.getElementById("update-qn")
   
}

//a function to delete an element in DOM
function remove(){
    const upDate =document.getElementById("delete-qn")
}
