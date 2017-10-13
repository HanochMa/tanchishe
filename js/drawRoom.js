
    var MAP = document.getElementById("map");    
    var WIDTH = 800,
        HEIGHT = 600;
    MAP.style.width = WIDTH+"px", MAP.style.height = HEIGHT+"px";
    MAP.style.marginLeft = -(WIDTH/2)+"px", MAP.style.marginTop = -(HEIGHT/2)+"px";
    
    var mapWidth = map.style.width,
        mapHeight = map.style.height;
    
    var row = 600 / 50,
        column = 800 / 50;

    //FUNCTIONS
    function drawRooms(){
        for(var i=1; i<=row; i++){
            for(var j=1; j<=column; j++){
                var room =  document.createElement("div");
                room.className = "room";
                room.id = "room-"+i+"-"+j;
                MAP.appendChild(room);
            }
        }
    }

    drawRooms();
