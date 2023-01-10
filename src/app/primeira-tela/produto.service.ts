import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get(`${environment.API}/produtos`);
  }

  postProdutos(produtos: any) {
    return this.http.post(`${environment.API}/produtos`, produtos);
  }
}
