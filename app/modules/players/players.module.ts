import { NgModule }      from '@angular/core';

import { playersRouting } from './players.routing';
import { PlayersComponent }  from './players.component';
import { PlayersListComponent }  from './players.list.component';
import { PlayersListResolveService } from '../../services/players.list.resolve.service';

@NgModule({
	imports: [ playersRouting ],
	declarations: [ PlayersComponent, PlayersListComponent ],
	providers: [ PlayersListResolveService ]
})
export class PlayersModule {}