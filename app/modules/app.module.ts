import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PlayersModule }         from './players/players.module';
import { routing, appRoutingProviders }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, PlayersModule, routing ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}