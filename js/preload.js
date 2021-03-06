var preload = function(game){}

preload.prototype = {
	preload: function(){ 
            load_text = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 256, 'Loading', { fill: '#ffffff' });
            load_text.anchor.setTo(.5,.5);

            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            
            var load_icon = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height * 0.5, 'load_ani');
            load_icon.scale.setTo(2,2);
            load_icon.anchor.setTo(.5,.5);
            load_icon.animations.add('load');
            load_icon.animations.play('load', 10, true);
            this.load.setPreloadSprite(load_icon);
            
            //load other preload stuff here
            //sounds
            var sounds = ["vinyl_crackle","click"]
            for(var i = 0; i < sounds.length;i++){
                this.game.load.audio(sounds[i], ['res/sounds/' + sounds[i] + '.wav','res/sounds/' + sounds[i] + '.ogg', 'res/sounds/' + sounds[i] + '.mp3']);
            }

            var images = ["menu","click_me","game_title","main_title","info"]
            for(var i = 0; i < images.length;i++){
       	        this.game.load.image(images[i],"res/" + images[i] + ".png");
            }

            records = ["little_star","doggie","bingo","jesus_loves_me","little_lite"];
            song = [];
            for(var i = 0; i < records.length;i++){
       	        this.game.load.image(records[i]+"_img","res/records/" + records[i] + "/record.png");
                this.game.load.audio(records[i]+"_music", ['res/records/' + records[i] + '/music.wav','res/records/' + records[i] + '/music.mp3','res/records/' + records[i] + '/music.ogg']);
                song.push(this.game.add.audio(records[i]+"_music"));
            }

	},
  	create: function(){
                this.game.stage.backgroundColor = '#DDDDDD';
                click = this.game.add.audio("click");
                crackle = this.game.add.audio("vinyl_crackle");
	},

        loadComplete: function(){
		this.game.state.start("GameTitle");
        },

        loadStart: function(){
            //console.log("Loading...");
            load_text.setText("Loading ...");

        },

        //  This callback is sent the following parameters:
        fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
            //console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
            load_text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        }

}
