import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { VolunteerComponent } from './volunteer/volunteer.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'volunteer',component:VolunteerComponent},{path:'register',component:RegisterComponent},{path:'admin',component:AdminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
