import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectFiredFromChild = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'test1', 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Recipe('A Test Recipe', 'test2', 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg'),
    new Recipe('A Test Recipe', 'test3', 'https://www.sugarandsoul.co/wp-content/uploads/2018/01/hungarian-goulash-recipe-17.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelectFired(recipe: Recipe): void {
    this.recipeSelectFiredFromChild.emit(recipe);
  }

}
