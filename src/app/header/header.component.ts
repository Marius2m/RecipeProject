import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent{
  @Output() tabClicked = new EventEmitter<string>();

  onRecipeClicked(){
    this.tabClicked.emit('recipe');
    console.log("recipe");
  }

  onShoppingClicked(){
    this.tabClicked.emit('shopping-list');
    console.log("shop");
  }

}
