import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { HomeComponent } from "./home.component";
import { SigninComponent } from "./signin/signin.component";
import { SingUpComponent } from "./singup/singup.component";


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
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [ RouterModule ]
})
export class HomeRoutingModule{

}