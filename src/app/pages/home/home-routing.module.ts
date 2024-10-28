import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recipe/:id', // Ruta para los detalles de una receta, :id es un param dinámico
    component: RecipeDetailPage
  },
  {
    path: '**', // Ruta comodín
    redirectTo: '', // Redirige a ña ruta raíz
    pathMatch: 'full' // Asegura que el redirecto sólo ocurra si la ruta coincide
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
