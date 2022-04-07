import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-novoremedio',
  templateUrl: './novoremedio.component.html',
  styleUrls: ['./novoremedio.component.css']
})
export class NovoremedioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NovoremedioComponent>) { }

  ngOnInit(): void {
  }
  
  cancelar(): void {
    this.dialogRef.close();
  
  }
}

