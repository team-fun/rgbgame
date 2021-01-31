import Phaser from 'phaser';
import paperImg from './assets/paper.png';
import homeTiles from './assets/tilemaps/home.png';

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
        this.load.image('homeTiles', homeTiles);
    }
      
    create ()
    {
        const centerX = WIDTH/2;
        const centerY = HEIGHT/2;
        const map = this.make.tilemap({
            width: 20,
            height: 20,
            tileWidth: 16,
            tileHeight: 16
        });
        const tileset = map.addTilesetImage('homeTiles', null, 16, 16);

        const layer = map.createBlankLayer('homeground', tileset);
        layer.randomize(0, 0, map.width, map.height, [0,1,2]);
        layer.setDisplaySize(WIDTH, HEIGHT);

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
