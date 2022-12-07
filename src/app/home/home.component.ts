import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(){ }
headers = "Angular 14 Tutorial";

salary = 10 ;
isdisable = false;
colorname = "purple"
font ="50px"

classname = "headclass";
stylevalue ={"color":"grey","font-size":"60px"}

colour = ['red','blue','yellow','black']

  ngOnInit(): void{

  }
  Functionclick(name:string){
    alert(name)
  }
}
 