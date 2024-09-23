import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent, HeaderComponent, ContainerComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Hello World';
  
}
