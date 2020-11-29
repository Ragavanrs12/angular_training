import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { DangerComponent } from './danger/danger.component';
import { InfoComponent } from './info/info.component';
import { WarningComponent } from './warning/warning.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    DangerComponent,
    InfoComponent,
    WarningComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
