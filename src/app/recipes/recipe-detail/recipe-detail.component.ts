import {Component, Inject, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RECIPE_SERVICE} from "../IRecipeService";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Params, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private shoppinglistService: ShoppingListService,
              @Inject(RECIPE_SERVICE) private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // console.log(id);
    // this.recipe = this.recipeService.getRecipes()[id];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  onShoppingListClick() {
    this.recipeService.addIngredientsToSL(this.recipe.ingredients);
    // this.recipe.ingredients.forEach(ingredient => {
    //   this.shoppinglistService.addIngredient(ingredient);
    // });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
}
