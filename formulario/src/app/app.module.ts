import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  ButtonModule,
  CheckboxModule,
  DropdownModule, FieldsetModule,
  InputMaskModule,
  InputTextModule, MessageService,
  RadioButtonModule, ToastModule
} from "primeng";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        HttpClientModule,
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
        ToastModule,
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
