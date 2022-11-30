import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ActiveComponent } from './components/active/active.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavComponent } from './components/nav/nav.component';
import { PostCardComponent } from './components/post-card/post-card.component';

const routes: Routes = [
  { path: 'active', component: ActiveComponent },
  { path: 'inactive', component: InactiveComponent },
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    InactiveComponent,
    HomepageComponent,
    NavComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
