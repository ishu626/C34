var ball;
var database,position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('Ball/Position');
    ballPosition.on("value",readPosition, ShowError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref('Ball/Position').set({
       'x':Position.x+x, 
       'y':Position.y+y
   })

}

function readPosition(data){
Position=data.val();
ball.x=Position.x;
ball.y=Position.y;
}

function ShowError(){
    console.log("Error in database");
}