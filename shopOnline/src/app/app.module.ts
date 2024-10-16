import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Components/home/home.component';
import { ArticoliPreferitiComponent } from './Components/articoli-preferiti/articoli-preferiti.component';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CartComponent } from './Components/navbar/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticoliPreferitiComponent,
    NavbarComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
