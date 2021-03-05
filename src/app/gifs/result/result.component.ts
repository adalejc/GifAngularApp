import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {

  constructor(private gifsService: GifsService) { }

  get resultados() {
    return this.gifsService.resultados;
  }


}
