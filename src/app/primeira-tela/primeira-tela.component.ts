import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'primeira-tela',
  templateUrl: './primeira-tela.component.html',
  styleUrls: ['./primeira-tela.component.scss']
})
export class PrimeiraTelaComponent implements OnInit {
  products: any;
  quantidade: number;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos()
  }

  getProdutos(): void {
    this.produtoService.getProdutos()
    .subscribe(response => {
        this.products = response;
        this.getQuantidadeDeProduto(this.products);
      }, error => {
        console.error('error', error)
      }
    )
  }

  getQuantidadeDeProduto(produto: any[]): void {
    this.quantidade = produto.length;
  }

}
