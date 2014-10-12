var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
                crackle.play('',0,1,false);
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);

                this.record();
                this.main_title();

                var info = this.create_button(this.game.world.width * 0.5,this.game.world.height * .95,.5,"info","info");
                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
            
        },
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        },

        main_title: function(){
                title = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .2,"main_title");
                title.inputEnabled = true;
                title.events.onInputDown.add(function(){window.open("http://filmsbykris.com", "_blank");})
                title.anchor.setTo(0.5,0.5);
        },
        record: function(){
                title = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * 0.6,"click_me");
                title.inputEnabled = true;
                title.events.onInputDown.add(this.start,this);
                title.anchor.setTo(0.5,0.5);
        },

        start: function(){
                click.play();
                this.game.state.start("TheGame");
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
