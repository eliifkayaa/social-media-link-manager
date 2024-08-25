import { Routes } from '@angular/router';
import { AuthGuard } from './commons/guard/auth.guard';
import { TableComponent } from './components/organisms/table/table.component';
import { LoginComponent } from './components/templates/login/login.component';
import { RegisterComponent } from './components/templates/register/register.component';
import { HomePageComponent } from './components/templates/home-page/home-page.component';
import { PageComponent } from './components/page/page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: PageComponent,
    canActivate: [AuthGuard]
  }
];
