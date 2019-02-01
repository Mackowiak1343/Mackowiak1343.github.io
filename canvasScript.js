var a;
var bY =290;
var tY =290;
var moveAmountY = 1;
var pic1 = new Image();
pic1.src = "img/dollarBill.jpg";
var mY = 0;

function drawBackground() //things that wont move in the animation
{
    var ctx =document.getElementById("hwCanvas").getContext("2d");
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0, window.innerWidth,window.innerHeight);
}
function initialize()
{
    var ctx =document.getElementById("hwCanvas").getContext("2d");
    drawBackground(); //establish background elements
    drawLines();
    ctx.drawImage(pic1,54,mY,100,100);
    ctx.drawImage(pic1,154,mY,100,100);
    ctx.drawImage(pic1,200,mY,100,100);
    ctx.drawImage(pic1,300,mY,100,100);
    ctx.drawImage(pic1,400,mY,100,100);
}
function drawShapesNew()
{
    a = requestAnimationFrame(drawShapesNew);
    drawBackground();
    move();
    jaw();
    drawLines();
}
function move()
{
    var ctx =document.getElementById("hwCanvas").getContext("2d");
    mY = mY + moveAmountY;
    ctx.drawImage(pic1,54,mY,100,100);
    ctx.drawImage(pic1,154,mY,100,100);
    ctx.drawImage(pic1,200,mY,100,100);
    ctx.drawImage(pic1,300,mY,100,100);
    ctx.drawImage(pic1,400,mY,100,100);

}

function drawLines()
{
    var ctx = document.getElementById("hwCanvas").getContext("2d");
    ctx.beginPath(); //
    ctx.arc(299,200,99.5,Math.PI,0);
    ctx.fillStyle ="#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(199,201);
    ctx.lineWidth=14;
    ctx.lineTo(399,201);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(199,215);
    ctx.lineWidth=30;
    ctx.lineTo(399,215);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200,230);
    ctx.lineWidth=15;
    ctx.lineTo(398,230);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(203,240);
    ctx.lineWidth=15;
    ctx.lineTo(395,240);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(210,250);
    ctx.lineWidth=20;
    ctx.lineTo(388,250);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(228,270);
    ctx.lineWidth=100;
    ctx.lineTo(370,270);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(255,260);
    ctx.lineWidth=12;
    ctx.lineTo(255,tY);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(285,260);
    ctx.lineWidth=12;
    ctx.lineTo(285,tY);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315,260);
    ctx.lineWidth=12;
    ctx.lineTo(315,tY);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(345,260);
    ctx.lineWidth=12;
    ctx.lineTo(345,tY);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.moveTo(255,bY);
    ctx.lineWidth=12;
    ctx.lineTo(255,320);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(285,bY);
    ctx.lineWidth=12;
    ctx.lineTo(285,320);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(315,bY);
    ctx.lineWidth=12;
    ctx.lineTo(315,320);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(345,bY);
    ctx.lineWidth=12;
    ctx.lineTo(345,320);
    ctx.strokeStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(250,180,20,40);


    ctx.fillStyle = "#ff0000";
    ctx.fillRect(320,180,20,40);

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineWidth=0;
    ctx.lineTo(0,0);
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}
function jaw ()
{

 }
