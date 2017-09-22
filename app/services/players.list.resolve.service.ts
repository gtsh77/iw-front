import { Injectable}     from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { XHRService } from '../services/XHR.service';
import { Observable } from 'rxjs';


@Injectable()
export class PlayersListResolveService implements Resolve<any> {
	constructor(private router:Router, private xhr:XHRService){}
	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		return this.xhr.doGET({
			url: `http://localhost:8580/get/players?order_by=points`,
			//header: ['Authorization','Bearer ' + this.global.access_token],
			body: {}
		}).catch(() => {
			//this.router.navigateByUrl('/');
			return [null];
		});
	}
}