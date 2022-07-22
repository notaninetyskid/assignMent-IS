import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit, OnDestroy {
  formIsvisible: boolean;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formIsvisible = false;
  }

  ContactUs() {
    this.router.navigate(['form'], { relativeTo: this.route },);
    this.formIsvisible = true;
  }

  ngOnDestroy() {
  }
}
