import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post: Post
  @Output() OnRemove = new EventEmitter<number>()
  @ContentChild('info',{static:true} )  infoRef:ElementRef

  removePost(){
 this.OnRemove.emit(this.post.id)
  }

ngOnChanges(changes: SimpleChanges):void {
    console.log('ngOnchanges', changes)

}

  ngOnInit(): void {
    console.log("ngOnint")
    // console.log(this.infoRef.nativeElement)
  }

  ngAfterContentInit() {
    console.log("afterContentInit")
  }

  ngDoCheck() {
    console.log('ngDocheck')
  }

  ngAfterContentChecked() {
    console.log('afterContetnChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
