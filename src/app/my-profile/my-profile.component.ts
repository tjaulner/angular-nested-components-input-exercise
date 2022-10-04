import { Component, Input, OnInit } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @Input() myPostsMidLevel;

  constructor() { }

  ngOnInit(): void {
  }

}
