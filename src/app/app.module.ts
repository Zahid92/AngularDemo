import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpDataService } from './emp-data.service';
import { FemaleEmployeeDataService } from './female-employee-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalaryupdaterComponent } from './salaryupdater/salaryupdater.component';
import { HeaderComponent } from './header/header.component';
import { PipesComponent } from './pipes/pipes.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './counter/counter.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SalaryupdaterComponent,
    HeaderComponent,
    PipesComponent,
    ViewchildComponent,
    CounterComponent,
    RegistrationComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   // ProductModule
  ],
  providers: [{provide: EmpDataService, useClass: FemaleEmployeeDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
