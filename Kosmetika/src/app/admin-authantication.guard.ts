import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';

// export const adminAuthanticationGuard: CanActivateFn = (route, state) => {
//   return true;
// };


export class adminAuthanticationGuard implements CanActivate {
 
 constructor(private sellerService:SellerService){}
 
canActivate(
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if(localStorage.getItem("seller")){
    return true;
    }

    return this.sellerService.issellerLoggedIn;
}


}