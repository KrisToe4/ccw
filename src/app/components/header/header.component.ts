import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,
         Router }            from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Cowichan Computer Whisperer';
  subtitle = 'On-site support in the Cowichan Valley';

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onAboutClick() {
    this.router.navigate(['about']);
  }

  onClassesClick() {
    this.router.navigate(['classes']);
  }

  onContactClick() {
    this.router.navigate(['contact']);
  }

  onDevClick() {
    this.router.navigate(['dev']);
  }
  onSupportClick() {
    this.router.navigate(['support']);
  }

}
