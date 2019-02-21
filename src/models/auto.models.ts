import { templateJitUrl } from "@angular/compiler";

export class auto{
    marca:string;
    modello:string;
    cavalli:number;
    porte:number;
    cilindrata:number;
    immatricolazione:number;
    telaio:number;
constructor(marca:string,modello:string,cavalli:number,porte:number,cilindrata:number,immatricolazione:number,telaio:number){
this.marca=marca;
this.modello=modello;
this.cavalli=cavalli;
this.porte=porte;
this.cilindrata=cilindrata;
this.immatricolazione=immatricolazione;
this.telaio=telaio; }


infoAuto(){
    return 'Marca: '+this.marca+' '+'Modello : '+this.modello+' '+'Cavalli : '+this.cavalli+' '+'Porte : '+this.porte+' '+'Cilindrata : '+this.cilindrata+' '+'Immatricolazione : '+this.immatricolazione+' '+'Telaio : '+this.telaio;
}
}
