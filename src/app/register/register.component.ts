import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?:string;
  myForm!: FormGroup;

  err:any;


  constructor(private formBuilder: FormBuilder , private authService : AuthService,
              private router : Router
  ) { }

 
        
  onRegister() { 
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe({
      next:(res)=>{
        this.authService.setRegistredUser(this.user);
        alert("veillez confirmer votre email");
        this.router.navigate(["/verifEmail"]);
        
      },


      error:(err:any)=>{ 
      // if(err.error.errorCode=="USER_EMAIL_ALREADY_EXISTS"){
      // this.err="Email_Already_used";
      //  }  } })
      //Dans le cas ou je vais pas utiliser l'erreur de backend donc je vais utiliser cette erreur au niveau de angular 


        if(err.status=400){ ///Dans le cas ou je vais utiliser l'erreur de backend 
          this.err= err.error.message; 
          } 
        } 

    })

}


ngOnInit(): void {
  this.myForm = this.formBuilder.group({ 
      username : ['', [Validators.required]], email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required]] 
    } ); 
    }
}