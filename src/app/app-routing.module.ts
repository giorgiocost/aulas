import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeiraTelaComponent } from './primeira-tela/primeira-tela.component';
import { SegundaTelaComponent } from './segunda-tela/segunda-tela.component';
import { TerceiraTelaComponent } from './terceira-tela/terceira-tela.component';

const routes: Routes = [
  { path: 'primeira', component: PrimeiraTelaComponent},
  { path: 'segunda', component: SegundaTelaComponent},
  { path: 'terceira', component: TerceiraTelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
