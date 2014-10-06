var theGame = function(game){
}

theGame.prototype = {
  	create: function(){
            var click_me = this.game.add.button(this.game.world.width * 0.9,this.game.world.height * 0.1,"menu",this.menu,this);
	    click_me.anchor.setTo(0.5,0.5);
	},
        clickMe: function(){
            click.play();
            //tween = this.game.add.tween(player).to({ x: this.game.world.width + 500 }, 1000);
            //tween.start();           
        },
        menu: function(){
            click.play();
            this.game.state.start("GameTitle");
        },
}
