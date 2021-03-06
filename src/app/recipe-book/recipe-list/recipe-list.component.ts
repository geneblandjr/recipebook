import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This a test recipe for example only, and probably won\'t taste very good.',
                 'http://maxpixel.freegreatpicture.com/static/photo/2x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg' ),
      new Recipe('A Test Recipe', 'This a test recipe for example only, and probably won\'t taste very good.',
                 'http://maxpixel.freegreatpicture.com/static/photo/2x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }
}
