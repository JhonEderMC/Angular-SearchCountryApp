import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  
  @Input() plHolder:string ='';
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDeBounce: EventEmitter<string> = new EventEmitter();

  deBounce:Subject<string> = new Subject();

  term:string='';
  constructor() { }

  ngOnInit(){
    this.deBounce
    .pipe( debounceTime(500)) //wait 400ms before to subscribe
    .subscribe(value=>{
      //console.log("onInit Debounce: ",value);
      this.onDeBounce.emit(value);
    })    
  }

  search(){
    this.onEnter.emit(this.term);
  }

  keyBoardInputEachKey(){
    this.deBounce.next(this.term);
  }

}
