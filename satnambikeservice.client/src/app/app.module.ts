import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { FormsModule } from '@angular/forms';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    BookingConfirmationComponent,
    WhatsappButtonComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
