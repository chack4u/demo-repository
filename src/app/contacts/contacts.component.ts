import { element } from 'protractor';
import { Component, OnInit,Input , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {
  @Input() contacts;



toggle(element) {
  element.stopPropagation();
  if(element.srcElement.classList.contains("open")){
    element.srcElement.classList.remove("open")
  }else{
    element.srcElement.classList.add("open")
  }
  
  return element;

}

}
