import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  @Output() recipeSelectFired = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(): void {
    this.recipeSelectFired.emit();
  }
}
