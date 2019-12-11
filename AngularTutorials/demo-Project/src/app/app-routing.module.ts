import { NgModule } from '@angular/core';
import { Router , RouterModule,ActivatedRouteSnapshot } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';


const appRoute =[
                    {path:'', redirectTo: '/recipe', pathMatch:'full' },
                    {path:'recipe', component: RecipeComponent, children:[
                        {path:'',component:RecipeStartComponent},
                        {path:'new',component:RecipeEditComponent},
                        {path:':id',component:RecipeDetailsComponent},
                        {path:':id/edit',component:RecipeEditComponent},
                    ] },
                    {path:'shopping', component:ShoppingListComponent}
                ]
@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}