const leftHandUp = document.querySelector(".up");
const leftHanddown = document.querySelector(".down");
const changeDance = document.querySelector(".change");
const leftHand = document.querySelector("#left-hand");
const rightHand = document.querySelector("#right-hand");
const head = document.querySelector("#head");
const hair = document.querySelector("#hair");
const body = document.querySelector("#body");
const song = document.querySelector(".song");
const songPlay = document.querySelector(".play");
const songPause = document.querySelector(".pause");

leftHandUp.addEventListener("click", function start(){
    leftHand.classList.add("left-hand");
    rightHand.classList.add("right-hand");
    head.classList.add("head");
    hair.classList.add("hair");
    body.classList.add("body");
})

leftHanddown.addEventListener(
    "click", function(){
        leftHand.classList.remove("left-hand");
        rightHand.classList.remove("right-hand");
        head.classList.remove("head");
        hair.classList.remove("hair");
        body.classList.remove("body");
        head.classList.remove("headmove")
        hair.classList.remove("hairmove")
        leftHand.classList.remove("handmove")
        body.classList.remove("bodymove")
        rightHand.classList.remove("handmoveR")
    }
)

songPlay.addEventListener("click", function(){
    leftHand.classList.add("left-hand");
    rightHand.classList.add("right-hand");
    head.classList.add("head");
    hair.classList.add("hair");
    body.classList.add("body");
    song.play();
})
songPause.addEventListener("click", function(){
    leftHand.classList.remove("left-hand");
    rightHand.classList.remove("right-hand");
    head.classList.remove("head");
    hair.classList.remove("hair");
    body.classList.remove("body");
    head.classList.remove("headmove")
    hair.classList.remove("hairmove")
    leftHand.classList.remove("handmove")
    body.classList.remove("bodymove")
    rightHand.classList.remove("handmoveR")
    song.pause();

})

changeDance.addEventListener("click", function start(){
    head.classList.add("headmove")
    hair.classList.add("hairmove")
    leftHand.classList.add("handmove")
    body.classList.add("bodymove")
    rightHand.classList.add("handmoveR")
})
