import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'pipes', component: PipesComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'empList', component: EmployeesComponent},
  {path:'product', loadChildren:()=>import('./product/product.module').then(mod=>mod.ProductModule)},
  {path:'users', component: UserComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
