import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibroService } from 'src/app/services/libro.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowModalComponent } from '../show-modal/show-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-art',
  templateUrl: './eliminar-art.component.html',
  styleUrls: ['./eliminar-art.component.css']
})
export class EliminarArtComponent implements OnInit {
  libro: any = {
    bookRutas: "",
    nameBook: "",
    article: ""
  }
  libros: Libros[] = []; //llamar interfarces del model
  librosMostrar: any[] = [];
  selectedLibro: any;
  allLibros: any;
  article: any;
  getAllLibros(){
    this.libroService.getAllLibros().subscribe((libros: Libros[])=>{
      this.allLibros = libros
    })
  }
  constructor(
    private libroService: LibroService,
    private dialog:MatDialog,
    private _snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    this.libroService.getLibro();
    this.libroService.getLibrosStream().subscribe((libros: Libros[]) => {
      this.libros = libros.map(libro => ({ ...libro, mostrarCompleto: false }));
      console.log(this.libros);
    });
  } 
  mostrarArticuloCompleto(libro: any) {
    libro.mostrarCompleto = true;
    const dialogRef = this.dialog.open(ShowModalComponent, {
      data: {
        bookRutas: libro.bookRutas,
        nameBook: libro.nameBook,
        article: libro.article,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      libro.mostrarCompleto = false;
    });
  }
  deleteArticulo(libro: any) {
    console.log(this.libro);
    this.libroService.deleteArticulo(libro.nameBook).subscribe(()=>{
    this.allLibros = this.allLibros.filter((item: any) => item.nameBook !== libro.nameBook);
    })
    this._snackBar.open('Artículo eliminado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}