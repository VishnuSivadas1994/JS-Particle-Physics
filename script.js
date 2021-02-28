const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];



class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 2;
        this.directionX = 1;
    }

    update(){
        
    }
}