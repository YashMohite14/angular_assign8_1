import { Component,} from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  @Output() public MyEvent = new EventEmitter();

  public Value : any;
  public SendEvent(No : any)
  {
    console.log("Enterd amount is :" + No);
    this.MyEvent.emit(this.Value = No);
  }
  
}
