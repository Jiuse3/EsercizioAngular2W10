import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';
import { get, updatePost } from 'src/app/service/posts.service';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss'],
})
export class ActiveComponent implements OnInit {
  posts: Posts[] = [];

  constructor() {}

  async ngOnInit() {
    const posts = await get()
      this.posts = posts;
      console.log(this.posts);
    
  }

  // onInactivePost(id:number, i:number){
  //   updatePost({active:false},id)
  //   this.posts.splice(i,1)
  // }
}

