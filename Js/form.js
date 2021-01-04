class Form{
    constructor(){
        this.title = createElement('h1');
        this.title.html("Multiplayer");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')
    }
    display(){
        this.title.position(200,200);
        this.input.position(600,500);
        this.button.position(600,700);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount = PlayerCount+1;
            player.index = PlayerCount;
            player.update();
            player.updatecount(PlayerCount);
            this.greeting.html("Hello! "+ player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
        })
    }
}