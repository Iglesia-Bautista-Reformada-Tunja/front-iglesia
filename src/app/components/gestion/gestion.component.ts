import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Files } from 'src/app/models/files';
import { Libros } from 'src/app/models/libros';
import { FileService } from 'src/app/services/file.service';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  allLibros: any;
  libros: Libros[] = []; 
  form!: FormGroup;
  file!: Files; 
  images!: FileList;
  book!: FormGroup;
  libro!: Libros;
  libroService!: LibroService;
  pdf!:FormGroup;
  constructor(private fileService: FileService, libroService: LibroService) {}
  ngOnInit(): void {
    this.form = new FormGroup({     
      name_foto: new FormControl(null),  
      images: new FormControl(null)
    }) 
  }
  onChangeInput(event: Event){      
    this.images = (event.target as HTMLInputElement).files as FileList     

  }
  createFile(){
    this.fileService.postFile(this.form.value.name_foto, this.images); 
    this.form.reset();
  }
}