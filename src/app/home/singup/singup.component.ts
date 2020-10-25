import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";

@Component({
    templateUrl: './singup.component.html'
})
export class SingUpComponent implements OnInit{

    singupForm: FormGroup;

    constructor(private formBuilder: FormBuilder){}
    
    ngOnInit(): void {
        this.singupForm = this.formBuilder.group({
            
            email:['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName:['',
                [
                    Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName:['',
                [
                    Validators.required,
                    lowerCaseValidator, 
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],
            password:['',
                [
                    Validators.required, 
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]

        })
    }
}