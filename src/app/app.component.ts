import {Component, OnInit} from '@angular/core';
import {FormModel, IContato, IForm, ITipoRedeSocialModel} from "./models/form.model";
import {ConstantesUtil} from "./util/constantes.util";
import {MessageService} from "primeng";
import {FormularioService} from "./service/formulario.service";

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

  constructor(
    private messageService: MessageService,
    private formularioService: FormularioService
  ) {}

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

  validarEnvio(){
    if(this.formulario.nome == undefined){
      this.messageService.add({severity:'info', summary:'Nome obrigatório'});
    }else if(this.sobrenome == undefined){
      this.messageService.add({severity:'info', summary:'Sobrenome obrigatório'})
    }else{
      this.enviar();
    }
  }

  enviar(){
    this.formulario.nome = this.formulario.nome + " "+this.sobrenome;
    this.formularioService.create(this.formulario).subscribe(response =>{
        this.formulario = new FormModel();
        this.sobrenome = undefined;
        this.possuiredeSocial = undefined;
        this.disableEnviar = true;
      });
  }
}
