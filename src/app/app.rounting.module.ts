import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/auth/auth.guard";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./home/signin/signin.component";
import { SingUpComponent } from "./home/singup/singup.component";

import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";


const routes : Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path:'',
                component: SigninComponent
            },
            {
                path:'signup',
                component: SingUpComponent
            }
        ]
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {photos: PhotoListResolver}
    },
    {
        path: 'p/add', 
        component: PhotoFormComponent
    },
    {
        path: '',
        component: SigninComponent
        
    },
    {
        path:'singup',
        component: SingUpComponent
    },
    {
        path: '**', 
        component : NotFoundComponent
    }
   
];

@NgModule({
    imports : [RouterModule.forRoot(routes, {useHash:true})],
    exports : [ RouterModule ]
})
export class AppRoutingModule{

}