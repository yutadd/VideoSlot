import {Game,Data,getBoard} from "./game.js"
export default class Game_Scene extends Phaser.Scene {
    
	constructor() {
		super({key: 'Game_Scene'});
	}

	preload() {
		console.log("board:"+getBoard());
		this.load.image("digit7","digit.png");
	}

	create() {
		let staticGroup =this.physics.add.staticGroup();
		for(let i=3;0<i;i--){
			let l='';
			for(let a=0;a<5;a++){
				let background = staticGroup.create((120*a)+130, (100*i)+30, 'digit7');
				background.scaleX=background.scaleX*0.5;
				background.scaleY=background.scaleY*0.5;
				l=l+a;
			}
		}
	}
	update() {

	}

}