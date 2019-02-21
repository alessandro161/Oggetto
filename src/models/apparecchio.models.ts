export class apparecchio{
    marca:string;
    modello:string;
    costruzione:number;
    seriale:number;
    acquisto:number;
constructor(marca:string,modello:string,costruzione:number,seriale:number,acquisto:number){
this.marca=marca;
this.modello=modello;
this.costruzione=costruzione;
this.seriale=seriale;
this.acquisto=acquisto;
}

infoApparecchi(){
    return 'Marca: '+this.marca+' '+'Modello : '+this.modello+' '+'Costruzione : '+this.costruzione+' '+'Seriale : '+this.seriale+' '+'Acquisto : '+this.acquisto;
}
}

