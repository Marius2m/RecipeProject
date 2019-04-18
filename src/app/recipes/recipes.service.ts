import {Recipe} from "./recipe.model";
import {IRecipeService, RECIPE_SERVICE} from "./IRecipeService";
import {EventEmitter, Injectable, Provider} from "@angular/core";
import {Ingredient} from "../shared/Ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService implements IRecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "Test Description",
      "https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg",
      [
        new Ingredient('meat',2),
        new Ingredient('salad', 3)
      ]
    ),
    new Recipe(
      "Test Recipe 2",
      "Test Description 2",
      "https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg",
      [
        new Ingredient('tomatoes',4),
        new Ingredient('eggs', 2),
        new Ingredient('carrot', 3),
      ]
    ),
  ];

  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // .slice() acts like clone
  }

  addIngredientsToSL(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients);
  }

}

export const RecipesServiceProvider: Provider = {
  provide: RECIPE_SERVICE,
  useClass: RecipesService
};
