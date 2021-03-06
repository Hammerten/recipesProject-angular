import { Component, OnInit } from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelectFiredFromChild(value: Recipe): void {
    this.selectedRecipe = value;
  }
}
