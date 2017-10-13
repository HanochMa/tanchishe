function createFood(){
    voidRoom = new Array();
    n = parseInt(Math.random()*(192-length));
    //console.log(voidRoom)
    findVoidRoom();
    drawFood();
    numberOfFood++;
}  
function findVoidRoom(){
    for(var i = 1;i<=12;i++){
        for(var j = 1;j<=16;j++){
            var m = document.getElementById("room-" + i + "-"+j);
            if(m.className == "room"){
                voidRoom.push([i, j]);        
            }
        }  
    }
}
function drawFood(){
    var foodRoom = document.getElementById("room-" + voidRoom[n][0] +"-"+voidRoom[n][1]);
    foodRoom.className = FOOD;  
}