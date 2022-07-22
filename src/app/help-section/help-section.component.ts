import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { helpSectionService } from '../shared/helpSection.service';
import { queryModel } from '../shared/queryModel';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.component.html',
  styleUrls: ['./help-section.component.css']
})
export class HelpSectionComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private helpSecService: helpSectionService) { }
  HelpForm: FormGroup<any>;
  formIsNotReady: boolean = false;
  formIsReady: boolean = false;



  ngOnInit(): void {
    this.HelpForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactNumber: new FormControl(null, [Validators.required]),
      yourQuery: new FormControl('')
    })
  }

  onSubmit() {
    const formValues = this.HelpForm.value;
    const newQuery = new queryModel(formValues.fullName, formValues.email, formValues.contactNumber, formValues.yourQuery)

    
    if(this.HelpForm.invalid) {
      this.formIsNotReady = true;
      this.formIsReady = false
    }
    if(this.HelpForm.valid) {
      this.formIsNotReady = false;
      this.formIsReady = true
    }    
    if(this.formIsReady) {
      this.formIsNotReady = false;
      this.helpSecService.queryReciever(newQuery);
    } 
    if (this.formIsNotReady) {
      this.formIsReady = false;
    }
    

    console.log(this.HelpForm)

    this.HelpForm.reset();
  }

  ShowQueryDetails() {
    this.router.navigate(['detailsOfQuery'], { relativeTo: this.route })
  }
}
