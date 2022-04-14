import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css']
})
export class DaughterComponent implements OnInit {

  constructor() { }

  @Input() item = {
    brand: '',
    model: '',
    img: ''
  };

  ngOnInit(): void {
  }

}
