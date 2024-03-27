// let smallImages =  document.getElementsByClassName("oldImg")

// for(let i=0; i< smallImages.length; i++){
//     smallImages[i].src="assets/spiderman_img.png"
//     console.log(`value of img no. ${i}is changed`)
// }
// //query selector

// console.dir(document.querySelector("h1"))
// console.dir(document.querySelector("#mainImg"))
// console.dir(document.querySelector(".oldImg"))
// console.dir(document.querySelector("div a"))
// console.dir(document.querySelectorAll("div a"))


// let links= document.querySelectorAll(".box a")
// for(let i=0; i<links.length; i++){
//     links[i].style.color="yellow"
// }

//practice question
// let para1= document.createElement("p")
// para1.innerText="hey i am red"
// let body= document.querySelector("body")
// body.appendChild(para1)
// para1.classList.add("red")

// let h3= document.createElement("h3")
// h3.innerText="i am blue h3!!!"
// let body= document.querySelector("body")
//  body.append(h3)
//  h3.className.add("blue")
/

let div= document.createElement("div")
let h1= docuemnt.createElement("h1")
let para= document.createElement("p")
h1.innerText="i am in a div"

para.innerText="mee too"
div.append(h1)
div.append(para)
div.classList.add("box")