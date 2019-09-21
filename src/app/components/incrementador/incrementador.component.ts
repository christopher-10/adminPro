import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress', null) txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progress: number = 0;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    console.log('leyenda ' + this.leyenda);
  }

  ngOnInit() {
    console.log('leyenda ' + this.leyenda);
  }

  onChanges( newValue:number){
   
    // let elemHTML:any = document.getElementsByName('progress')[0]; 

    if(this.progress > 100){
      this.progress = 100;
    } else if(this.progress < 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    };

    // elemHTML.value = Number( this.progress );
    this.txtProgress.nativeElement.value =  this.progress;
    this.cambioValor.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }


  changeProgress(value:number){

    this.progress += value;

    if(this.progress > 100){
      this.progress = 100;
    }

    if(this.progress < 0){
      this.progress = 0;
    }

    this.cambioValor.emit(this.progress);
  }

}
