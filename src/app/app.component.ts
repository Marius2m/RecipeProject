import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeProject';
  currentTab = 'recipe';

  onNavigate(tabSelected: string){
    this.currentTab = tabSelected;
  }
}
