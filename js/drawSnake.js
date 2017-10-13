var head = new Array();
var body = new Array();
var direction = 'd';
var SNAKEBODY = "body",
    SNAKEHEAD = "head",
    ROOM = "room";
    FOOD = "food";
var length = 5;
var voidRoom, n;
function beginDrawSnake(x, y){
    head = [x, y];
    if (direction=='w') {
        for(var i=0;i<length-1;i++){
            body[i] = [head[0]+1+i, head[1]];
        }
        var snakeHead = document.getElementById("room-" + head[0] +"-" + head[1]);
        //console.log(snakeHead); 
        snakeHead.className = SNAKEHEAD;
        for(var i=0;i<length-1;i++){
            var j=0;
            var snakeBody = document.getElementById("room-" + body[i][j] +"-" +body[i][j+1]);
            snakeBody.className = SNAKEBODY;
        }    
    } 
    else if(direction=='a'){
        for(var i=0;i<length-1;i++){
            body[i] = [head[0], head[1]+i+1];
        }
        var snakeHead = document.getElementById("room-" + head[0] +"-" + head[1]);
        //console.log(snakeHead); 
        snakeHead.className = SNAKEHEAD;
        for(var i=0;i<length-1;i++){
            var j=0;
            var snakeBody = document.getElementById("room-" + body[i][j] +"-" +body[i][j+1]);
            snakeBody.className = SNAKEBODY;
        }
    }
    else if(direction=='s'){
        for(var i=0;i<length-1;i++){
            body[i] = [head[0]-1-i, head[1]];
        }
        var snakeHead = document.getElementById("room-" + head[0] +"-" + head[1]);
        //console.log(snakeHead); 
        snakeHead.className = SNAKEHEAD;
        for(var i=0;i<length-1;i++){
            var j=0;
            var snakeBody = document.getElementById("room-" + body[i][j] +"-" +body[i][j+1]);
            snakeBody.className = SNAKEBODY;
        }
    }
    else if(direction=='d'){
        for(var i=0;i<length-1;i++){
            body[i] = [head[0], head[1]-1-i];
        }
        var snakeHead = document.getElementById("room-" + head[0] +"-" + head[1]);
        //console.log(snakeHead); 
        snakeHead.className = SNAKEHEAD;
        for(var i=0;i<length-1;i++){
            var j=0;
            var snakeBody = document.getElementById("room-" + body[i][j] +"-" +body[i][j+1]);
            snakeBody.className = SNAKEBODY;
        }
    }
}
function redrawSnake(){
    body = new Array();
    head = [6,6];
    body[0] = [6,5];
    body[1] = [6,4];
    body[2] = [6,3];
    body[3] = [6,2];
    length = 5;
    speed = 200;
    direction = 'd';
}

beginDrawSnake(6, 6);