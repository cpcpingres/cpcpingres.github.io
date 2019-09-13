var canvas = document.getElementById('myCanvas'); //캔버스를 불러와줌
var context = canvas.getContext('2d');

var img = new Image(); //이미지를 불러와줌
img.src = "enzo mari pear.jpg";

var posX;
var posY;

var x = 0;
var y = 0;

var drag = false;

function run(){

    context.drawImage(img,x,y); // 캔버스에 x좌표, y좌표에 이미지를 그려줌

}

img.addEventListener('load', run); // 이미지가 로드되면 run 함수 실행

window.addEventListener('mousedown', function(event){
    drag = true; // 마우스가 눌러지면 drag 값을 true로 바꿈
    run(); // 함수 실행
});

window.addEventListener('mouseup', function(event){ 
    drag = false; // 마우스 클릭 상태에서 떼지면 drag 값을 false로 바꿈
    run(); // 함수 실행
});

window.addEventListener('mousemove', function(event){ // 
   
    // 마우스가 움직이면 아래 내용의 함수 실행
    
    posX = event.clientX - 70; // 브라우저 페이지에서의 x좌표
    posY = event.clientY - 70; // 브라우저 페이지에서의 y좌표
    
    if(drag) { 
        context.clearRect(0,0,2000,2000); 
        x = posX; // x값을 마우스의 x좌표로 바꿔줌
        y = posY; // y값을 마우스의 y좌표로 바꿔줌
    }

    run(); // 함수 실행
});


