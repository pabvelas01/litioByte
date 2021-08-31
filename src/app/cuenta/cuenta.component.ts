import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  public inputTotalCuenta:number=0;
  public inputTotalPersonas:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
