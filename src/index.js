import Phaser from 'phaser';
import paperImg from './assets/paper.png';

const WIDTH = 800;
const HEIGHT = 600;

class Home extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('paper', paperImg)
    }
      
    create ()
    {
        const centerX = WIDTH/2;
        const centerY = HEIGHT/2;
        this.add.rectangle(centerX, centerY, WIDTH, HEIGHT, '0xefefef');
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
        Home
    ]
};

const game = new Phaser.Game(config);
