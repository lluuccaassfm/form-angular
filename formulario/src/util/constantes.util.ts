import {IContato, ITipoRedeSocialModel} from "../models/form.model";

export class ConstantesUtil {

  constructor() {}

  public static LISTA_CONTATO: IContato[] = [
    {id: 1, contato: "Tv"},
    {id: 2, contato: "Internet"},
    {id: 3, contato: "Outros"},
    ];

  public static LISTA_REDE_SOCIAL: ITipoRedeSocialModel[] = [
    {id: 1, redeSocial: "Fabebook"},
    {id: 2, redeSocial: "LinkedIn"},
    {id: 3, redeSocial: "Instagram"}
  ]

}
