import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent }    from './players.component';
import { PlayersListComponent }    from './players.list.component';
import { PlayersListResolveService } from '../../services/players.list.resolve.service';

const playersRoutes: Routes = [
  {
    path: 'players',
    component: PlayersComponent,
    children: [ 
	    {
	        path: '',
	        component: PlayersListComponent,
			resolve: {
				players: PlayersListResolveService
			}	
		}        
    ]
  }
];

export const playersRouting: ModuleWithProviders = RouterModule.forChild(playersRoutes);