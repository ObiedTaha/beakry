import { Component, OnInit } from '@angular/core';
import { Irecipes } from 'src/app/interfaces/irecipes';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  constructor(private _recipesService: RecipesService) { }
  recipes:Irecipes[]=[];

  ngOnInit(): void {
    this._recipesService.getRecipes().subscribe({
      next:(response)=>{
        this.recipes=response.meals;
      }
    })
    
  }
}
