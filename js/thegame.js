var theGame = function(game){
}

theGame.prototype = {
  	create: function(){
            var menu = this.game.add.button(this.game.world.width * 0.9,this.game.world.height * 0.1,"menu",this.menu,this);
	    menu.anchor.setTo(0.5,0.5);
        
            this.load_records();
	},
        menu: function(){
            click.play();
            this.game.state.start("GameTitle");
        },

        load_records: function(){
            for(var i = 0 ;i<records.length;i++){
                var record = this.game.add.button(0,128 * i + 256,records[i] + "_img",this.play,this);
                record.song = song[i];
                record.anchor.setTo(0.5,0.5);
            }
        },

        play: function(record){
            record.song.play();
            tween = this.game.add.tween(record).to({ x: this.game.world.width * 0.5, y: this.game.world.height * 0.5 }, 1000);
            tween.start();
        }
}
