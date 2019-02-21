var anno= new Date;
export class impiegato{
    nome:string;
    cognome:string;
    nascita:number;
    domicilio:string;
    mansione:string;
    contratto:number;
    stipmens:number;
constructor(nome:string,cognome:string,nascita:number,domicilio:string,mansione:string,contratto:number,stipmens:number){
this.nome=nome;
this.cognome=cognome;
this.nascita=nascita;
this.domicilio=domicilio;
this.mansione=mansione;
this.contratto=contratto;
this.stipmens=stipmens; }

anzianita(){
    return anno.getFullYear() -this.contratto;   
}
stipann(){
    return this.stipmens*12;
}
infoimpiegati(){
    return 'Nome: '+this.nome+' '+'Cognome : '+this.cognome+' '+'Data di nascita : '+this.nascita+' '+'Domicilio : '+this.domicilio+
    ' '+'Mansione : '+this.mansione+' '+'Stipula del contratto : '+this.contratto+' '+'Anzianita : '+this.anzianita()+' anni '+
    ' '+'Stipendio lordo mensile : '+this.stipmens+' '+'Stipendio lordo annuale : '+this.stipann();
}
}
