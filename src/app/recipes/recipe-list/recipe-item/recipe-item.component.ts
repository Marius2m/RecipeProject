import {Component, Inject, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RECIPE_SERVICE} from "../../IRecipeService";
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(@Inject(RECIPE_SERVICE) private recipeService: RecipesService) {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
