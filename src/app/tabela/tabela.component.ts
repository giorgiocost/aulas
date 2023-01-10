import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() listarProdutoNaTabela;
  @Input() quantidade;

  constructor() { }

  ngOnInit() {
  }

}
