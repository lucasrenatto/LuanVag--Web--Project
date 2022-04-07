import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NovopedidoComponent } from 'src/app/components/novopedido/novopedido.component';
import { LabComponent } from '../lab/lab.component';

@Component({
  selector: 'app-pediven',
  templateUrl: './pediven.component.html',
  styleUrls: ['./pediven.component.css']
})
export class PedivenComponent implements OnInit {

  constructor(
    public dialog:MatDialog
  ) { }

  

  
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NovopedidoComponent, {
      width: '450px',
      height:'290px'
     
    });
    


  }
  
}



