export interface ITipoRedeSocialModel {
  id ?: number;
  redeSocial ?: string;
}

export interface IContato {
  id ?: number;
  contato ?: string;
}

export interface IForm {
  nome?: string;
  telefone?: string;
  comoConheceu?: IContato
  redeSocial?: boolean;
  tiposRedeSocial?: ITipoRedeSocialModel
}

export class FormModel implements IForm{
  constructor(
    public nome?: string,
    public telefone?: string,
    public comoConheceu?: IContato,
    public redeSocial?: boolean,
    public tiposRedeSocial?: ITipoRedeSocialModel
  ) {}
}
