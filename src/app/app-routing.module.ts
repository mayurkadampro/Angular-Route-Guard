import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClilistComponent } from './components/clilist/clilist.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TermsComponent } from './components/terms/terms.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ViewNameComponent } from './components/view-name/view-name.component';
import { ViewComponent } from './components/view/view.component';
import { AuthGuard } from './guard/auth.guard';
import { ChildGuard } from './guard/child.guard';
import { LazyauthGuard } from './guard/lazyauth.guard';
import { ResolveDataGuard } from './guard/resolve-data.guard';
import { TermsGuard } from './guard/terms.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "view",
    component: ViewComponent,
    children: [
      {
        path: "",
        canActivateChild: [ChildGuard],
        children: [
          {
            path: "user",
            component: UserlistComponent
          },
          {
            path: "client",
            component: ClilistComponent
          }
        ]
      }
    ]
  },
  {
    path: "getName",
    canActivate: [AuthGuard],
    resolve: {
      data: ResolveDataGuard
    },
    component: ViewNameComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "terms",
    component: TermsComponent,
    canDeactivate: [TermsGuard]
  },
  {
    path: "about",
    canActivate: [AuthGuard],
    loadChildren: () => import("./components/about/about.module").then(m => m.AboutModule)
  },
  {
    path: "contact",
    canLoad: [LazyauthGuard],
    loadChildren: () => import("./components/contact/contact.module").then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
