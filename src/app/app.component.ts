import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [

    {
      url : 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/09/legiao_8e2uoBnN5EZF.jpg.jpeg',
      description : 'Gohan'
    },
    {
      url : 'https://www.imagenswiki.com/Uploads/imagenswiki.com/ImagensGrandes/son-goku-super-guerreiro.jpg',
      description : 'Goku'
    }
  ]
}
