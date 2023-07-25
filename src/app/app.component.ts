import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'teminal';
  // time: any = new Date().substring(6,4).toString(); 
 
  date: Date = new Date(); 
  hours: any =0
  minutes: any = 0;
  _time: any = "";

  day: any = this.date.getDay();
  month: any = "";
  year: any = "";
  _date: any = "";

  _sim1: boolean=true;
  _sim2: boolean=false;


  constructor() { }
currentTime(){
  this.hours = this.date.getHours() < 10? "0"+this.date.getHours() : this.date.getHours();
  this.minutes = this.date.getMinutes() < 10? "0"+this.date.getMinutes() :this.date.getMinutes();
  this._time = this.hours+":"+this.minutes;
  this.month = this.date.getMonth() < 10? "0"+this.date.getMonth() : this.date.getMonth();
  this.year = this.date.getFullYear() ;
  this.day = this.date.getDay()< 10? "0"+this.date.getDay() : this.date.getDay();
  this._date = this.day + "/" + this.month + "/" + this.year;
}
  ngOnInit() {
    this.currentTime(); 
    console.log(this._time+"\n"+this._date)   
  }

}
