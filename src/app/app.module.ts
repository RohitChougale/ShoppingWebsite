import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMatModule } from './angular-mat/angular-mat.module';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { ServiceService } from './service.service';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMatModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatBadgeModule
  ],
  providers: [CartService, ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
