import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import * as moment from 'moment';

const LOCAL = 'es-UY'
const MONEDA = 'uyu';
const MASCARA_FECHA_VACIA = "__/__/____"
export class Util{
    static formatPeso(valor:number): string{
        return valor.toLocaleString(LOCAL, { style: 'currency', currency: MONEDA });
    }

    static addZero(numero: number): string {
        let numeroEnStringConZerosALaIzquierda = "" + numero;
        if (numero < 10) {
            numeroEnStringConZerosALaIzquierda = "0" + numero;
        }
        return numeroEnStringConZerosALaIzquierda;
    }

    static formatFecha(fecha:Date){
        if (!fecha){
            return MASCARA_FECHA_VACIA;
        }
        var fechaNueva = new Date(fecha);
   
        let fechaESP = this.addZero(fechaNueva.getUTCDate())+ "/" + this.addZero(fechaNueva.getUTCMonth()+1) + "/" + fechaNueva.getUTCFullYear() ;
        return fechaESP;
    

        
    }
    static fechaValidaAFuturo(fecha){        
        var valida = false;
        var fechaAComparar = new Date(fecha);
        var hoy = new Date();
        var fechaDeHoyNumerica = hoy.getUTCFullYear() +""+ this.addZero(hoy.getUTCMonth()+1) + "" + this.addZero(hoy.getUTCDate());          
        var fechaACompararNumerica = fechaAComparar.getUTCFullYear()+ "" + this.addZero(fechaAComparar.getUTCMonth()+1) + "" + this.addZero(fechaAComparar.getUTCDate());        
        valida = Number(fechaDeHoyNumerica) <= Number(fechaACompararNumerica);
        return valida;
    }


    static fechaMoyQue(fechaA, fechaB){        
        var valida = false;
        var fechaDesde = new Date(fechaA);
        var fechaHasta = new Date(fechaB);
        var fechaHastaNumerica = fechaHasta.getUTCFullYear() +""+ this.addZero(fechaHasta.getUTCMonth()+1) + "" + this.addZero(fechaHasta.getUTCDate());          
        var fechaDesdeNumerica = fechaDesde.getUTCFullYear()+ "" + this.addZero(fechaDesde.getUTCMonth()+1) + "" + this.addZero(fechaDesde.getUTCDate());        
        valida = Number(fechaDesdeNumerica) < Number(fechaHastaNumerica);
        return valida;
    }


    

    
}