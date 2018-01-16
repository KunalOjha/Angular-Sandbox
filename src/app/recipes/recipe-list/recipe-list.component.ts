import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'https://c1.staticflickr.com/5/4215/35589149825_3dfd027833_b.jpg'),
    new Recipe('Test Recipe 2', 'Test Recipe Description', 'https://c1.staticflickr.com/5/4215/35589149825_3dfd027833_b.jpg'),
    new Recipe('Test Recipe 3', 'Test Recipe Description', 'https://c1.staticflickr.com/5/4215/35589149825_3dfd027833_b.jpg' )
  ];
  constructor() { }

  ngOnInit() {
  }

}
