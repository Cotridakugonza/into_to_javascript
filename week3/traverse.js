let parent = document.getElementById("produce")
console.log(parent.children)
console.log(parent.firstElementChild.textContent)
console.log(parent.lastElementChild.textContent)


let child = document.getElementById("text")
console.log(child.parentElement)

let secondSibling= document.getElementById("second")
console.log(secondSibling.previousElementSibling.textContent)
