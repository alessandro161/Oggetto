import { giocatore } from "./giocatore.models";

export class squadra{
    nome:string;
    citta:string;
    stadio:string;
    classifica:number;
    fondazione:number;
    listagioc: Array<giocatore>;
constructor(nome:string,citta:string,stadio:string,classifica:number,fondazione:number,listagioc:Array<giocatore>){
this.nome=nome;
this.citta=citta;
this.stadio=stadio;
this.classifica=classifica;
this.fondazione=fondazione;
this.listagioc=listagioc;
 }
infosquadre(){
    var ris=""
    for(var i=0; i<this.listagioc.length; i++){
        ris=ris+this.listagioc[i].infogiocatori()+ " ";
    }

    return 'Nome: '+this.nome+' '+'Citta : '+this.citta+' '+'Stadio : '+this.stadio+' '+'Classifica : '+this.classifica+' '+'Fondazione : '+this.fondazione+' '+'Lista giocatori : '+ris;
}
}