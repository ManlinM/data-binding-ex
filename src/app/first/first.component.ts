import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
/** One way data binding */
//create a property
msg = "Msg: This is printed using string interpolation.";
msg2 = "Msg2: This is value will be changed due to Event Binding";
msg3="Msg3: No contents";
addBorder = true;
//create a function to use on event
onGenerateMsg(event: Event){
  this.msg2 = (<HTMLInputElement>event.target).value;
}
}
