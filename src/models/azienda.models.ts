import { impiegato } from "./impiegato.models";

export class azienda{
    nome:string;
    sedeleg:string;
    sedeoper:string;
    fondazione:number;
    lista: Array<impiegato>;
constructor(nome:string,sedeleg:string,sedeoper:string,fondazione:number,lista:Array<impiegato>){
this.nome=nome;
this.sedeleg=sedeleg;
this.sedeoper=sedeoper;
this.fondazione=fondazione;
this.lista=lista;
 }
infoaziende(){
    var ris=""
    for(var i=0; i<this.lista.length; i++){
        ris=ris+this.lista[i].infoimpiegati()+ " ";
    }
    return 'Nome: '+this.nome+' '+'Sede Legale : '+this.sedeleg+' '+'Sede operativa : '+this.sedeoper+' '+'Anno di fondazione : '+this.fondazione+' '+'Lista impiegati : '+ris;
}
}

