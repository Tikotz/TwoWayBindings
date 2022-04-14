import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  car: any;
  

  constructor() { 
    this.car = {
      brand: '',
      model: '',
      img: ''
    }
  }

  ngOnInit(): void {
  }

}
