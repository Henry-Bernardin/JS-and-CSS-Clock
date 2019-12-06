const secondHand = document.querySelector('.second-hand'); 
const minHand = document.querySelector('.min-hand');


function setDate() {
 const now = new Date(); 
 const seconds = now.getSeconds(); 
 const minutes = now.getMinutes();
 const secondDegrees = ((seconds / 60) * 360) + 90; 
 const minuteDegrees = ((minutes/60) * 360) + 90;
 secondHand.style.transform = `rotate(${secondDegrees}deg)`; 
 minHand.style.transform = `rotate(${minuteDegrees}deg)`; 

}

setInterval(setDate, 1000); 