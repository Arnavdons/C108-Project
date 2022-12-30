//https://teachablemachine.withgoogle.com/models/76tV5J7Yd/model.json

function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/76tV5J7Yd/model.json",modelready);
}

function modelready(){
classifier.classify(gotresults);
}

function gotresults(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
random_r=Math.floor(Math.random()*255)+1;
random_g=Math.floor(Math.random()*255)+1;
random_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_count").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_label").innerHTML="I can Hear - "+results[0].label;
document.getElementById("result_count").innerHTML="Accurecy - "+(results[0].confidence*100).toFixed(2)+"%";
img=document.getElementById("animal_image");
if(results[0].label=="Dog Bark"){
img.src="Dog_braking.gif";
}
else if(results[0].label=="Cat Meow"){
img.src="cat_meowing.gif";
}
else if(results[0].label=="Elephants trumpet"){
img.src="elephant-trunk.gif";
}
else if(results[0].label=="Loin Roar"){
img.src="lion-roar.gif";
}
else{
img.src="listen.gif";
}
}
}