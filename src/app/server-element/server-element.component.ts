import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // when ecapsulation is set to None, the styles are not only applied to the component. but applied to the whole application.
  // when ecapsulation is set to Native, the styles are only applied to the component. but not to the whole application.
  // Native is use shadowdownloading to load the styles. but only when the browser supports it.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // adding the @Input() decorator to the name property will make it available to the parent component
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
