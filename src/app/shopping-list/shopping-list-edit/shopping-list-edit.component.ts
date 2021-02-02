import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addNewIngredientFired = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') ingredientNameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') ingredientAmountInputRef: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient(): void {
    if (this.ingredientNameInputRef && this.ingredientAmountInputRef)
    {
      const ingName = this.ingredientNameInputRef.nativeElement.value;
      const ingAmount = this.ingredientAmountInputRef.nativeElement.value
      const newIngredient = new Ingredient(
        ingName, ingAmount
      );
      this.addNewIngredientFired.emit(newIngredient);
    }
  }

}
