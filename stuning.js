function breakthetext(){
var h1=document.querySelector("h1")
var h2=document.querySelector("h2")

var h1txt= h1.textContent
var split=h1txt.split(""); 
var clutter=""

split.forEach(function(elem){

    clutter+= `<span>${elem}</span>`
})

h1.innerHTML= clutter
}
breakthetext()


gsap.from("h1 span",{
    y:70,
    duration:0.8,
    delay:0.8,
    stagger:-0.15,
    opacity:0
})

gsap.from("h2",{
    y:80,
    duration:0.6,
    delay:0.8,
    stagger:0.15,
    opacity:0
})


