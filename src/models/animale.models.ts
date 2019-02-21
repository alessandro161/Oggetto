export class animale{
                    razza:string;
                    zampe:number;
                    habitat:string;
                    alimentazione:string;
                    vita:number;
     constructor(razza:string,zampe:number,habitat:string,alimentazione:string,vita:number){
                this.razza=razza;
                this.zampe=zampe;
                this.habitat=habitat;
                this.alimentazione=alimentazione;
                this.vita=vita;}

    infoAnimale(){
                    return 'Razza : '+this.razza+' '+'Zampe : '+this.zampe+' '+'Habitat : '+this.habitat+' '+'Alimentazione : '+this.alimentazione+' '+'Vita media : '+this.vita;
                }
}

