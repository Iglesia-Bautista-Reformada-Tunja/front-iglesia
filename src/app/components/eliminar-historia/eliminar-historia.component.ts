import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Files } from 'src/app/models/files';
import { FileService } from 'src/app/services/file.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-historia',
  templateUrl: './eliminar-historia.component.html',
  styleUrls: ['./eliminar-historia.component.css']
})
export class EliminarHistoriaComponent implements OnInit {
  form!: FormGroup;

  file: any = {
    imageRutas: '',
    name_foto: ''
  }

  files: Files[] = [];
  //filesMostrar: any[] = [];

  allFiles: any;


  constructor(
    private fileService: FileService,
    private dialog:MatDialog,
    private _snackBar: MatSnackBar
    ) { } //suscripcion al servicio

  ngOnInit(): void {
    this.fileService.getFile();
    this.fileService.getFilesStream().subscribe((files: Files[])=>{
      this.files = files;
      console.log(this.files);
    });
  }

  deleteHistoria(file: any) {
    console.log(this.file);

    this.fileService.deleteHistoria(file.name_foto).subscribe(()=>{
    this.allFiles = this.allFiles.filter((item: any) => item.name_foto !== file.nameBook);
    })
    this._snackBar.open('Historia eliminada', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}

/*

export interface Files {
    _id: string;
    name_foto: string;
    imageRutas: string[];
}
*/