import { Component } from '@angular/core';
import {FormModel, IForm} from "../models/form.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formulário';

  formulario: IForm = new FormModel();

}
