//変数
let Game = {};
let Data = {};

//Game Size
Game.width = 800;
Game.height = 400;
let board;
let loaded=false;
let progress=0;
//Title_Scene
class Title_Scene extends Phaser.Scene {
	constructor() {
		super({
			key: 'Title_Scene'
		});
	}
	preload() {
		/*Image by <a href="https://www.freepik.com/free-psd/3d-girl-character-jumping-air_17888282.htm#page=2&query=3d%20people&position=5&from_view=keyword">Freepik</a>*/
        this.load.image("background","VideoSlot.png");
		this.load.image("pro_in","progress_in.png");
		this.load.image("pro_out","progress_out.png");
		fetch('/api/getBoard').then(t=>{
			t.json().then(j=>{
				board=j;
				console.log("loaded data successfully");
				loaded=true;
			});
		});
		
	}
//サーバから取得して結果もサーバでシュミレーションしとくだけでチート対策にはなる。
	create() {
		this.physics.world.setFPS(60);
		//Game Title
		//let title = this.add.text(Game.width / 2, Game.height / 3 * 1, 'GAME TITLE', {font: '40px Arial'}).setOrigin(0.5);

		/*start.on('pointerdown', function(pointer) {
			this.scene.start('Game_Scene');
		}, this);*/

	}
	update(){
		if(progress>1000){
			this.scene.start('Game_Scene');
		}
        let staticGroup = this.physics.add.staticGroup();
        let background = staticGroup.create(Game.width/2, Game.height/2, 'background');
        background.scaleX = background.scaleX /1.6;
        background.scaleY = background.scaleY /1.6;
		let pro_out=staticGroup.create(Game.width/2, Game.height/2+30,'pro_out');
		let pro_in=staticGroup.create(Game.width/2, Game.height/2+30,'pro_in');
		pro_in.scaleY=pro_in.scaleY*0.92;
		pro_in.scaleX=(pro_in.scaleX *(0.001*progress)-0.01);
		progress++;
	}

}

//Game Scene
class Game_Scene extends Phaser.Scene {
    
	constructor() {
		super({key: 'Game_Scene'});
	}

	preload() {

	}

	create() {

	}

	update() {

	}

}


//config
let config = {
	type: Phaser.AUTO,
	parent: 'canvas',
	width: Game.width,
	height: Game.height,
	pixelArt: true,
	scale: {
        	mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 300
			}
		}
	},
	scene: [Title_Scene, Game_Scene],
    render: {
        pixelArt: false
        }
};

let game = new Phaser.Game(config);