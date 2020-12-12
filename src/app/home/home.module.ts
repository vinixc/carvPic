import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SingUpComponent } from "./singup/singup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
    declarations:[
        SigninComponent,
        SingUpComponent,
        HomeComponent
    ],
    imports:[
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ]
})
export class HomeModule{}