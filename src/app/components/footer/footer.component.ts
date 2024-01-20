import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  openWhatsApp() {
    const whatsappURL = 'https://wa.me/573112089172';
    window.open(whatsappURL, '_blank');
  }
}