import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as bodyParser from 'body-parser';
import { Observable, Subject } from 'rxjs';
import { Files } from '../models/files';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  //https://back-iglesia-3c289a779c5b.herokuapp.com

  //readonly url = "https://back-iglesia-3c289a779c5b.herokuapp.com/";
  readonly url = "https://back-iglesia-3c289a779c5b.herokuapp.com/api/images";


  //readonly url = "http://localhost:2500/api/images/";
  imagenes: Files[] = [];
  files$ = new Subject<Files[]>();

  constructor(private http: HttpClient) { }
  deleteHistoria(name_foto: string) {
    const deleteUrl = `${this.url}name_foto/${name_foto}`;
    return this.http.delete(deleteUrl)
  }
  getFile(){
    this.http.get<Files[]>(this.url).subscribe((data)=>{
      this.imagenes = data;
      this.files$.next(this.imagenes);
    })
  }
  getFilesStream(){
    return this.files$.asObservable()
  }
  postFile(name_foto: string, images: FileList){
    const file = new FormData();
    file.append("name_foto", name_foto);
    for(let i=0; i<images.length; i++){
      console.log(images[i])
      file.append("images",images[i]);
    }
    this.http.post<Files>(this.url+"multiple", file).subscribe((response: Files)=>{
      const file: Files = {
        _id:response._id,
        name_foto:response.name_foto,
        imageRutas:response.imageRutas
      }
      this.imagenes.push(file);
      this.files$.next(this.imagenes);
    })
  }
}
