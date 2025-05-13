var tl =gsap.timeline()

tl.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("a",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})
tl.from("h5",{
    y:20,
    opacity:0,
    duration:0.7,
    scale:0.2,
    color:"red",
})
tl.from(".imgcont",{
    left:30,
    scale:80,
    opacity:0,
    duration:4,
    delay:0.5,
    x:700,

})
tl.from("p",{
    y:20,
    opacity:0,
    duration:0.7,
    scale:0.2,
    color:"red",
})
gsap.to(".box",{
    x: 1100,
    duration:5,
    delay:5,
    rotate:720,
    skew:100,
    opacity:0.5,
    borderRadius:("50%"),
    scale:2,
    translateY:180,

})
gsap.from(".box2",{
    x: 1200,
    duration:5,
    delay:5,
    rotate:720,
    skew:100,
    opacity:0.5,
    borderRadius:("50%"),
    yoyo:"true",
    scale:1,
    translateY:170,
    repeat: -1,
    yoyo: true

})
 var a = document.querySelector("p")
 a.addEventListener("mouseenter",function(){
  a.innerHTML="Hii I am Avinash bajpai &  This ceation by me"
  a.style.color="Black"
  a.style.scale="1"
 })

 a.addEventListener("mouseleave", function() {
    a.innerHTML = "Drone project can make by meSuggests aerial reconnaissance or exploration.Suggests an observation or surveillance mission"
    a.style.color="black"
  });
  
  var b = document.querySelector(".box2")
  b.addEventListener("mouseenter",function(){
    b.style.backgroundColor="yellow"
  })
  var b = document.querySelector(".box2")
  b.addEventListener("mouseleave",function(){
    b.style.backgroundColor="red"
  })
 var page =document.querySelector(".page2")
  var cursor =document.querySelector("#cursor")
  var one=document.querySelector(".one")
 page.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.2,
        ease:"back.out",
        
    })

    
 })
 one.addEventListener("mouseenter",function(){
    cursor.innerHTML="viewmore"
    gsap.to(cursor,{
        scale:1
    })

 })

 image.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1
    })

 })
 