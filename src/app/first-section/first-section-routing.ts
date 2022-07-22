import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WritingComponent } from "../writing/writing.component";
import { FirstSectionComponent } from "./first-section.component";
import { FormOfContactUsComponent } from "./form-of-contact-us/form-of-contact-us.component";

const routes: Routes = [
    {
        path: '', component: FirstSectionComponent,
        children: [
            { path: '', component: WritingComponent },
            { path: 'form', component: FormOfContactUsComponent }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class firstSectionRouting { }