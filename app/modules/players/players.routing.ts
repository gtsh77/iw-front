import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent }    from './players.component';
import { PlayersListComponent }    from './players.list.component';

const playersRoutes: Routes = [
  {
    path: 'players',
    component: PlayersComponent
    children: [ 
	    {
	        path: '',
	        component: PlayersListComponent
    ]
  }
];

export const playersRouting: ModuleWithProviders = RouterModule.forChild(playersRoutes);