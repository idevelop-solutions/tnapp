import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { PasswordResetRequestComponent } from './views/password/password-reset-request/password-reset-request.component';
import { PasswordResetResponseComponent } from './views/password/password-reset-response/password-reset-response.component';
export const routes: Routes = [
  {
    path: '',
    canActivate:[BeforeLoginService],
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P404Component,  
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    canActivate:[BeforeLoginService],
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'password-reset-response',
    canActivate:[BeforeLoginService],
    component:PasswordResetResponseComponent,
    data: {
      title: 'Reset Password'
    }
  },
  {
    path: 'password-reset-request',
    canActivate:[BeforeLoginService],
    component: PasswordResetRequestComponent,
    data: {
      title: 'Reset Password'
    }
  },
  {
    path: 'dashboard',
    canActivate:[AfterLoginService],
    redirectTo: '/dashboard', 
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate:[AfterLoginService],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
