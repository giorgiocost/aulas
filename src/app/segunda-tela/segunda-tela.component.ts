import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoService } from '../primeira-tela/produto.service';

@Component({
  selector: 'segunda-tela',
  templateUrl: './segunda-tela.component.html',
  styleUrls: ['./segunda-tela.component.scss']
})
export class SegundaTelaComponent implements OnInit {

  produtoForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private produtoService: ProdutoService) { }

  ngOnInit() {
    this.startForm();
  }

  startForm() {
    this.produtoForm = this.fb.group({
      name: [''],
      url: [''],
      price: [''],
      evaluation: [[]]
    });
  }

  onSubmit() {
    this.produtoService.postProdutos(this.produtoForm.value)
    console.log(this.produtoForm.value)
  }

}
