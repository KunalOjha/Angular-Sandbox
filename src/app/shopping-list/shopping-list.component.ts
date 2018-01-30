import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({    
    selector: "app-shopping-list",
    templateUrl: './shopping-list.component.html'
})

export class ShoppingList {
    ingredients: Ingredient[] = [
        new Ingredient('Tomato', 4),
        new Ingredient('Banana', 5),
        new Ingredient('Cheese', 1)
    ];

    addToList(newIngredient: Ingredient) {
        console.log(newIngredient);
        this.ingredients.push(newIngredient);
    }
}