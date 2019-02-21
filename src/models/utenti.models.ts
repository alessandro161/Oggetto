export class utente{
    nome:string;
    cognome:string;
    residenza:string;
    domicilio:string;
    contratto:number;
    bolletta:number;
constructor(nome:string,cognome:string,residenza:string,domicilio:string,contratto:number,bolletta:number){
this.nome=nome;
this.cognome=cognome;
this.residenza=residenza;
this.domicilio=domicilio;
this.contratto=contratto;
this.bolletta=bolletta;}

telefono(){
    return 'Telefono : '+3332546842;
}

infoUtente(){
    return 'Nome : '+this.nome+' '+'Cognome : '+this.cognome+' '+'Residenza : '+this.residenza+' '+'Domicilio : '+this.domicilio+' '+this.telefono()+' '+'Contratto : '+this.contratto+' '+'Ultima Bolletta : '+this.bolletta+' ';
}

}

