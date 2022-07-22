import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { WritingComponent } from './writing/writing.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpSectionComponent } from './help-section/help-section.component';
import { DefaultOneComponent } from './help-section/default-one/default-one.component';
import { DetailsOfQueryComponent } from './help-section/details-of-query/details-of-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WritingComponent,
    FooterComponent,
    HelpSectionComponent,
    DefaultOneComponent,
    DetailsOfQueryComponent
  ],
  imports: [         
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
