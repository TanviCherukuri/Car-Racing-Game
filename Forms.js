class Forms {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    display() {
        this.title.html("Car Race");
        this.title.position(displayWidth/2+100,displayHeight/2-275);

        this.input.position(displayWidth/2+100,displayHeight/2-205);
        console.log("Name");

        this.button.position(displayWidth/2+100,displayHeight/2-175);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            count += 1;
            player.index = count;
            player.updateCount(count);
            player.updatePlayer();
            this.greeting.position(displayWidth/2+100,displayHeight/2);
            this.greeting.html("Hello " + this.input.value());
        })

        
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}
