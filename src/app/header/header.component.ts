import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() navClickFired = new EventEmitter<{ recipeComponent: boolean, shoppingComponent: boolean}>();

  onRecipeClick(): void {
    this.navClickFired.emit({
      recipeComponent: true, shoppingComponent: false
    });
  }

  onShoppingClick(): void {
    this.navClickFired.emit({
      recipeComponent: false, shoppingComponent: true
    });
  }
}
