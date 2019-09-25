/**
 * Skal have følgende felter
 * - turStartetTidspunkt: et dato objekt for hvornår turen er startet. 
 *   Hvis turen ikke er startet, er den undefined
 * - afstand: hvor langt taxaen har kørt i KM. Denne værdi sendes til scriptet
 *   udefra (i dette tilfælde fra funktionen start(Taxameter), som ligger i 
 *   library-mappen, og som er det script, der styrer applikationen).
 * 
 * Skal have følgende metoder/funktioner, som alle kaldes fra start.js
 * - startTur(): sætter turStartetTidspunkt til nuværende tidspunkt
 * - slutTur(): skal nulstille taxameteret 
 *   ved at  sætte turStartetTidspunkt til undefined og afstand til 0
 * - koer(delta_afst): skal tælle afstand op med det ekstra antal km, som
 *   bilen har kørt siden sidste beregning. 
 * - beregnPris(): skal returnere prisen beregnet udfra taxaselskabets prissætning
 */
class Taxameter {

    constructor() {
//De forskellige priser det koster.
        this.timePris=kttimePris;
        this.kmPris=ktkmPris;
        this.startPris=ktstartPris;
//Variablen afstand bruges til beregning af km.
        this.afstand=0;
//Til at vise priserne.
        this.turSluttetTidspunkt=undefined;
  
    }

    startTur() {
        this.turStartetTidspunkt = new Date();
        this.turSluttetTidspunkt = new Date();
    }

    slutTur() {
        this.turStartetTidspunkt = undefined;
        this.turSluttetTidspunkt = undefined;
        this.afstand=0;
    }

    
    koer(delta_afst) {
    this.afstand+=delta_afst;

}

    beregnPris() {

this.turSluttetTidspunkt = new Date();
this.pris1 = this.turSluttetTidspunkt-this.turStartetTidspunkt;
this.pris1 = parseInt(this.pris1/1000);
this.pris1*=this.timePris/60;
this.pris2=this.afstand*this.kmPris;
this.pris=this.pris1+Math.round(this.pris2*100)/100;
this.pris+=this.startPris;
        return this.pris;
    }
}