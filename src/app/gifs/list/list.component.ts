import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  constructor(private gifsService: GifsService) { }

  get historial(): string[] {
    return this.gifsService.historial;
  }

  buscar(item: string): void {
    this.gifsService.buscarGifs(item);
  }

}
