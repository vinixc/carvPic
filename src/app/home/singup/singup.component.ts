import { Route } from "@angular/compiler/src/core";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { NewUser } from "./new-user";
import { SingupService } from "./singup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";

@Component({
    templateUrl: './singup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SingUpComponent implements OnInit{

    singupForm: FormGroup;
    @ViewChild('inputEmail') inputEmail : ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private singupService : SingupService,
        private router : Router,
        private platFormDetector: PlatformDetectorService
    ){}
    
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
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password:['',
                [
                    Validators.required, 
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]

        })

        this.platFormDetector.isPlatFormBrowser() &&
            this.inputEmail.nativeElement.focus();
    }

    signup(){
        const newUser = this.singupForm.getRawValue() as NewUser;
        this.singupService
            .signup(newUser)
            .subscribe(() => this.router.navigate(['']),
                err => console.log(err));

    }
}