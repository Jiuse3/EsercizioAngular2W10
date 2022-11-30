import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';
import { get, updatePost } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {

  posts: Posts[] = [];

  constructor() {
    get().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  async ngOnInit() {
    const posts = await get()
      this.posts = posts;
      console.log(this.posts);
    
  }

  onInactivePost(id:number, i:number){
    updatePost({active:false},id)
    this.posts.splice(i,1)
  }
}
