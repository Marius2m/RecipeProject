import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RecipeProject';
  currentTab: string;

  onNavigate(tabSelected: string){
    this.currentTab = tabSelected;
  }

  ngOnInit(): void {
    this.currentTab = 'recipe';
  }


}
