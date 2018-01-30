import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() eventFromRecipe = new EventEmitter<object>();

  raiseToRecipe(event:Recipe) {
    this.eventFromRecipe.emit(event);
  }
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test Recipe Description 1', 'https://c1.staticflickr.com/5/4215/35589149825_3dfd027833_b.jpg'),
    new Recipe('Test Recipe 2', 'Test Recipe Description 2', 'https://c1.staticflickr.com/5/4215/35589149825_3dfd027833_b.jpg'),
    new Recipe('Test Recipe 3', 'Test Recipe Description 3', 'https://c1.staticflickr.com/5/4215/35589149825_3dfd027833_b.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
