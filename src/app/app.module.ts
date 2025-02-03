import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IconComponent } from './components/icon/icon.component';
import { HowWorkComponent } from './components/how-work/how-work.component';
import { AboutComponent } from './components/about/about.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { TestymonialsComponent } from './components/testymonials/testymonials.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconComponent,
    HowWorkComponent,
    AboutComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Required for ToastrModule to work
    ToastrModule.forRoot() // Import ToastrModule globally
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
