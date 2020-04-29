import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testinput',
  templateUrl: './testinput.component.html',
  styleUrls: ['./testinput.component.styl']
})
export class TestinputComponent implements OnInit {

  @Input()
  public testInput: string;

  @Input()
  public content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
