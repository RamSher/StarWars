import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'character-list', component: AppComponent },
  { path: 'character/:name', component: CharacterDetailsComponent },
];
@NgModule({
  declarations: [AppComponent, CharacterDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
