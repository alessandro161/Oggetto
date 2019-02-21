export class giocatore{
    nome:string;
    cognome:string;
    ruolo:string;
    numero:number;
constructor(nome:string,cognome:string,ruolo:string,numero:number){
this.nome=nome;
this.cognome=cognome;
this.ruolo=ruolo;
this.numero=numero;}

infogiocatori(){
    return 'Nome : '+this.nome+' '+'Cognome : '+this.cognome+' '+'Ruolo : '+this.ruolo+' '+'Numero di maglia : '+this.numero;
}
}