import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe!: RecipeItem;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeDataService: RecipeDataService
  ) {
    // Obtener el id de la receta desde los parámetros de la ruta
    // this.route.snapshot.params -> array con todos los parametros
    const id = this.route.snapshot.params['id'];
    this.recipeDataService.getRecipeById(id).subscribe((data: any) => {
      this.recipe = data;
    })
  }

  ngOnInit() {
  }

}
