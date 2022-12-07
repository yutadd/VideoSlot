import Title_Scene from "./title_scene.js"
import Game_Scene from "./game_scene.js"

//変数
let board=[{}];
export function setBoard(_board){
board=_board;
}
export function getBoard(){
return board
}
export let Game = {};
export let Data = {};
//Game Size
Game.width = 800;
Game.height = 400;
export function setLoaded(arg){
	loaded=arg;
}
let loaded=false;

//Title_Scene

//Game Scene



//config
let config = {
	type: Phaser.AUTO,
	parent: 'canvas',
	width: Game.width,
	height: Game.height,
	pixelArt: false,
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