import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';
import { SessionComponent } from './home/session/components/session.component';
import { StationsComponent } from './home/station/components/stations/stations.component';
import { UserComponent } from './home/user/components/user.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    StationsComponent,    
    SessionComponent
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
