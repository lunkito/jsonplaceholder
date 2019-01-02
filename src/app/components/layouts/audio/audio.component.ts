import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public volume = 1;
  public speed = 1;
  public muted = false;

  constructor() { }

  ngOnInit() {
  }

  handleVolume(event: MouseEvent) {
    if (event.movementX > 0 && this.volume < 1) {
      this.volume += 0.01;
    }
    if (event.movementX < 0  && this.volume > 0) {
      this.volume -= 0.01;
    }
  }

  handleSpeed(event: MouseEvent) {
    if (event.movementX > 0 && this.speed < 1.5) {
      this.speed += 0.01;
    }
    if (event.movementX < 0 && this.speed > 0) {
      this.speed -= 0.01;
    }
  }

  handleClickVolume(operator: string) {
    if (operator === '+' && this.volume < 1) {
      this.volume += 0.01;
    }
    if (operator === '-' && this.volume > 0) {
      this.volume -= 0.01;
    }
  }

  setAbsoluteVolume(event: MouseEvent) {
    this.volume = event.offsetX / 300;
  }

  setAbsoluteSpeed(event: MouseEvent) {
    this.speed = 0.5 + (event.offsetX / 300);
  }

  setVolumeAndSpeed(event: MouseEvent) {
    this.setAbsoluteSpeed(event);
    this.volume = 1 - (event.offsetY / 300);
  }
}
