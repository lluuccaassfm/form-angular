import { Injectable } from '@angular/core';
import {IForm} from "../models/form.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

type EntityResponseType = HttpResponse<IForm>;

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  create(form: IForm): Observable<EntityResponseType> {
    return this.http.post<IForm>("http://localhost:8080/", form, { observe: 'response' });
  }
}
