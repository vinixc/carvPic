import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SingUpComponent } from "./singup/singup.component";

@NgModule({
    declarations:[
        SigninComponent,
        SingUpComponent
    ],
    imports:[
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule{}