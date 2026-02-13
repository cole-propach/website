import { messages } from "./messages.js";
import { images } from "./images.js";

let messageNumber = getRandomInt(0, messages.length-1);
let imageNumber = getRandomInt(0, images.length-1);
document.getElementById("message").textContent = messages[messageNumber];
document.getElementById("display").src = "colepropach.com/pookie/images/"+images[imageNumber];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newRandomMessage(){
    let oldNumber = messageNumber;
    while(messageNumber == oldNumber){
        messageNumber = getRandomInt(0, messages.length-1);
    }
    document.getElementById("message").textContent = messages[messageNumber];
}

function newRandomImage(){
  let oldNumber = imageNumber;
    while(imageNumber == oldNumber){
        imageNumber = getRandomInt(0, images.length-1);
    }
    document.getElementById("display").src = "colepropach.com/pookie/images/"+images[imageNumber];
}

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", () => {
  newRandomMessage();
  newRandomImage();
});