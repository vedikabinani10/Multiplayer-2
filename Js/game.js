class Game{
    constructor(){

    }
    GetState(){
        var GameStateref = database.ref('GameState');
        GameStateref.on("value",(data)=>{
            GameState = data.val();
        })
    }
    Update(State){
        database.ref('/').update({
            GameState : State
        });
    }
    async Start(){
        if(GameState==0){
            player = new Player();
            var playercountref = await database.ref('PlayerCount').once("value");
            if(playercountref.exists()){
                PlayerCount = playercountref.val();
                player.getcount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200,30,30);
        car1.addImage("car1", car1img);
        car2 = createSprite(300,200,30,30);
        car2.addImage("car2", car2img);
        car3 = createSprite(500,200,30,30);
        car3.addImage("car3", car3img);
        car4 = createSprite(700,200,30,30);
        car4.addImage("car4", car4img);
        cars = [car1, car2, car3, car4];
    }

    Play(){
        form.hide();
        Player.getplayerinfo();
        if(allplayers != undefined){
            background("blue");
            image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5);

            var index = 0;
            var x = 100;
            var y;
            for(var i in allplayers){
                index = index + 1;
                x = x + 200;
                y = displayHeight - allplayers[i].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if(index == player.index){
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance = player.distance +10;
            player.update();
        }
        if(player.distance>4000){
            GameState=2;
        }
        drawSprites();
    }
    End(){
        console.log("gameover");
    }
}
