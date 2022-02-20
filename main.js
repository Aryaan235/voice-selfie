var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
 function start(){
document.getElementById("inp").innerHTML="";

recognition.start();  
 } 
recognition.onresult = function(event){
console.log(event);
var content=event.results[0] [0].transcript;
document.getElementById("inp").innerHTML=content;
console.log(content);
speak();  
}
function speak(){
var synth=window.speechSynthesis;
speak_data=document.getElementById("inp").innerHTML;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);    
}
camera=document.getElementById("webcam");
Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:90    
});