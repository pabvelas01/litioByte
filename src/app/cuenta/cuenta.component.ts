import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  public inputTotalCuenta:string="";
  public inputTotalPersonas:string="";
  constructor() { }

  ngOnInit(): void {
  }

  public keyPressNumeric(event:any) {

    var inp = String.fromCharCode(event.keyCode);
    var numero=event.target.value + inp;
    if (/^00+/.test(numero)){
      return false;
    }
    console.log(numero);
    if (/[0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  public limpiar(event:any){
    this.inputTotalCuenta="";
    this.inputTotalPersonas="";
  }

}
