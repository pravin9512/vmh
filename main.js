
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

cam=document.getElementById("cam");
Webcam.attach(cam)  

function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("photo").innerHTML="<img id='capture_img' src="+data_uri+"> ";
    });
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/train/image/model.json" ,model_loaded)

function model_loaded(){
    console.log("model loaded successfuly")
}
