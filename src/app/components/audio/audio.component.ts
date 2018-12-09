import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public volume = 100;
  public speed = 100;
  public muted = false;

  constructor() { }

  ngOnInit() {
  }

}
