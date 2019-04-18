import {Recipe} from "./recipe.model";
import {IRecipeService, RECIPE_SERVICE} from "./IRecipeService";
import {EventEmitter, Injectable, Provider} from "@angular/core";

@Injectable()
export class RecipesService implements IRecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test Description", "https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg"),
    new Recipe("Test Recipe 2", "Test Description 2", "https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg")
  ];

  getRecipes() {
    return this.recipes.slice(); // .slice() acts like clone
  }

}

export const RecipesServiceProvider: Provider = {
  provide: RECIPE_SERVICE,
  useClass: RecipesService
};
