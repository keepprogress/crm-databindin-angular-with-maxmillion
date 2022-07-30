import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // when ecapsulation is set to None, the styles are not only applied to the component. but applied to the whole application.
  // when ecapsulation is set to Native, the styles are only applied to the component. but not to the whole application.
  // Native is use shadowdownloading to load the styles. but only when the browser supports it.
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild {
  // adding the @Input() decorator to the name property will make it available to the parent component
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  descendants: boolean;
  emitDistinctChangesOnly: boolean;
  first: boolean;
  isViewQuery: boolean;
  read: any;
  selector: any;

  constructor() {
    console.log('constructor called');
  }

  ngOnDestroy(): void {
        console.log('ngOnDestroy called');
    }

  ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked called');
    }

  ngAfterViewInit(): void {
        console.log('ngAfterViewInit called');
        console.log('Text Content: ' + this.header.nativeElement.textContent);
    }

  ngAfterContentInit(): void {
        console.log('ngAfterContentInit called');
    }

  ngDoCheck(): void {
        console.log('ngDoCheck called');
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

}
