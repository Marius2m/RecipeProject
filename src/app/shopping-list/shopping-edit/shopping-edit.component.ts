import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClicked(amountInput: HTMLInputElement){
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = parseInt(amountInput.value);
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    console.log("name: " + ingredientName);
    console.log("amount: " + ingredientAmount.toString());
    this.shoppinglistService.addIngredient(newIngredient);
  }
}
