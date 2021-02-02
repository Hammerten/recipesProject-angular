import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-project';
  loadComponents: {recipeComponent: boolean, shoppingComponent: boolean} = {
    recipeComponent: true, shoppingComponent: false
  };

  onNavClickFired(loadComponents: {recipeComponent: boolean, shoppingComponent: boolean}): void {
    this.loadComponents = {
      recipeComponent: loadComponents.recipeComponent,
      shoppingComponent: loadComponents.shoppingComponent,
    };
  }
}

