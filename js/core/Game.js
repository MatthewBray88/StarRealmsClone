import { GAME_WIDTH, GAME_HEIGHT, ASPECT_RATIO, CANVAS_MARGIN } from "./constants.js";
import { RenderSystem } from "../systems/RenderSystem.js";

export class Game {
  constructor(){
    this.canvas = document.getElementById('gameCanvas');
    this.renderSystem = new RenderSystem(this.canvas);
    this.init();
  }

  init(){
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    requestAnimationFrame(() => this.gameLoop());
  }

  resizeCanvas(){
    let width, height;
    const availableWidth = window.innerWidth - (CANVAS_MARGIN * 2);
    const availableHeight = window.innerHeight - (CANVAS_MARGIN * 2);

    if(availableWidth/availableHeight > ASPECT_RATIO){
      height = availableHeight;
      width = height * ASPECT_RATIO;
    } else {
      width = availableWidth;
      height = width/ASPECT_RATIO;
    }

    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;
    
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.canvas.style.margin = `${CANVAS_MARGIN}`
  }

  gameLoop(){
    this.renderSystem.render();
    requestAnimationFrame(() => this.gameLoop());
  }
}