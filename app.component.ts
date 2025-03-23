import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayAsComponent } from './array-as/array-as.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CountryComponent } from './country/country.component';
import { ParentComponent } from './parent/parent.component';
import { NewccComponent } from './newcc/newcc.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ArrayAsComponent,RadioButtonComponent,CountryComponent,ParentComponent,NewccComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a5';
  
}

