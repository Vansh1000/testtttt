x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = '';
speak_data = "";
two_number = 0;

function preload(){
  apple = loadImage("apple.png");
}


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak though hurry else it will not work.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 two_number = Number(content);
 if(Number.isInteger(two_number)){
document.getElementById("status").innerHTML = "Stared drawing apple 0.1 chance to work";
draw_apple = "set";

 }
 else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number (this mostly happens)";
 }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = creatCanvas(screen_width, screen_height - 150);
 canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= two_number; i++){
      x = Math.floor(Math.random () * 700);
      y = Math.floor(Math.random () * 400);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = two_number + "apple is drawn (worked?)";
    speak();
    }
  }


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
