import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _text = 'Texto inicial del span';
  private frases = [
    'Texto random 1',
    'Texto random 2',
    'Texto random 3',
    'Texto random 4',
    'Texto random 5',
  ];

  ngOnInit() {
    this.setRandomTextEvery(1000);
  }

  /**
   * Sets an interval to change the value of _time
   * @param time ms
   */
  private setRandomTextEvery(time: number) {
    setInterval(this.setRandomText.bind(this), time);
  }

  private setRandomText() {
    const index = Math.floor(Math.random() * 5);
    return this._text = this.frases[index];
  }

  get text() {
    return this._text;
  }
}
