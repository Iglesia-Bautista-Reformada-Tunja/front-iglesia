import { Component, OnInit } from '@angular/core';
import { Files } from 'src/app/models/files';
import { FileService } from 'src/app/services/file.service';
//import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import { DescripcionModalComponent } from './descripcion-modal/descripcion-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  files: Files[] = []; //llamar interfarces del model
 

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFile();
    this.fileService.getFilesStream().subscribe((files: Files[])=>{
      this.files = files;
      //console.log(this.files);
    });
  }

  openWhatsApp() {
    const whatsappURL = 'https://wa.me/573112089172';
    window.open(whatsappURL, '_blank');
  }
}
