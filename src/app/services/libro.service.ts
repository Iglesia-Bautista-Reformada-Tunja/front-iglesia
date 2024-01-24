import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Libros } from '../models/libros';



@Injectable({
  providedIn: 'root'
})
export class LibroService {

  readonly url = "https://back-iglesia-3c289a779c5b.herokuapp.com/api/libros"
  //readonly url = "http://localhost:2500/api/libros/";
  imagenes: Libros[] = [];
  libros$ = new Subject<Libros[]>();
  httpClient: any;

  constructor(private http: HttpClient) {}
  getAllLibros(){
    return this.httpClient.get("https://back-iglesia-3c289a779c5b.herokuapp.com/api/libros")
    //return this.httpClient.get("http://localhost:2500/api/libros/")
  }
  paginationLibros(){
    return this.http.get("https://back-iglesia-3c289a779c5b.herokuapp.com/api/pagination")
    //return this.http.get("http://localhost:2500/api/pagination")
  }
  deleteArticulo(nameBook: string) {
    const deleteUrl = `${this.url}nameBook/${nameBook}`;
    return this.http.delete(deleteUrl);
  }
  getLibro(){
    this.http.get<Libros[]>(this.url).subscribe((data)=>{
      this.imagenes = data;
      this.libros$.next(this.imagenes);
    })
  }

  getLibrosStream(): Observable<Libros[]> {
    return this.libros$.asObservable();
  }

  postLibro(nameBook: string, article:string, images: FileList){
    const libro = new FormData();
    libro.append("nameBook", nameBook);
    libro.append("article", article);
    for(let i=0; i<images.length; i++){
      console.log(images[i])
      libro.append("images",images[i]);
    }

    this.http.post<Libros>(this.url+"multiple", libro).subscribe((response: Libros)=>{
      const libro: Libros = {
        _id:response._id,
        nameBook:response.nameBook,
        article:response.article,
        bookRutas:response.bookRutas,  
        mostrarCompleto: false
      }
      this.imagenes.push(libro);
      this.libros$.next(this.imagenes);
    })
  }
}
