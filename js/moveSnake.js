var numberOfFood = 0;
var speed = 200;
function toMoveSnake(){
    if(direction == 'd'){
        if(head[1]+1>16){
            gameOver();
        }
        else{
        var div = document.getElementById("room-"+(head[0])+"-"+(head[1]+1));
        if(head[0] == voidRoom[n][0]&&head[1]+1 == voidRoom[n][1]){
            body[length-1] = [];
            for(var i=length-1; i>0;i--){
                for(var j=0; j<=1;j++){
                    body[i][j] = body[i-1][j];
                }
            }
            length = length+1;
            body[0][0] = head[0];
            body[0][1] = head[1];
            head = voidRoom[n];
            numberOfFood--;
            //console.log(head, body)
        } 
        else if (div.className == "room"){
            //console.log("the next room is void!")
            for(var i=length-2; i>0;i--){
                for(var j=0; j<=1;j++){
                    body[i][j] = body[i-1][j];
                }
            }
            body[0][0] = head[0];
            body[0][1] = head[1];
            head[1] = head[1]+1;
        }
        else {                         
            gameOver();
        }
    }
}
    else if(direction == 'a'){
       if(head[1]-1<1){
           gameOver();
       }
       else{
        var div = document.getElementById("room-"+(head[0])+"-"+(head[1]-1));
        //console.log(div.id,div.className)
        if(head[0] == voidRoom[n][0]&&head[1]-1 == voidRoom[n][1]){
            //console.log("There is food, snake is going to eat it."); 
            body[length-1] = [];
            for(var i=length-1; i>0;i--){
                for(var j=0; j<=1;j++){
                    body[i][j] = body[i-1][j];
                }
            }
            length = length+1;
            body[0][0] = head[0];
            body[0][1] = head[1];
            head = voidRoom[n];
            numberOfFood--;
            //console.log(head, body)
        } 
        else if (div.className == "room"){
            console.log("the next room is void!")
            for(var i=length-2; i>0;i--){
                for(var j=0; j<=1;j++){
                    body[i][j] = body[i-1][j];
                }
            }
            body[0][0] = head[0];
            body[0][1] = head[1];
            head[1] = head[1]-1;
        }
        else {                         
            gameOver();
        }
    }
}
    else if(direction == 'w'){
        if(head[0]-1<1){
            gameOver();

        }
        else{
            var div = document.getElementById("room-"+(head[0]-1)+"-"+head[1]);
            //console.log(div.id,div.className)
            if(head[0]-1 == voidRoom[n][0]&&head[1] == voidRoom[n][1]){
                //console.log("There is food, snake is going to eat it."); 
                body[length-1] = [];
                for(var i=length-1; i>0;i--){
                    for(var j=0; j<=1;j++){
                        body[i][j] = body[i-1][j];
                    }
                }
                length = length+1;
                body[0][0] = head[0];
                body[0][1] = head[1];
                head = voidRoom[n];
                numberOfFood--;
                //console.log(head, body)
            } 
            else if (div.className == "room"){
                //console.log("the next room is void!")
                for(var i=length-2; i>0;i--){
                    for(var j=0; j<=1;j++){
                        body[i][j] = body[i-1][j];
                    }
                }
                body[0][0] = head[0];
                body[0][1] = head[1];
                head[0] = head[0]-1;
            }
            else {                         
                gameOver();
            }
        }
    }
    
    else if(direction == 's'){
        if(head[0]+1>12){
            gameOver();
        }
        else{
        var div = document.getElementById("room-"+(head[0]+1)+"-"+head[1]);
        //console.log(div.id,div.className)
        if(head[0]+1 == voidRoom[n][0]&&head[1] == voidRoom[n][1]){
            //console.log("There is food, snake is going to eat it."); 
            body[length-1] = [];
            for(var i=length-1; i>0;i--){
                for(var j=0; j<=1;j++){
                    body[i][j] = body[i-1][j];
                }
            }
            length = length+1;
            body[0][0] = head[0];
            body[0][1] = head[1];
            head = voidRoom[n];
            numberOfFood--;
            //console.log(head, body)
        } 
        else if (div.className == "room"){
            //console.log("the next room is void!")
            for(var i=length-2; i>0;i--){
                for(var j=0; j<=1;j++){
                    body[i][j] = body[i-1][j];
                }
            }
            body[0][0] = head[0];
            body[0][1] = head[1];
            head[0] = head[0]+1;
        }
        else {                         
            gameOver();
        }
        }
    }
}

function clearRoom(){
    for(var i=1;i<=12;i++){
        for(var j=1;j<=16;j++){
        document.getElementById("room-"+i+"-"+j).className = "room";
        }
    }
}

function drawSnake(){
    var snakeHead = document.getElementById("room-" + head[0] +"-" + head[1]);
    snakeHead.className = SNAKEHEAD;
    for(var i=0;i<length-1;i++){
        var snakeBody = document.getElementById("room-" + body[i][0] +"-" +body[i][1]);
        snakeBody.className = SNAKEBODY;
    }
}

function gameOver(){
    alert("Game over!");
    clearRoom();
    redrawSnake();
    beginDrawSnake(6, 6);
}
function moveSnake(){
    toMoveSnake();
    clearRoom();
    drawFood();
    drawSnake(); 
    if(numberOfFood == 0) {
        createFood();
        speed = speed-10;
        clearInterval(loop);
        loop = setInterval(moveSnake,speed);
    }
    
}
createFood();
var loop = setInterval(moveSnake,speed);
// 实现WASD操作

    $(document).keypress(function(event){
        let keycode = event.keyCode;
            if(keycode == '97'){
                direction = 'a';

               
            }
            else if(keycode == '119'){
               direction = 'w'; 
               
            }
            else if(keycode == '100'){
                direction = 'd';
              
            }
            else if(keycode == '115'){
                direction = 's';
             
            }
        }
    );


//setInterval(moveSnake,1000);