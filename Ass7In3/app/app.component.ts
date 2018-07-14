import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travelling Portal';

  city = [
    {name : "Pune"},
    {name : "Mumbai"},
    {name : "Delhi"},
    {name : "Hydrabad"}
  ];

  selectedValue: String;
}
