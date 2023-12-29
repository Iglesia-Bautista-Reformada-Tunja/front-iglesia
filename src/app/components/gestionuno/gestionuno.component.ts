import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Libros } from 'src/app/models/libros';
import { LibroService } from 'src/app/services/libro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gestionuno',
  templateUrl: './gestionuno.component.html',
  styleUrls: ['./gestionuno.component.css']
})
export class GestionunoComponent implements OnInit {

  allLibros: any;
  libros: Libros[] = [];


  getAllLibros(){
    this.libroService.getAllLibros().subscribe((libros: Libros[])=>{
      this.allLibros = libros
    }) 
    
  }

  pdf!:FormGroup;
  libro!: Libros;
  images!: FileList;
  articulo!:FormGroup;
  
  constructor(
    private libroService: LibroService,
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.pdf = new FormGroup({ 
      nameBook: new FormControl(null),
      article: new FormControl(null),
      images: new FormControl(null)
    })
  }
 


  onChangeInput(event: Event){
    this.images = (event.target as HTMLInputElement).files as FileList 

  }

  
  createLibro(){
    this.libroService.postLibro(this.pdf.value.nameBook, this.pdf.value.article, this.images);
    this.pdf.reset();
    this._snackBar.open('Creaste un nuevo Artículo', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
