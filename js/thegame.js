var theGame = function(game){
}

theGame.prototype = {
  	create: function(){
            var menu = this.game.add.button(this.game.world.width * 0.9,this.game.world.height * 0.1,"menu",this.menu,this);
	    menu.anchor.setTo(0.5,0.5);
        
            this.load_records();
	},
        menu: function(callback){
            this.stop();
            click.play();
            this.game.state.start("GameTitle");
        },

        load_records: function(){
            rec = [];
            for(var i = 0 ;i<records.length;i++){
                rec.push(this.game.add.button(0,128 * i + 256,records[i] + "_img",this.play,this));
                rec[i].song = song[i];
                rec[i].anchor.setTo(0.5,0.5);
            }
        },

        play: function(record){
            this.stop();
            record.song.play();
            tween = this.game.add.tween(record).to({ x: this.game.world.width * 0.5, y: this.game.world.height * 0.5 }, 1000);
            tween.start();
        },

        stop: function(){
            for(var i = 0 ;i<records.length;i++){
                tween = this.game.add.tween(rec[i]).to({ x: 0, y: 128 * i + 256 }, 1000);
                tween.start();
                song[i].stop();
            }
        }
}
