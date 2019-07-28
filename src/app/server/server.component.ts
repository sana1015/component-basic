import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, DoCheck, OnDestroy {
  // @Input('') element : {type: string, name: string, content : string}
  //without alias
  @Input('serElement') element: { type: string, name: string, content: string }

  // use the element as an object because objects are the reference types, so we passed the object via input,
  // therefore both properties in the server element component,
  // this one here and the object in the array of server elements here in the app component, they both point to
  // the same place in memory
  // and therefore if we change the name there, it will update in the child component, in the server element
  // component but it will not trigger ngOnChanges because technically, the property we're binding to, we use
  // here with @input, that didn't change the value of that didn't change it,
  // it's still the same object in memory.
  // So it simply this difference between reference and primitive types

  @Input() name: string
  constructor() {
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChange)
  //So ngOnChanges runs first,
  //so let's say ngOnChanges here and this hook here actually receives an argument.
  //It's the only hook that does,
  {
    console.log('ngOnchange is called')
    console.log(changes)
  }
  //lifecycle hook
  ngOnInit() {
    console.log('ngOnInit is called')
  }

  // This will give us a method which is executed on every change detection run.
  ngDoCheck() {
    console.log('docheck called')
  }
  ngOnDestroy() {
    console.log('destroy checked')
  }
}

