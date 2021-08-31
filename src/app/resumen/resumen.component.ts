import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  @Input() propinaPorPersona:string="0.0";
  constructor() { }

  ngOnInit(): void {
  }
  refresh(): void {
    window.location.reload();
}
}
