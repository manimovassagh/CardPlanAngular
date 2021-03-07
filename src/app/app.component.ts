import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title:'Neat Tree',
      imageURL:'assets/tree.jpeg',
      useName:'nature',
      content:'I saw this neat tree today'
    },
    {title:'Snowy Mountain',
      imageURL:'assets/mountain.jpeg',
      useName:'mountainLover',
      content:'Here is a picture of a snowy mountain'
    },
    {title:'Mountain Biking',
      imageURL:'assets/biking.jpeg',
      useName:'biking12222',
      content:'I did some biking today'
    }
  ]
}
