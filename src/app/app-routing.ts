import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FirstSectionComponent } from "./first-section/first-section.component";
import { DefaultOneComponent } from "./help-section/default-one/default-one.component";
import { DetailsOfQueryComponent } from "./help-section/details-of-query/details-of-query.component";
import { HelpSectionComponent } from "./help-section/help-section.component";

const appRoute: Routes = [
    { path: '', redirectTo: '/firstSection', pathMatch: "full" },
    //lazy loaded
    { path: 'firstSection', loadChildren: () => import('./first-section/first-section.module').then(m => m.firstSectionModule) },
    //the usual way
    { path: 'Help', component: HelpSectionComponent, children: [
        { path: '', component: DefaultOneComponent},
        { path: 'detailsOfQuery', component: DetailsOfQueryComponent }
    ] }
] 

@NgModule({
imports: [
    RouterModule.forRoot(appRoute, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}