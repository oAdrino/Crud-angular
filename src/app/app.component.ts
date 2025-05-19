import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinhaPaginaComponent } from './minha-pagina/minha-pagina.component'
import { HelloWorldComponent } from './HelloWorld/helloword.component';
import { CalculadoraComponent } from './calculadora/calculadora.component'


@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhaPaginaComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projetos-angular';
}
