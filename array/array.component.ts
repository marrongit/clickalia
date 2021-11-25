import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  array = [1,5,3,4,8];
  value:number;
  constructor() { }

  ngOnInit(): void {
    let x = 0
    this.array.forEach(e => {
      if(x != 0){
        if(e > x){
          this.value = e
          x = e
        }
      } else {
        x = e
      }
    });
  }



}
