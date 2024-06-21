import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  loading : boolean = false;
  constructor(private formBuilder: FormBuilder,private authService :AuthService,private router:Router, 
    private toastr: ToastrService) { }
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
  username : ['', [Validators.required]],
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword : ['', [Validators.required]]
  } );
  }


  onRegister(){
      
console.log(this.user);
this.loading=true;
this.authService.registerUser(this.user).subscribe({
next:(res)=>{
  //////verifyEmail 148
  this. authService.setRegistredUser(this.user);
  //alert("veillez confirmer votre email");
  this.loading=false;
  this.toastr.success('veillez confirmer votre email', 'Confirmation');
  this.router.navigate(["/verifEmail"]);  
},
error: (err: any) => {
  if (err.status === 403) {
    // Gestion de l'erreur 403 Forbidden
    this.err = "Vous n'avez pas la permission d'effectuer cette action.";
  } else if (err.status === 400 && err.error && err.error.errorCode) {
    // Vérification de la présence de la propriété errorCode
    this.err = err.error.errorCode;
  } else {
    // Gestion d'autres erreurs
    this.err = "Une erreur inattendue s'est produite.";
  }
}

}
)
}

}