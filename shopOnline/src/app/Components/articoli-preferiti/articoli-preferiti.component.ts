import { Component, OnInit } from '@angular/core';
import { iproducts } from '../../interfaces/i-product';
import { ArticoliService } from '../../Services/articoli.service';

@Component({
  selector: 'app-articoli-preferiti',
  templateUrl: './articoli-preferiti.component.html',
  styleUrl: './articoli-preferiti.component.scss',
})
export class ArticoliPreferitiComponent implements OnInit {
  constructor(private articoliSvc: ArticoliService) {}

  arrPreferiti: iproducts[] = [];

  ngOnInit(): void {
    this.articoliSvc.articoliPreferiti$.subscribe((product) => {
      this.arrPreferiti = product;
    });
  }
}
