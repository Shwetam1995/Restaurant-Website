import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];
  constructor(private blogservice: BlogService) { }

  ngOnInit() {
    this.loadBlog();
  }
  loadBlog() {
    this.blogservice.postData().subscribe(posts => {
      this.posts = posts;
    });
  }
}
