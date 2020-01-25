import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test recipe','a test recipe','https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
