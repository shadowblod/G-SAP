gsap.from(".box1",{
    y:1200,
    duration:10,
    delay:0.7,
    opacity:0,
    borderRadius:("50%"),
    zIndex:0
})
gsap.from(".png",{
    x:1000,
    delay:0.6,
    duration:2,
    opacity:2
})


gsap.from(".neon img",{
    duration: 2,
    stagger: 2,
    opacity:1

    
})

 

 const icon = document.querySelector('i');
 const image = document.getElementById('myimage');

 let toggle = false;

    icon.addEventListener('click', () => {
      if (toggle) {
        image.src = "Stark industries.jpeg";
      } else {
        image.src = "1326141.jpeg";
      }

      toggle = !toggle;
    });