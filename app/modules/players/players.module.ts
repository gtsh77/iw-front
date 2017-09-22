import { NgModule }      from '@angular/core';

import { playersRouting } from './players.routing';
import { PlayersComponent }  from './players.component';
import { PlayersListComponent }  from './players.list.component';

@NgModule({
	imports: [ playersRouting ],
	declarations: [ PlayersComponent, PlayersListComponent ]
})
export class PlayersModule {}