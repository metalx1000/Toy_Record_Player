var theGame = function(game){
}

theGame.prototype = {
  	create: function(){

            var menu = this.create_button(this.game.world.width * 0.9,this.game.world.height * .1,1,"menu","GameTitle");
            var info = this.create_button(this.game.world.width * 0.9,this.game.world.height * .2,.5,"info","info");

            rec_scale = 0.7;       
            this.load_records();
	},
        update: function(){
            for(var i = 0 ;i<records.length;i++){
                if(rec[i].active == true){
                    rec[i].rotation += 0.01;
                }
            }
            
        },
        menu: function(callback){
            this.stop();
            click.play();
            this.game.state.start("GameTitle");
        },

        load_records: function(){
            rec = [];
            for(var i = 0 ;i<records.length;i++){
                var y = this.game.world.height / records.length; 
                rec.push(this.game.add.button(0, y * i + y,records[i] + "_img",this.play,this));
                rec[i].scale.setTo(rec_scale,rec_scale);
                rec[i].active = false;
                rec[i].song = song[i];
                rec[i].anchor.setTo(0.5,0.5);
                rec[i].dy = y * i + y;
            }
        },

        play: function(record){
            this.stop();
            record.active = true;
            record.song.play('',0,1,true);
            tweenp = this.game.add.tween(record).to({ x: this.game.world.width * 0.5, y: this.game.world.height * 0.5 }, 1000);
            tweens = this.game.add.tween(record.scale).to({ x: 1.5, y: 1.5 }, 1000);
            tweenp.start();
            tweens.start();
        },

        stop: function(){
            for(var i = 0 ;i<records.length;i++){
                rec[i].active = false;
                tweenp = this.game.add.tween(rec[i]).to({ x: 0, y: rec[i].dy }, 1000);
                tweens = this.game.add.tween(rec[i].scale).to({ x: rec_scale, y: rec_scale }, 1000);
                tweens.start();
                tweenp.start();
                song[i].stop();
            }
        },
        create_button: function(x,y,scale,img,state){
            var btn = this.game.add.button(x,y,img,this.change_state,this);
            btn.state = state;
            btn.scale.setTo(scale,scale);
            btn.anchor.setTo(0.5,0.5);
            btn.events.onInputOver.add(function(_this){
                var tween = _this.game.add.tween(_this.scale)
                    .to({ x: scale * 1.5, y: scale * 1.5 }, 200)
                    .to({ x: scale, y: scale }, 400)
                    .start();
            });
        },
        change_state: function(_this){
            click.play();
            this.game.state.start(_this.state);
        },

}
