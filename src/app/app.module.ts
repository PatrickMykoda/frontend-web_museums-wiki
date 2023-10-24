import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaModule } from './artista/artista.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { ObraModule } from './obra/obra.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MuseoModule } from './museo/museo.module';
import { ExhibicionModule } from './exhibicion/exhibicion.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { MuseoRoutingModule } from './museo-routing/museo-routing.module';
import { ArtistaRoutingModule } from './artista-routing/artista-routing.module';
import { ExhibicionRoutingModule } from './exhibicion-routing/exhibicion-routing.module';
import { ObraRoutingModule } from './obra-routing/obra-routing.module';
import { HomeRoutingComponent } from './home-routing/home-routing.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { HttpErrorInterceptorService} from './interceptors/HttpErrorInterceptorService.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovimientoRoutingModule } from './movimiento-routing/movimiento-routing.module';
import { SponsorRoutingModule } from './sponsor-routing/sponsor-routing.module';

@NgModule({
  declarations: [
    AppComponent,
      HomeRoutingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtistaModule,
    MovimientoModule,
    ObraModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    MuseoModule,
    ExhibicionModule,
    SponsorModule,
    MuseoRoutingModule,
    ArtistaRoutingModule,
    ExhibicionRoutingModule,
    ObraRoutingModule,
    HomeRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }
    ),
    BrowserAnimationsModule,
    MovimientoRoutingModule,
    SponsorRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
