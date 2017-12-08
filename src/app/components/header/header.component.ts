import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Cowichan Computer Whisperer';
  subtitle = 'On-site support in the Cowichan Valley';
  constructor() { }

  ngOnInit() {
  }

}
