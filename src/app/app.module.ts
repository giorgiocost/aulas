import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiraTelaComponent } from './primeira-tela/primeira-tela.component';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';
import { MenuComponent } from './menu/menu.component';
import { TerceiraTelaComponent } from './terceira-tela/terceira-tela.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ProdutoService } from './primeira-tela/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraTelaComponent,
    SegundaTelaComponent,
    MenuComponent,
    TerceiraTelaComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
