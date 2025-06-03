import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { ItemLista } from './itemlista'
@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {


  item: string = '';
  lista: ItemLista[] = [] 


  adicionarItem(){
    let itemlista = new ItemLista();
    itemlista.nome = this.item;
    itemlista.id = this.lista.length + 1;

    this.lista.push(itemlista);


    this.item = '';
  }
}
