import {Component, OnInit} from '@angular/core';
import {RecipesServiceProvider} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesServiceProvider]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
