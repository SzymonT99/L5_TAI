import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() text: string = '';
  @Input() title: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
