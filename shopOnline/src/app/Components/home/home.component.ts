import { Component, OnInit } from '@angular/core';
import { ArticoliService } from '../../Services/articoli.service';
import { iproducts } from '../../interfaces/i-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private productSvc: ArticoliService) {}
  arrBeauty!: iproducts[];
  arrFragrances!: iproducts[];
  arrFurniture!: iproducts[];
  arrGroceries!: iproducts[];

  ngOnInit(): void {
    this.productSvc.getAllProduct().subscribe({
      next: (data) => {
        console.log('Dati ricevuti:', data);
        this.arrBeauty = data.filter((data) => data.category == 'beauty');
        this.arrFragrances = data.filter(
          (data) => data.category == 'fragrances'
        );
        this.arrFurniture = data.filter((data) => data.category == 'furniture');
        this.arrGroceries = data.filter((data) => data.category == 'groceries');
      },
      error: (error) => {
        console.error('Errore durante la chiamata:', error); // Gestione errore
      },
    });
  }
}
