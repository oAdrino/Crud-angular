import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number =0;

  calcularResultado(){

    console.log("Chamando o método para calcular o resultado!");
    this.resultado = this.numero1 + this.numero2;
  }
}s
