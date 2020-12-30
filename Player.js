class Player {
    constructor() {
       this.index = null;
       this.name = null;
       this.distance = 0;
    }
    Count() {
        var count1 = database.ref("playerCount");
        count1.on("value", function(number){
            count = number.val();
        } )
    
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    updatePlayer() {
        var name = "Players/player" + this.index;
        database.ref(name).set({
            Name: this.name,
            Distance: this.distance
        })
    }
    static AllPlayers() {
       var playerInfo = database.ref("Players");
       playerInfo.on("value", function(data){
            allPlayers = data.val();
       })
    }
}