 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
 import {DropdownDirective} from "./shared/dropdown.directive";
 import {FormsModule, ReactiveFormsModule} from "@angular/forms";
 import {ShoppingListService} from "./shopping-list/shopping-list.service";
 import {RouterModule, Routes} from "@angular/router";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
 import {RecipesServiceProvider} from "./recipes/recipes.service";

 const appRouter: Routes = [
   {path: '', redirectTo: '/recipes', pathMatch: 'full'},
   {path: 'recipes', component: RecipesComponent,
     children: [
       {path: '', component: RecipeStartComponent},
       {path: 'new', component: RecipeEditComponent},
       {path: ':id', component: RecipeDetailComponent},
       {path: ':id/edit', component: RecipeEditComponent},
     ]},
   {path: 'shopping-list', component: ShoppingListComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [ShoppingListService, RecipesServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
