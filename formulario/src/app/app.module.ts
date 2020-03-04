import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  ButtonModule,
  CheckboxModule,
  DropdownModule, FieldsetModule,
  InputMaskModule,
  InputTextModule,
  RadioButtonModule
} from "primeng";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    InputMaskModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
