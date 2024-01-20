import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Files } from 'src/app/models/files';
import { FileService } from 'src/app/services/file.service';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  form!: FormGroup;
  nosotros = ['Que creemos', 'Nuestra historia', 'Contactanos'];
  files: Files[] = []; //llamar interfarces del model
  constructor(private fileService: FileService,
              private fb: FormBuilder,) {
                this.form = this.fb.group({
                  nosotros: ['', Validators.required],
  
                })
  }
  ngOnInit(): void {
    this.fileService.getFile();
    this.fileService.getFilesStream().subscribe((files: Files[])=>{
      this.files = files;
    });
  }
  pdfUrl: string = 'assets/Confesion1689.pdf'
}