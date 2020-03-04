import {Component, OnInit} from '@angular/core';
import {FormModel, IContato, IForm, ITipoRedeSocialModel} from "../models/form.model";
import {ConstantesUtil} from "../util/constantes.util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Formulário';
  formulario: IForm = new FormModel();
  listaContatos: IContato[];
  listaRedeSocial: ITipoRedeSocialModel[];
  possuiredeSocial: string;
  sobrenome: string;
  disableEnviar: boolean;

  ngOnInit(){
    this.listaContatos = ConstantesUtil.LISTA_CONTATO;
    this.listaRedeSocial = ConstantesUtil.LISTA_REDE_SOCIAL;
  }

  setRedeSoccial(value: boolean){
    this.formulario.redeSocial = value;
    if(value == false){
      this.formulario.tiposRedeSocial = undefined;
    }
  }

  enviar(){
    this.formulario.nome = this.formulario.nome + " "+this.sobrenome;
    this.formulario = new FormModel();
    this.sobrenome = undefined;
    this.possuiredeSocial = undefined;
    this.disableEnviar = true;
  }

  exibeLista(){
    console.log(this.formulario);
  }

}
