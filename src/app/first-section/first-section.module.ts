import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { firstSectionRouting } from "./first-section-routing";
import { FirstSectionComponent } from "./first-section.component";
import { FormOfContactUsComponent } from './form-of-contact-us/form-of-contact-us.component';

@NgModule({
    declarations: [
        FirstSectionComponent,
        FormOfContactUsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,    
        firstSectionRouting,
    ],
})
export class firstSectionModule { }