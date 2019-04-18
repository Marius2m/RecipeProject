import {Component, Inject, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RECIPE_SERVICE} from "../IRecipeService";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppinglistService: ShoppingListService,
              @Inject(RECIPE_SERVICE) private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onShoppingListClick() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.shoppinglistService.addIngredient(ingredient);
    // });
  }
}
