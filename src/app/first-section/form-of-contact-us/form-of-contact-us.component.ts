import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-of-contact-us',
  templateUrl: './form-of-contact-us.component.html',
  styleUrls: ['./form-of-contact-us.component.css']
})
export class FormOfContactUsComponent implements OnInit, OnDestroy {

  
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ContactUsForm: FormGroup;
  formIsDone: boolean = false

  ngOnInit() {
    this.ContactUsForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        contactNumber: new FormControl('', [Validators.required]),
        yourQuery: new FormControl('')
    })

  }
  onSubmit() {
    const f = this.ContactUsForm

    console.log(this.ContactUsForm);
    this.router.navigate(['../']);
    f.reset();
    this.formIsDone = true
    alert("Thanks we will get back to you as soon as possible");
  }
  ngOnDestroy() {
  }

}
