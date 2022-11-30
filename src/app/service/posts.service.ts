import { Posts } from '../models/posts.interface';

let posts: Posts[] = [];



export async function get(): Promise<Posts[]> {
  return await (await fetch('../../assets/db.json')).json();
}


export function updatePost(data:Partial<Posts>, id:number){
  posts= posts.map(post => post.id ==id? {...post,...data}:post)
  return posts.find(post=>post.id == id) as Posts
}
// fare updatepost()
