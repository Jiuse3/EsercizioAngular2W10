import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: Posts;
  @Input() bgColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
