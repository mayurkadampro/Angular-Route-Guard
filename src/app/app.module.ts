import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewComponent } from './components/view/view.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ClilistComponent } from './components/clilist/clilist.component';
import { TermsComponent } from './components/terms/terms.component';
import { ViewNameComponent } from './components/view-name/view-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ViewComponent,
    UserlistComponent,
    ClilistComponent,
    TermsComponent,
    ViewNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
