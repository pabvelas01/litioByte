import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  @Input() totalCuenta:string="0";
  @Input() personas:string="0";
  @Input() porcentaje:string="0";
  public numericCuenta:number=0;
  public numericPersonas:number=0;
  public numericPorcentaje:number=0;

  public numericPropina:number=0;
  public numericPropinaPorPersona:number=0;
  public cuentaMasPropina:number=0;
  constructor() { }

  private setearValoresNumericos(){
    this.numericCuenta=Number(this.totalCuenta);
    this.numericPersonas=Number(this.personas);
    this.numericPorcentaje=Number(this.porcentaje);
  }

  private resetear(){
    this.numericPropina=0;
    this.numericPropinaPorPersona=0;
    this.cuentaMasPropina=0;
  }
  private calcularPropinas(){
    if(this.numericPersonas >0){
    this.numericPropina=(this.numericPorcentaje/100) * this.numericCuenta;
    this.numericPropinaPorPersona=((this.numericPorcentaje/100)*this.numericCuenta)/5;
    this.cuentaMasPropina=this.numericPropina+this.numericCuenta;
    }
    else{
      this.resetear()
    }
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    
    this.setearValoresNumericos();
    console.log(changes);
    this.calcularPropinas();
}

  refresh(): void {
    window.location.reload();
}
}
