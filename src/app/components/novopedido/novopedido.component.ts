import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-novopedido',
  templateUrl: './novopedido.component.html',
  styleUrls: ['./novopedido.component.css']
})
export class NovopedidoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NovopedidoComponent>) 
    {}

  ngOnInit(): void {
  }
  
  cancelar(): void {
    this.dialogRef.close();
  
  }
}
