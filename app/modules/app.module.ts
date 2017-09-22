import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { PlayersModule }         from './players/players.module';
import { routing, appRoutingProviders }  from './app.routing';
import { XHRService } from '../services/XHR.service';

@NgModule({
  imports:      [ BrowserModule, PlayersModule, routing, HttpModule ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders, XHRService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}