import {Recipe} from "./recipe.model";
import {InjectionToken} from "@angular/core";

export interface IRecipeService {
  getRecipes(): Recipe[];

}

export const RECIPE_SERVICE = new InjectionToken<IRecipeService>('RECIPE_SERVICE');
