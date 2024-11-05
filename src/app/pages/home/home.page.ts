import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes: RecipeItem[] = [];
  filteredRecipes: RecipeItem[] = [];
  searchTerm: string = '';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly recipeDataService: RecipeDataService
  ) {
    this.recipeDataService.getAllRecipes().subscribe((data: any) => {
      this.recipes = data.recipes;
      this.filteredRecipes = this.recipes;
    })
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onRecipeClicked(args: RecipeItem) {
    this.router.navigate(['recipe', args.id], {
      relativeTo: this.activatedRoute
    });
  }
}
