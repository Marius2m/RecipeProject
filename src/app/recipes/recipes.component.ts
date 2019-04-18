import {Component, Inject, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService, RecipesServiceProvider} from "./recipes.service";
import {RECIPE_SERVICE} from "./IRecipeService";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServiceProvider]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(@Inject(RECIPE_SERVICE) private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
