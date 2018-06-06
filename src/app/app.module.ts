import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CoinsComponent } from './coins/coins.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const myRoots: Routes = [
  { path: 'register', data: { title: 'Book List' },component: CoinsComponent },
  { path: 'home', data: { title: 'Home List' },component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    CoinsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
