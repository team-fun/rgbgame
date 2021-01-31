import Phaser from 'phaser';
import paperImg from './assets/paper.png';
import grassImg from './assets/grass_tileset/grass_tileset_16x16.png';
import homeTilemap from './assets/tilemaps/home.json';

const WIDTH = 800;
const HEIGHT = 600;

class HomeLand extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('paper', paperImg);
        this.load.image('tiles', grassImg);
        this.load.tilemapTiledJSON('map', homeTilemap);
    }
      
    create ()
    {
        const centerX = WIDTH/2;
        const centerY = HEIGHT/2;
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('grass', 'tiles');
        map.createBlankLayer('homeground', tileset, 0, 0, WIDTH, HEIGHT);
        this.add.image(centerX, centerY, 'paper');
    }

    update()
    {

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: WIDTH,
    height: HEIGHT,
    scene: [
        HomeLand
    ]
};

const game = new Phaser.Game(config);
