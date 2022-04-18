import { HtmlParser } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { querySelector } from '@syncfusion/ej2-angular-maps';
// import { getTargetElement, querySelector, targetTouches } from '@syncfusion/ej2-angular-maps';
// import { setTimeout } from 'timers';
export interface Post{
  title:string
  text:string
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
posts: Post[]= [
  {title:'want to learn angular components', text: 'I do learn angular'}
  // {title: 'next block', text:"about directives", id:2}
]
updatePosts(post: Post){
  this.posts.unshift(post)
  console.log("Post", post)
}

removePost(id?: number){
  console.log('Id to remove', id)
}
}


// toggle:any ;
// now: Date= new Date()
// arr= [1,2,3,4,5,6,7]

// person = [
//   {title: 'Post 1', author: "Rafayel", comments:[
//   {name: "Rafayel", text:"hello Rafayel"},
//   {surname: " mayilyan", text: "your surname"},
// ]},
// {title: 'Post 1', author: "Rafayel", comments:[
//   {name: "Max", text:"hello Rafayel"},
//   {surname: " Jones", text: "your surname"},
// ]}
// ]
// blueP = ('#blueP')
  // backgroundToggle= false;
//  title: string = '';
// onInput(event:any){
// this.title= event.target.value
// }

