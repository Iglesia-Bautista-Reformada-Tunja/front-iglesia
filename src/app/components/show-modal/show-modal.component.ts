import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.component.html',
  styleUrls: ['./show-modal.component.css']
})
export class ShowModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShowModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cerrarModal(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
