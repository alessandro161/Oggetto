import { Component, OnInit } from '@angular/core';
import { animale } from 'src/models/animale.models';
import { utente } from 'src/models/utenti.models';
import { auto } from 'src/models/auto.models';
import { apparecchio } from 'src/models/apparecchio.models';
import { impiegato } from 'src/models/impiegato.models';
import { azienda } from 'src/models/azienda.models';
import { giocatore } from 'src/models/giocatore.models';
import { squadra } from 'src/models/squadra.models';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
animali: Array<animale> = [
             new animale('leone',4,'savana','carnivoro',60),
             new animale('cane',4,'casalingo','carnivoro',15),
             new animale('zebra',4,'savana','erbivora',40)
          ]
utenti: Array<utente> = [
            new utente('Marco','Rossi','via Londra 16','Via Londra 16',2015,154),
            new utente('Antonio','Bianchi','via Parigi 14','Via Parigi 14',2007,134),
            new utente('Marco','Rossi','via Italia 32','Via Italia 32',2014,100)
         ]
autos: Array<auto> = [
          new auto('Audi','A6',180,5,2000,2015,148732454),
          new auto('BMW','X5',230,5,3200,2018,14355316),
          new auto('Volkswagen','Golf',120,3,1600,2019,141178524)
       ]
apparecchios: Array<apparecchio> = [
        new apparecchio('Sony','Bravia',2014,20234500,2015),
        new apparecchio('HP','pavilion',2009,2314200,2018),
        new apparecchio('Apple','Macbook',2017,16002019,2019)
     ]
impiegati: Array<impiegato> = [
      new impiegato('Marco','Rossi',1968,'via Londra 16','impiegato',2010,1240),
      new impiegato('Giacomo','Verdi',1988,'via Londra 16','impiegato',1998,1541),
      new impiegato('Mauro','Bianchi',1973,'via Londra 16','impiegato',1979,1087)    
   ]
aziende: Array<azienda> = [
    new azienda('Sony ','Via Vienna 142','via Londra 16',2010,this.impiegati),
    new azienda('Sony ','Via Tor Pagnotta 142','via Genova 6',2001,this.impiegati),
    new azienda('Sony ','Via 2 giugno 14','via Atene 15',1989,this.impiegati)
 ]
giocatori: Array<giocatore> = [
  new giocatore('Francesco','Totti','Attaccante',10,),
  new giocatore('Nicolo','Zaniolo','Centrocampista',22,),
  new giocatore('Kostas','Manolas','Difensore',44,)
]
squadre: Array<squadra> = [
  new squadra('Roma','Roma','Stadio Olimpico',5,1927,this.giocatori),
  new squadra('Inter','Milano','San Siro',3,1908,this.giocatori),
  new squadra('Spal','Ferrara','Stadio Paolo Mazza',16,1907,this.giocatori)
]


  constructor() { }

  ngOnInit() {
  }

}
