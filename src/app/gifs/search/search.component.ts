import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search(): void {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length) {
      this.gifsService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value = "";
    }
  }
}
