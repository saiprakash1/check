import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=['Do projects','Eat','Exercise','Sleep'];
  newItem="";
  addItem=function(){
    this.items.push(this.newItem);
    this.newItem="";
  };

  removeItem=function(ind){
    this.items.splice(ind,1);
  };
}
