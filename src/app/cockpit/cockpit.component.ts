import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string , serverContent: string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName: string , serverContent: string}>();
  @ViewChild('serverContent') serverContent: ElementRef
  newServerName = '';
  newServerContent ='';

  constructor() { }

  ngOnInit() {
  }
//   onAddServer() {
//  this.serverCreated.emit({
//    serverName : this.newServerName,
//    serverContent : this.newServerContent
//  })
//   }
// Instead of two-way binding, we can easily fetch a value of any input through local references in Angular. 
// Local references can be fetched directly from the component template and into the component typescript class. 
onAddServer(nameInput : HTMLInputElement) {
  this.serverCreated.emit({
    serverName : nameInput.value,
    serverContent : this.serverContent.nativeElement.value
  })
   }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent
    })
  }
}
