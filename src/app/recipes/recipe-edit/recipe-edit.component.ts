import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RECIPE_SERVICE} from "../IRecipeService";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              @Inject(RECIPE_SERVICE) private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.id = +params.get('id');
      this.editMode = params.get('id') != null;
      this.initForm();
    });
    console.log(this.route.snapshot.params);
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe.ingredients.length > 0) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, [Validators.required]),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(recipeImgPath, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'ingredients': recipeIngredients,
    });
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],
    );
    // console.log(newRecipe);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id,newRecipe);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value); // or use newRecipe
    }
    this.onCancel();
    // console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
